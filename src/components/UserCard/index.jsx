import { Button } from "../Button";
import { Wrapper } from "./UserCard.styled";
import { UserBlock } from "../UserBlock";
import { PetsBlock } from "../PetsBlock";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperation";

export const UserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate("/home");
  };

  return (
    <Wrapper>
      <UserBlock />
      <PetsBlock />

      <Button
        text={"LOG OUT"}
        type={"button"}
        width={"136px"}
        height={"50px"}
        handleClick={handleClick}
        beigebackground="true"
      />
    </Wrapper>
  );
};
