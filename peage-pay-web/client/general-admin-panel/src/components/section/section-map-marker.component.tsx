import { Utils } from '@peage-pay-web/utils';
import { SectionType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';

interface SectionMapMarkerProps {
  section: SectionType;
}

const SectionMapMarker = ({ section }: SectionMapMarkerProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="group flex flex-col py-[0.3rem] px-[0.5rem] translate-y-[0.5rem] font-bold bg-base-100 rounded-lg relative border-edge-100 border-[1px]">
      <a
        className="w-full my-[0.5rem] hidden group-hover:flex"
        href={`/dashboard/section/edit/${section.fromToll.id}/${section.toToll.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button variant={'base-200'} className="min-h-[2rem] w-full">
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>{t('EDIT')}</Button.Content>
        </Button>
      </a>
      <div className="flex group-hover:mb-[0.5rem]">
        <div className="flex text-[11pt]">
          <span className="hidden group-hover:flex">{t('DISTANCE')}: </span>{' '}
          {section.distance} km
        </div>
      </div>
      <div className="hidden group-hover:flex flex-col">
        <div className="flex justify-center items-center p-[0.5rem] bg-base-200 border-edge-100 border-[1px] rounded-lg">
          {section.fromToll.name}
        </div>
        <div className="flex p-[0.5rem] pb-0 justify-center items-center">
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faArrowsUpDown}
              className={Utils.cn('text-[20pt] mb-[0.5rem]')}
            ></FontAwesomeIcon>
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
