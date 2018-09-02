import { SetNavigatorLocation } from "src/store/navigator/actions";
import { ChangeTestString } from "src/store/test/actions";

export type AppAction = SetNavigatorLocation | ChangeTestString;
