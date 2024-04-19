import { Btn, Icon } from "./CloseButton.styled";
import sprite from "../../helpers/icons/sprite.svg";

export const CloseButton = ({ handleCloseModal }) => {
  return (
    <Btn type="button" onClick={handleCloseModal}>
      <Icon>
        <use href={sprite + "#icon-close"}></use>
      </Icon>
    </Btn>
  );
};
