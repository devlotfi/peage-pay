import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AdminPanelHomeStatProps {
  icon: IconProp;
  name: string;
  value: number;
}

const AdminPanelHomeStat = ({ icon, name, value }: AdminPanelHomeStatProps) => {
  return (
    <div className="flex w-full items-center bg-base-200 rounded-lg p-[0.5rem] min-w-[20rem]">
      <div className="flex justify-center items-center min-h-[2.8rem] min-w-[2.8rem] rounded-full bg-base-100">
        <FontAwesomeIcon
          className="text-primary-100 text-[17pt]"
          icon={icon}
        ></FontAwesomeIcon>
      </div>

      <div className="flex flex-col ml-[1rem]">
        <div className="flex text-[12pt] font-bold">{name}</div>
        <div className="flex text-[15pt] text-primary-100 font-bold">
          {value}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelHomeStat;
