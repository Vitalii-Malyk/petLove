import { theme } from "../../../helpers/theme";
import styled from "styled-components";

export const SelectionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledRadioWrapper = styled.div`
  span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  input[type="radio"] {
    /* position: absolute;
    opacity: 0; */
    display: none;
  }

  input[type="radio"] + span {
    position: relative;
    background-color: ${(props) => props.backgroundcolor || "transparent"};
  }

  input[type="radio"]:checked + span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 38px;
    height: 38px;
    border: 2px solid grey;
    border-color: ${(props) => props.bordercolor};
    background-color: transparent;
    border-radius: 50%;
    /* border-color: ${(props) => props.checkedbordercolor || "transparent"}; */
  }
`;

export const FemaleIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.white};
  fill: transparent;
`;

export const MaleIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.blue};
  fill: transparent;
`;

export const MultipleIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.accent};
  fill: transparent;
`;
