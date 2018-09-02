import { connect } from "react-redux";
import {
  INavigatorInputProps,
  INavigatorOutputProps
} from "src/components/Navigator/props";
import { RouteComponentProps } from "react-router";
import { IApplicationState } from "src/store/state";
import selectors from "src/store/selectors";
import { SetNavigatorLocation } from "src/store/navigator/actions/index";

export const byRoute = connect<
  INavigatorInputProps,
  INavigatorOutputProps,
  RouteComponentProps<any>,
  IApplicationState
>(
  (state, props) => ({
    routing: props,
    nonce: selectors.navigator.getNonce(state),
    location: selectors.navigator.getLocation(state),
    action: selectors.navigator.getAction(state),
    depth: selectors.navigator.getDepth(state)
  }),
  (dispatch: any) => ({
    onLocationChange: (location: string) =>
      dispatch(SetNavigatorLocation.create(location))
  })
);
