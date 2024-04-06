import TitleBar from './title-bar.component';
import './title-bar.css';
import { PropsWithChildren } from 'react';

interface TitleBarLayoutProps {
  title: string;
  windowIcon: any;
}

export const TitleBarLayout = ({
  children,
  title,
  windowIcon,
}: PropsWithChildren<TitleBarLayoutProps>): JSX.Element => {
  return (
    <div className="flex flex-col overflow-hidden max-h-screen min-h-screen">
      <TitleBar windowIcon={windowIcon} title={title}></TitleBar>
      {children}
    </div>
  );
};

export default TitleBarLayout;
