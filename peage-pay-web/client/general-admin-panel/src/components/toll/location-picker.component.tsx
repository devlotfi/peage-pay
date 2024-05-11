/// <reference types="@types/google.maps" />

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faLocationDot,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Modal, TextInput, Button } from '@peage-pay-web/ui';
import { RefObject, useEffect, useState } from 'react';

interface LocationPickerProps {
  onChange?: (latLng: google.maps.LatLng | null) => void;
  initialValue?: { lat: number; lng: number };
  modalRef: RefObject<HTMLDialogElement>;
}

let locationPickerMap: google.maps.Map | null = null;
let locationPickerMarker: google.maps.marker.AdvancedMarkerElement | null =
  null;

const LocationPicker = ({
  onChange,
  modalRef,
  initialValue,
}: LocationPickerProps): JSX.Element => {
  const [selectedLocation, setSelectedLocation] =
    useState<google.maps.LatLng | null>(null);

  const getMapMount = (): HTMLElement => {
    return document.getElementById('location-picker-map') as HTMLElement;
  };

  const clearSelectedPosition = () => {
    setSelectedLocation(null);
    if (locationPickerMarker) {
      locationPickerMarker.map = null;
    }
  };

  const confirmPicker = () => {
    modalRef.current?.close();
  };

  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    if (locationPickerMarker) {
      locationPickerMarker.map = null;
    }

    setSelectedLocation(e.latLng);
    if (onChange) {
      onChange(e.latLng);
    }

    const { PinElement, AdvancedMarkerElement } =
      (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

    const pinView = new PinElement({
      glyphColor: '#FFFFFF',
      background: '#2AA8EE',
      borderColor: '#2AA8EE',
    });
    const marker = new AdvancedMarkerElement({
      map: locationPickerMap,
      position: e.latLng,
      content: pinView.element,
    });
    locationPickerMarker = marker;
  };

  const initMap = async () => {
    const { Map } = (await google.maps.importLibrary(
      'maps',
    )) as google.maps.MapsLibrary;
    const { PinElement, AdvancedMarkerElement } =
      (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

    const map = new Map(getMapMount(), {
      center: { lat: 28.76, lng: 2.89 },
      zoom: 5,
      mapId: '4504f8b37365c3d0',
      mapTypeId: 'hybrid',
    });

    if (initialValue) {
      const pinView = new PinElement({
        glyphColor: '#FFFFFF',
        background: '#2AA8EE',
        borderColor: '#2AA8EE',
      });
      const marker = new AdvancedMarkerElement({
        map: map,
        position: new google.maps.LatLng({
          lat: initialValue.lat,
          lng: initialValue.lng,
        }),
        content: pinView.element,
      });
      setSelectedLocation(
        new google.maps.LatLng({
          lat: initialValue.lat,
          lng: initialValue.lng,
        }),
      );
      locationPickerMarker = marker;
    }

    map.addListener('click', handleMapClick);
    locationPickerMap = map;
  };

  useEffect(() => {
    initMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="h-full">
        <Modal.Header>Location picker</Modal.Header>
        <Modal.Content>
          <div className="flex h-full w-full flex-col bg-base-100">
            <div className="flex justify-between flex-col lg:flex-row py-[1rem]">
              <div className="flex mb-[0.5rem] lg:mb-[0rem]">
                <TextInput variant={'edge-100'} className="w-full">
                  <TextInput.Main>
                    <TextInput.Label>Latitude</TextInput.Label>
                    <TextInput.Icon position={'left'}>
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </TextInput.Icon>
                    <TextInput.Field
                      readOnly
                      type={'text'}
                      value={
                        selectedLocation
                          ? selectedLocation.lat()
                          : 'Not Selected'
                      }
                    ></TextInput.Field>
                  </TextInput.Main>
                </TextInput>
                <TextInput variant={'edge-100'} className="w-full ml-[0.5rem]">
                  <TextInput.Main>
                    <TextInput.Label>Longitude</TextInput.Label>
                    <TextInput.Icon position={'left'}>
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </TextInput.Icon>
                    <TextInput.Field
                      readOnly
                      type={'text'}
                      value={
                        selectedLocation
                          ? selectedLocation.lng()
                          : 'Not Selected'
                      }
                    ></TextInput.Field>
                  </TextInput.Main>
                </TextInput>

                {selectedLocation ? (
                  <Button
                    type="button"
                    onClick={clearSelectedPosition}
                    variant={'error'}
                    className="ml-[0.5rem]"
                  >
                    <Button.Icon position={'left'}>
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Button.Icon>
                    <Button.Content>Clear</Button.Content>
                  </Button>
                ) : null}
              </div>
              <div className="flex justify-between lg:justify-start">
                <Button
                  type="button"
                  onClick={confirmPicker}
                  variant={'primary'}
                >
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Ok</Button.Content>
                </Button>
              </div>
            </div>
            <div id="location-picker-map" className="h-full rounded-lg"></div>
          </div>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default LocationPicker;
