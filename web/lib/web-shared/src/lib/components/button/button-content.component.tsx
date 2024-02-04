import { PropsWithChildren } from 'react';

const ButtonContent = ({ children }: PropsWithChildren): JSX.Element => {
  return <div className="flex flex-col">{children}</div>;
};
export default ButtonContent;
