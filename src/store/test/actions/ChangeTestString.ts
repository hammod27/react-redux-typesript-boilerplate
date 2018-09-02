import { AnyAction } from "redux";
import { ActionType } from "src/types";

export default class ChangeTestString implements AnyAction {
  public static create(newTestString: string) {
    return new ChangeTestString({ newTestString: newTestString });
  }

  private constructor(
    public readonly payload: {
      newTestString: string;
    }
  ) {}

  public readonly type = ActionType.TEST_STRING_CHANGE;
}
