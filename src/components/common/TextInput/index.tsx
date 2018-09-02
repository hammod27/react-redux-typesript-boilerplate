import * as React from "react";
import InputBase from "src/components/common/InputBase/index";
import { TextInputProps } from "src/components/common/TextInput/props";

export default class TextInput extends React.PureComponent<TextInputProps> {
  render() {
    return (
      <InputBase
        label={this.props.label}
        onChange={this.props.onChange}
        type={"text"}
        value={this.props.value}
      />
    );
  }
}
