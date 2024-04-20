import styled from "styled-components";
import { theme } from "../../helpers/theme";
import rectangle from "../../helpers/images/rectangle.png";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${theme.colors.accent};
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 592px;
  height: 654px;
  border-radius: 60px;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 30px;
`;
