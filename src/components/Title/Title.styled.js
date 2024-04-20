import { theme } from "../../helpers/theme";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.84px;
  color: ${theme.colors.black};
  text-align: start;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xxxxl};
    letter-spacing: -1.62px;
  }
`;
