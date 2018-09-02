import { combineReducers } from 'redux';
import { IApplicationState } from 'src/store/state';
import navigator from "src/store/navigator";
import test from "src/store/test/index";

export default combineReducers<IApplicationState>({
    navigator,
    test
});

