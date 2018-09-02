import { AppAction } from "src/actions";
import { ActionType } from "src/types";
import { combineReducers } from "redux";
import { ITestState } from "src/store/test/state";

const testString = (state: string = "", action: AppAction): string => {
  switch (action.type) {
    case ActionType.TEST_STRING_CHANGE:
      return action.payload.newTestString;
    default:
      return state;
  }
};

export default combineReducers<ITestState>({
  testString
});
