import { PropsWithChildren } from 'react';

export default function ButtonContent({
  children,
}: PropsWithChildren): JSX.Element {
  return <div className="flex flex-col">{children}</div>;
}
