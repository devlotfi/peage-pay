import { Utils } from '@peage-pay-web/utils';
import { TollStatusType, TollType } from '../../__generated__/graphql';

interface TollMapMarkerProps {
  toll: TollType;
}

const TollMapMarker = ({ toll }: TollMapMarkerProps): JSX.Element => {
  return (
    <div className="flex flex-col p-[0.7rem] bg-base-100 rounded-lg relative border-edge-100 border-[1px] translate-y-[-2rem]">
      <div className="flex items-center text-primary-100 font-bold text-[12pt]">
        <div
          className={Utils.cn(
            'flex h-[1rem] w-[1rem] rounded-full mr-[0.5rem]',
            toll.status === TollStatusType.Active && 'bg-green-500',
            toll.status === TollStatusType.Overload && 'bg-orange-400',
            toll.status === TollStatusType.OutOfService && 'bg-red-500',
          )}
        ></div>
        <div className="flex">{toll.name}</div>
      </div>
      <div className="flex text-[10pt]">
        Highway: {toll.highway.name} {toll.highway.code}
      </div>
      <div className="flex text-[10pt]">Status: {toll.status}</div>

      <div className="absolute bg-primary-100 flex h-[2rem] w-[0.3rem] bottom-[-2rem] left-[50%] translate-x-[-50%]"></div>
    </div>
  );
};

export default TollMapMarker;
