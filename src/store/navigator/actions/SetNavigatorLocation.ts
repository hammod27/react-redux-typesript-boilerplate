import { AnyAction } from "redux";
import { ActionType } from "../../../types";

export default class SetNavigatorLocation implements AnyAction {
  public static create(location: string) {
    return new SetNavigatorLocation({ location });
  }

  private constructor(public readonly payload: { location: string }) {}

  public readonly type = ActionType.NAVIGATOR_LOCATION_SET;
}
