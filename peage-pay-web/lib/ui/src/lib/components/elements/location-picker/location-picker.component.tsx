import { Wrapper, Status } from '@googlemaps/react-wrapper';

interface LocationPickerProps {
  onChange: (value: any) => void;
}

const LocationPicker = ({ onChange }: LocationPickerProps): JSX.Element => {
  return (
    <Wrapper apiKey={import.meta.env['GOOGLE_MAPS_API_KEY']}>
      <h1>lol</h1>
    </Wrapper>
  );
};
export default LocationPicker;
