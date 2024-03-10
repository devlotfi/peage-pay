import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import { Button, Select, TextInput } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListOl,
  faPager,
  faSearch,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { HighwaySearchFields } from '../../__generated__/graphql';

const HighwayListPage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [field, setField] = useState<HighwaySearchFields>(
    HighwaySearchFields.NameSearch,
  );
  const lol = () => {
    return {
      take: 10,
      [field]: search,
    };
  };
  const { data } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: lol(),
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col xl:flex-row w-full mt-[0.5rem]">
        <div className="flex mb-[1rem] xl:mb-0 w-full">
          <TextInput className="mr-[0.5rem] w-full">
            <TextInput.Main>
              <TextInput.Label>Search</TextInput.Label>
              <TextInput.Icon position={'left'}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </TextInput.Icon>
              <TextInput.Field
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
              ></TextInput.Field>
            </TextInput.Main>
          </TextInput>
          <Select className="mr-[0.5rem] w-[50%]">
            <Select.Main>
              <Select.Label>Field</Select.Label>
              <Select.Icon position={'left'}>
                <FontAwesomeIcon icon={faTableList}></FontAwesomeIcon>
              </Select.Icon>
              <Select.Field
                value={field}
                onChange={(e) => setField(e.target.value)}
              >
                <option value="idSearch">id</option>
                <option value="nameSearch">name</option>
                <option value="codeSearch">code</option>
              </Select.Field>
            </Select.Main>
          </Select>
        </div>

        <div className="flex mb-[1rem] xl:mb-0 w-full xl:w-auto">
          <TextInput className="mr-[0.5rem] min-w-[5rem] w-full xl:w-auto">
            <TextInput.Main>
              <TextInput.Label>Items per page</TextInput.Label>
              <TextInput.Icon position={'left'}>
                <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
              </TextInput.Icon>
              <TextInput.Field type="number"></TextInput.Field>
            </TextInput.Main>
          </TextInput>
          <TextInput className="mr-[0.5rem] min-w-[5rem] w-full xl:w-auto">
            <TextInput.Main>
              <TextInput.Label>Page</TextInput.Label>
              <TextInput.Icon position={'left'}>
                <FontAwesomeIcon icon={faPager}></FontAwesomeIcon>
              </TextInput.Icon>
              <TextInput.Field type="number"></TextInput.Field>
            </TextInput.Main>
          </TextInput>
        </div>
        <Button variant={'primary'}>
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Search</Button.Content>
        </Button>
      </div>
      {JSON.stringify(data)}
    </div>
  );
};

export default HighwayListPage;
