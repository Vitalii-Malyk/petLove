import { useState } from "react";
import { UserBar } from "../UserBar";
import { UserNavWrapper } from "./UserNav.styled";
import { BasicModalWindow } from "../../Modal/BasicModal";
import { ModalApproveAction } from "../../Modal/ModalApproveAction";
import { Button } from "../../Button";

export const UserNav = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((state) => !state);
  };
  return (
    <UserNavWrapper>
      <Button
        width={"136px"}
        height={"50px"}
        text={"LOG OUT"}
        type={"button"}
        handleClick={handleModal}
      />
      <UserBar />
      {modal && (
        <BasicModalWindow handleModalToggle={handleModal}>
          <ModalApproveAction handleModalToggle={handleModal} />
        </BasicModalWindow>
      )}
    </UserNavWrapper>
  );
};
