import styled from "styled-components";
import { theme } from "../../helpers/theme";

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: ${theme.colors.secondBlack};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 14px;
  width: 440px;
  /* width: 100%; */

  input {
    width: 100%;
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 1.25;
    letter-spacing: -0.48px;
    border: 1px solid ${theme.colors.accent};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color ${theme.transition};

    &.filled {
      border: 1px solid ${theme.colors.accent};
    }

    &.unfilled {
      border: 1px solid ${theme.colors.lightGrey};
    }
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
`;

export const StyledUser = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 38px;
  border-radius: 30px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
`;

export const UserIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.white};
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${theme.colors.beige};
  border: none;
`;

export const EditIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.accent};
`;
