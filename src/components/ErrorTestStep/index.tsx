import React from 'react';
import { CodeSnippet } from '../../types/nightwatch';
import ErrorTestStepDetails from '../ErrorTestStepDetails';
import Screenshot from '../Screenshot';
import { ElapsedTime, FailedIcon, FailedStepWrapper, Text, Wrapper } from './style';

export type TestStepProps = {
  time: number;
  children: React.ReactNode;
  errorName: string;
  shortMessage: string[];
  stacktrace?: {
    filename: string;
    line_number: number;
    codeSnippet: CodeSnippet[];
  };
  screenshot?: string;
};

const ErrorTestStep: React.FC<TestStepProps> = ({
  time,
  children,
  errorName,
  shortMessage,
  screenshot,
  stacktrace
}) => {
  return (
    <Wrapper>
      <FailedStepWrapper>
        <FailedIcon />
        <Text>{children}</Text>
        <ElapsedTime>{time < 1000 ? `${time} ms` : `${Math.round(time / 1000)} sec`}</ElapsedTime>
      </FailedStepWrapper>
      <ErrorTestStepDetails
        errorDetails={{
          errorName,
          shortMessage,
          stackTrace: stacktrace
        }}
      />
      {screenshot && <Screenshot src={screenshot} alt={shortMessage.join('')} />}
    </Wrapper>
  );
};

export default ErrorTestStep;
