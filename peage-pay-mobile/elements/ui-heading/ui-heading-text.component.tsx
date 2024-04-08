import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import UIText from '../ui-text/ui-text.component';
import { useContext } from 'react';
import { UIHeadingContext } from './ui-heading.context';

interface UIHeadingTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIHeadingText = ({
  children,
  style,
  ...props
}: UIHeadingTextProps): JSX.Element => {
  const { size } = useContext(UIHeadingContext);
  const styles = makeStyles(size);

  return (
    <UIText style={[styles.base, style]} {...props}>
      {children}
    </UIText>
  );
};

const makeStyles = (size: number) =>
  StyleSheet.create({
    base: {
      fontWeight: 'bold',
      fontSize: size,
    },
  });

export default UIHeadingText;
