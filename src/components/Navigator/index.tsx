import { PureComponent } from "react";
import { NavigatorProps } from "src/components/Navigator/props";
import { NavigationAction } from "src/store/navigator/state";
import { byRoute } from "src/components/Navigator//connectors";

export class Navigator extends PureComponent<NavigatorProps> {
  public static readonly byRoute = byRoute(Navigator);

  constructor(props: NavigatorProps) {
    super(props);
    if (this.props.action === NavigationAction.forward) {
      this.props.routing.history.push(this.props.location);
    }
  }

  componentDidUpdate(prevProps: NavigatorProps) {
    const didLocationChange =
      this.props.location !== this.props.routing.location.pathname;
    const didNonceChange = this.props.nonce !== prevProps.nonce;

    if (didLocationChange && !didNonceChange) {
      this.props.onLocationChange(this.props.routing.location.pathname);
    }

    switch (this.props.action) {
      case NavigationAction.forward:
        if (didNonceChange) {
          this.props.routing.history.push(this.props.location);
        }
        break;
      case NavigationAction.back:
        if (didNonceChange) {
          this.props.routing.history.goBack();
        }
        break;
      case NavigationAction.replace:
        if (didNonceChange) {
          this.props.routing.history.replace(this.props.location);
        }
        break;

      case NavigationAction.clearAndReplace:
        if (didNonceChange) {
          var index = 0;
          while (index < this.props.depth) {
            this.props.routing.history.goBack();
            index++;
          }
          this.props.routing.history.replace(this.props.location);
        }

      case NavigationAction.none:
        // do nothing
        break;
      default:
        throw new Error(`Unexpected NavigationDirection: ${this.props.action}`);
    }
  }

  public render() {
    return null;
  }
}
