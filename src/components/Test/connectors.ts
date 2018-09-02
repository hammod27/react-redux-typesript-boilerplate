import { connect } from "react-redux";
import { IApplicationState } from "src/store/state";
import { ITestInputProps, ITestOutputProps } from "src/components/Test/props";
import selectors from "src/store/selectors";
import TestAction from "src/store/test/actions/ChangeTestString";

export const byRoute = connect<
  ITestInputProps,
  ITestOutputProps,
  {},
  IApplicationState
>(
  (state, props) => ({
    testString: selectors.test.getTestString(state)
  }),
  (dispatch: any) => ({
    onTestChange: (testString: string) =>
      dispatch(TestAction.create(testString))
  })
);
