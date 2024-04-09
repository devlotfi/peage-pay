import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { AppTheme } from '../theme/types/app-theme.type';
import { StyleSheet } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';

interface TabIconProps {
  icon: IconProp;
  focused: boolean;
}

const TabIcon = ({ icon, focused }: TabIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FontAwesomeIcon
      icon={icon}
      size={17}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={[styles.icon, focused && styles.iconFocused]}
    ></FontAwesomeIcon>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    icon: {
      color: theme['base-content'],
      marginBottom: 5,
    },
    iconFocused: {
      color: theme['primary-100'],
    },
  });

export default TabIcon;
