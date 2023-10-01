import { css, RuleSet } from 'styled-components';

const htmlElementWrapper: RuleSet = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const htmlElementLabel: RuleSet = css`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.lightBlue};
`;

export const commonClasses = {
  htmlElementWrapper,
  htmlElementLabel,
};
