import { theme } from "../../../helpers/theme";
import styled from "styled-components";

export const NoticesItemWrapper = styled.li`
  width: 363px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.boxShadow.card};
`;

export const ImageWrapper = styled.div`
  width: 315px;
  height: 178px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3333;
  color: ${theme.colors.secondBlack};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
  color: ${theme.colors.secondBlack};
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
