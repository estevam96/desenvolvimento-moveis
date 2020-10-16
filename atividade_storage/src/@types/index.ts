import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined,
  Show: { heroId: number }
  Register: undefined
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
  >;

export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type ShowScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Show'
>;

export type ShowScreenRouterProp = RouteProp<
  RootStackParamList,
  "Show"
>;