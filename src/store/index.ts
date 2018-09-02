import { combineReducers } from 'redux';
import { IApplicationState } from 'src/store/state';
import test from "src/store/test/index";

export default combineReducers<IApplicationState>({
    test
});

