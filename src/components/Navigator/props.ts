import { RouteComponentProps } from "react-router";
import { NavigationAction } from "src/store/navigator/state";

export interface INavigatorInputProps {
  location: string;
  nonce: number;
  depth: number;
  action: NavigationAction;
  routing: RouteComponentProps<any>;
}

export interface INavigatorOutputProps {
  onLocationChange: (location: string) => void;
}

export type NavigatorProps = INavigatorInputProps & INavigatorOutputProps;
