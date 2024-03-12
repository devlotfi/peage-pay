import * as React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { createCustomEqual } from 'fast-equals';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import TextInput from '../text-input/text-input.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faLocationDot,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button/button.component';
import Modal from '../modal/modal.component';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const deepCompareEqualsForMaps = createCustomEqual(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (deepEqual) => (a: any, b: any, state) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  },
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies: any[],
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName),
      );

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<Partial<google.maps.marker.AdvancedMarkerElement>> = (
  options,
) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

interface LocationPickerProps {
  onChange?: (latLng: google.maps.LatLng | null) => void;
  modalRef: React.LegacyRef<HTMLDialogElement>;
}

const LocationPicker = ({
  onChange,
  modalRef,
}: LocationPickerProps): JSX.Element => {
  const [selectedLocation, setSelectedLocation] =
    React.useState<google.maps.LatLng | null>(null);
  const [zoom, setZoom] = React.useState(3);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setSelectedLocation(e.latLng);
    console.log(e.latLng);
    if (onChange) {
      onChange(e.latLng);
    }
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setZoom(m.getZoom()!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setCenter(m.getCenter()!.toJSON());
  };

  const clearSelectedPosition = () => {
    setSelectedLocation(null);
  };

  const confirmPicker = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    modalRef.current.close();
  };

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="h-full">
        <Modal.Header>lol</Modal.Header>
        <Modal.Content>
          <div className="flex h-full w-full flex-col bg-base-100 z-[5000]">
            <div className="flex justify-between flex-col lg:flex-row py-[1rem]">
              <div className="flex mb-[0.5rem] lg:mb-[0rem]">
                <TextInput variant={'edge-100'} className="w-full">
                  <TextInput.Main>
                    <TextInput.Label>Latitude</TextInput.Label>
                    <TextInput.Icon position={'left'}>
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </TextInput.Icon>
                    <TextInput.Field
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
            <Wrapper
              apiKey={import.meta.env['VITE_GOOGLE_MAPS_API_KEY']}
              render={render}
            >
              <Map
                center={center}
                onClick={onClick}
                onIdle={onIdle}
                zoom={zoom}
                style={{ flexGrow: '1', height: '100%', borderRadius: '7px' }}
              >
                {selectedLocation ? (
                  <Marker position={selectedLocation}></Marker>
                ) : null}
              </Map>
            </Wrapper>
          </div>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default LocationPicker;
