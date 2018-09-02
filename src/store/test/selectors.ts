import { bind } from "src/store/bind";
import { IApplicationState } from "src/store/state";

export default class TestSelectors {
  public readonly getState = bind(this, s => s.test);

  public readonly getTestString = bind<
    string,
    (state: IApplicationState) => string
  >(this, s => this.getState(s).testString);
}
