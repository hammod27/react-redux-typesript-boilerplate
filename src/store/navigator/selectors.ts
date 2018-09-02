import { bind } from "src/store/bind";

export class NavigatorSelectors {
  public readonly getState = bind(this, s => s.navigator);

  public readonly getLocation = bind(this, s => this.getState(s).location);

  public readonly getNonce = bind(this, s => this.getState(s).nonce);

  public readonly getAction = bind(this, s => this.getState(s).action);

  public readonly getDepth = bind(this, s => this.getState(s).depth);
}
