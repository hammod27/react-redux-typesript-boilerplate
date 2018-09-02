export interface ITextInputInputProps {
  label: string;
  value?: string | number | undefined | null;
}

export interface ITextInputOutputProps {
  onChange: (value: string) => void;
}

export type TextInputProps = ITextInputInputProps & ITextInputOutputProps;
