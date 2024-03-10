import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../elements/button/button.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ListSearchContext } from './list-search-provider.component';

interface ListSearchValues {
  search: string;
  field: string | undefined;
  page: number;
  take: number;
}

interface ListSearchProps {
  searchInput?: JSX.Element;
  fieldInput?: JSX.Element;
  pageInput?: JSX.Element;
  takeInput?: JSX.Element;
}

const ListSearch = ({
  searchInput,
  fieldInput,
  pageInput,
  takeInput,
}: ListSearchProps): JSX.Element => {
  return (
    <div className="flex flex-col xl:flex-row w-full mt-[0.5rem]">
      <div className="flex mb-[1rem] xl:mb-0 w-full">
        {searchInput}
        {fieldInput}
      </div>

      <div className="flex mb-[1rem] xl:mb-0 w-full xl:w-auto">
        {takeInput}
        {pageInput}
      </div>
      <Button variant={'primary'}>
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Search</Button.Content>
      </Button>
    </div>
  );
};

export default ListSearch;
