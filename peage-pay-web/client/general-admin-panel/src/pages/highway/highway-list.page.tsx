import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';

const HighwayListPage = (): JSX.Element => {
  const { data } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: {
        take: 10,
      },
    },
  });

  return (
    <div className="flex">
      <h1>highway list</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default HighwayListPage;
