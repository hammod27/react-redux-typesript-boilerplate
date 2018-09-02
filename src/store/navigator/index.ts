import { INavigatorState, NavigationAction } from "src/store/navigator/state";
import { AppAction } from "src/actions";
import { ActionType } from "src/types";

const initState: INavigatorState = {
  nonce: 0,
  depth: 0,
  location: "/",
  action: NavigationAction.none
};

function forward(state: INavigatorState, location: string): INavigatorState {
  return {
    ...state,
    location,
    depth: state.depth + 1,
    action: NavigationAction.forward,
    nonce: state.nonce + 1
  };
}

function backward(state: INavigatorState): INavigatorState {
  return {
    ...state,
    depth: state.depth - 1,
    action: NavigationAction.back,
    nonce: state.nonce + 1
  };
}

function clearAndReplace(
  state: INavigatorState,
  location: string
): INavigatorState {
  return {
    ...state,
    location,
    depth: 0,
    action: NavigationAction.clearAndReplace,
    nonce: state.nonce + 1
  };
}

function replace(state: INavigatorState, location: string): INavigatorState {
  return {
    ...state,
    location,
    depth: state.depth,
    action: NavigationAction.replace,
    nonce: state.nonce + 1
  };
}

export default (
  state: INavigatorState = initState,
  action: AppAction
): INavigatorState => {
  switch (action.type) {
    case ActionType.NAVIGATOR_LOCATION_SET:
      return {
        ...state,
        location: action.payload.location,
        action: NavigationAction.none
      };
    default:
      return state;
  }
};
