import * as React from "react";
import { InputProps } from "./props";
import { ChangeEvent } from "react";

export default class InputBase extends React.PureComponent<InputProps> {
  constructor(props: InputProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.props.onChange(event.target.value);
  }

  render() {
    const input = (
      <input
        type={this.props.type}
        onChange={this.onChange}
        value={this.props.value === null ? "" : this.props.value}
      />
    );

    return (
      <div>
        <label>{this.props.label}</label>
        {input}
      </div>
    );
  }
}
