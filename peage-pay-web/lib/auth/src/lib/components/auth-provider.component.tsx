import { useMutation } from '@apollo/client';
import { gql } from '../../__generated__';
import { SIGN_UP_WITH_EMAIL } from '../graphql/mutations';

const AuthProvider = (): JSX.Element => {
  const [lol] = useMutation(SIGN_UP_WITH_EMAIL);
};

export default AuthProvider;
