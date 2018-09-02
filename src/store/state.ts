import { INavigatorState } from "src/store/navigator/state";
import { ITestState } from 'src/store/test/state';

export interface IApplicationState {
    navigator: INavigatorState;
    test: ITestState;
}