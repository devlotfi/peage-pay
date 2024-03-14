import { GraphTollDistanceType } from '../../__generated__/graphql';

interface GraphTollDistanceMapMarkerProps {
  graphTollDistance: GraphTollDistanceType;
}

const GraphTollDistanceMapMarker = ({
  graphTollDistance,
}: GraphTollDistanceMapMarkerProps): JSX.Element => {
  return (
    <div className="flex flex-col py-[0.3rem] px-[0.5rem] translate-y-[0.5rem] font-bold bg-base-100 rounded-lg relative border-edge-100 border-[1px]">
      {graphTollDistance.distance} km
    </div>
  );
};

export default GraphTollDistanceMapMarker;
