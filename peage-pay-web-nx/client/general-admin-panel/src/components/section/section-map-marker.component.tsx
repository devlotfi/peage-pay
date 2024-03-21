import { Utils } from '@peage-pay-web/utils';
import { SectionStatusType, SectionType } from '../../__generated__/graphql';

interface SectionMapMarkerProps {
  section: SectionType;
}

const SectionMapMarker = ({ section }: SectionMapMarkerProps): JSX.Element => {
  return (
    <div className="group flex flex-col py-[0.3rem] px-[0.5rem] translate-y-[0.5rem] font-bold bg-base-100 rounded-lg relative border-edge-100 border-[1px]">
      <div className="flex">
        <div
          className={Utils.cn(
            'flex h-[0.7rem] w-[0.7rem] rounded-full mr-[0.2rem]',
            section.status === SectionStatusType.NormalTraffic &&
              'bg-green-500',
            section.status === SectionStatusType.ModerateTraffic &&
              'bg-yellow-500',
            section.status === SectionStatusType.HighTraffic && 'bg-orange-400',
            section.status === SectionStatusType.Blocked && 'bg-red-500',
          )}
        ></div>
        <div className="flex">
          <span className="hidden group-hover:flex">Distance: </span>{' '}
          {section.distance} km
        </div>
      </div>
      <div className="hidden group-hover:flex">Status: {section.status}</div>
    </div>
  );
};

export default SectionMapMarker;
