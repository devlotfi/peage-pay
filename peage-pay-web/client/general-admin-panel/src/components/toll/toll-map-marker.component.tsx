import { Utils } from '@peage-pay-web/utils';
import { TollStatusType, TollType } from '../../__generated__/graphql';
import { Button } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface TollMapMarkerProps {
  toll: TollType;
}

const TollMapMarker = ({ toll }: TollMapMarkerProps): JSX.Element => {
  return (
    <div className="group flex flex-col p-[0.5rem] bg-base-100 rounded-lg relative border-edge-100 border-[1px] translate-y-[-2rem]">
      <div className="flex items-center text-primary-100 font-bold text-[12pt]">
        {/* <div
          className={Utils.cn(
            'flex h-[0.7rem] w-[0.7rem] rounded-full mr-[0.5rem]',
            toll.inboundStatus === TollStatusType.NormalTraffic &&
              'bg-green-500',
            toll.inboundStatus === TollStatusType.ModerateTraffic &&
              'bg-yellow-500',
            toll.inboundStatus === TollStatusType.HighTraffic &&
              'bg-orange-400',
            toll.inboundStatus === TollStatusType.OutOfService && 'bg-red-500',
          )}
        ></div>
        <div
          className={Utils.cn(
            'flex h-[0.7rem] w-[0.7rem] rounded-full mr-[0.5rem]',
            toll.outboundStatus === TollStatusType.NormalTraffic &&
              'bg-green-500',
            toll.outboundStatus === TollStatusType.ModerateTraffic &&
              'bg-yellow-500',
            toll.outboundStatus === TollStatusType.HighTraffic &&
              'bg-orange-400',
            toll.outboundStatus === TollStatusType.OutOfService && 'bg-red-500',
          )}
        ></div> */}
        <div className="flex text-[11pt]">{toll.name}</div>
      </div>
      <div className="hidden group-hover:flex text-[10pt] group-hover:text-[11pt]">
        Highway: {toll.highway.name} {toll.highway.code}
      </div>
      <div className="hidden group-hover:flex text-[10pt] group-hover:text-[11pt]">
        Wilaya: {toll.wilaya.name}
      </div>
      <div className="hidden group-hover:flex text-[10pt] group-hover:text-[11pt]">
        Status: {toll.inboundStatus}
      </div>

      <div className="hidden group-hover:flex mt-[0.5rem]">
        <a
          href={`/dashboard/toll/edit/${toll.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={'base-200'} className="mr-[0.5rem] min-h-[2rem]">
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Edit</Button.Content>
          </Button>
        </a>
        <Button variant={'base-200'} className="min-h-[2rem]">
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>View</Button.Content>
        </Button>
      </div>

      <div className="absolute bg-primary-100 flex h-[2rem] w-[0.3rem] bottom-[-2rem] left-[50%] translate-x-[-50%]"></div>
    </div>
  );
};

export default TollMapMarker;
