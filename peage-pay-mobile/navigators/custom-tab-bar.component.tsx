import { Pressable, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = (props: BottomTabBarProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {props.state.routes.map((route, index) => (
          <Pressable
            key={index}
            style={[
              styles.tabItem,
              props.state.index === index ? styles.activeTabItem : null,
            ]}
            onPress={() => props.navigation.navigate(route.name)}
          >
            <View
              style={{
                backgroundColor:
                  props.state.index === index
                    ? theme['primary-100']
                    : 'transparent',
                width: 50,
                position: 'absolute',
                height: 5,
                marginBottom: 5,
                borderRadius: 1000,
                marginTop: -5,
              }}
            ></View>

            {/*  eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {props.descriptors[route.key].options.tabBarIcon({
              focused: props.state.index === index,
              color: '',
              size: 10,
            })}
            <UIText
              style={[
                styles.tabLabel,
                props.state.index === index ? styles.activeTabLabel : null,
              ]}
            >
              {route.name}
            </UIText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    tabBarContainer: {
      padding: 10,
      backgroundColor: theme['base-100'],
      position: 'relative',
    },
    tabBar: {
      backgroundColor: theme['base-200'],
      borderRadius: 13,
      padding: 5,
      flexDirection: 'row',
    },
    tabItem: {
      paddingVertical: 5,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 7,
    },
    activeTabItem: {
      backgroundColor: theme['base-100'],
    },
    tabLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    activeTabLabel: {
      color: theme['primary-100'],
    },
  });

export default CustomTabBar;
