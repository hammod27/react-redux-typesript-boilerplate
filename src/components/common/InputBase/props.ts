export interface IInputBaseInputProps {
  label: string;
  type: string;
  value?: string | number | undefined | null;
}

export interface IInputBaseOutputProps {
  onChange: (value: string) => void;
}

export type InputProps = IInputBaseInputProps & IInputBaseOutputProps;
