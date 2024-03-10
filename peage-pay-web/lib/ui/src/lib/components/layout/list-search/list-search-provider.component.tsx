import { PropsWithChildren, createContext, useState } from 'react';

interface ListSearchContext {
  search: string;
  field: string | undefined;
  page: number;
  take: number;

  setSearch: (seach: string) => void;
  setField: (field: string | undefined) => void;
  setPage: (seach: number) => void;
  setTake: (seach: number) => void;
}

const initialValues: ListSearchContext = {
  search: '',
  field: undefined,
  page: 1,
  take: 10,

  setSearch: () => {
    return;
  },
  setField: () => {
    return;
  },
  setPage: () => {
    return;
  },
  setTake: () => {
    return;
  },
};

export const ListSearchContext = createContext(initialValues);

const ListSearchProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [search, setSearch] = useState<string>(initialValues.search);
  const [field, setField] = useState<string | undefined>(initialValues.field);
  const [page, setPage] = useState<number>(initialValues.page);
  const [take, setTake] = useState<number>(initialValues.take);

  return (
    <ListSearchContext.Provider
      value={{
        search,
        field,
        page,
        take,

        setSearch,
        setField,
        setPage,
        setTake,
      }}
    >
      {children}
    </ListSearchContext.Provider>
  );
};

export default ListSearchProvider;
