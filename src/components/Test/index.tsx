import * as React from "react";
import { TestProps } from "src/components/Test/props";
import { byRoute } from "src/components/Test/connectors";
import {TextInput} from "src/components/common";

export class Test extends React.PureComponent<TestProps> {
  public static byRoute = byRoute(Test);

  render() {
    return (
      <div>
        <div>Test here</div>
        <div>
            <TextInput
                value={this.props.testString}
                onChange={this.props.onTestChange}
                label="Test input"
            />
        </div>
      </div>
    );
  }
}
