export interface ITestInputProps {
  testString: string;
}

export interface ITestOutputProps {
  onTestChange: (testString: string) => void;
}

export type TestProps = ITestInputProps & ITestOutputProps;
