import { Utils } from '@peage-pay-web/utils';
import { SectionStatusType, SectionType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faPen, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@peage-pay-web/ui';

interface SectionMapMarkerProps {
  section: SectionType;
}

const SectionMapMarker = ({ section }: SectionMapMarkerProps): JSX.Element => {
  return (
    <div className="group flex flex-col py-[0.3rem] px-[0.5rem] translate-y-[0.5rem] font-bold bg-base-100 rounded-lg relative border-edge-100 border-[1px]">
      <div className="flex">
        <div className="flex">
          <span className="hidden group-hover:flex">Distance: </span>{' '}
          {section.distance} km
        </div>
      </div>
      <div className="hidden group-hover:flex flex-col">
        <a
          className="w-full my-[0.5rem]"
          href={`/dashboard/section/edit/${section.fromToll.id}/${section.toToll.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant={'base-200'}
            className="mr-[0.5rem] min-h-[2rem] w-full"
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Edit</Button.Content>
          </Button>
        </a>
        <div className="flex justify-center items-center p-[0.5rem] bg-base-200 border-edge-100 border-[1px] rounded-lg">
          {section.fromToll.name}
        </div>

        <div className="flex p-[0.5rem] justify-center items-center">
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faDownLong}
              className={Utils.cn(
                'text-[20pt] mb-[0.5rem]',
                section.fromStatus === SectionStatusType.NormalTraffic &&
                  'text-green-500',
                section.fromStatus === SectionStatusType.ModerateTraffic &&
                  'text-yellow-500',
                section.fromStatus === SectionStatusType.HighTraffic &&
                  'text-orange-400',
                section.fromStatus === SectionStatusType.Blocked &&
                  'text-red-500',
              )}
            ></FontAwesomeIcon>
            <div className="">{section.fromStatus}</div>
          </div>
          <div className="flex flex-col ml-[0.5rem]">
            <FontAwesomeIcon
              icon={faUpLong}
              className={Utils.cn(
                'text-[20pt] mb-[0.5rem]',
                section.toStatus === SectionStatusType.NormalTraffic &&
                  'text-green-500',
                section.toStatus === SectionStatusType.ModerateTraffic &&
                  'text-yellow-500',
                section.toStatus === SectionStatusType.HighTraffic &&
                  'text-orange-400',
                section.toStatus === SectionStatusType.Blocked &&
                  'text-red-500',
              )}
            ></FontAwesomeIcon>
            <div className="">{section.toStatus}</div>
          </div>
        </div>
        <div className="flex justify-center items-center p-[0.5rem] bg-base-200 border-edge-100 border-[1px] rounded-lg">
          {section.toToll.name}
        </div>
      </div>
    </div>
  );
};

export default SectionMapMarker;
