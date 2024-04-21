import { Container } from "../../components/Container";
import { Section, Wrapper } from "./AddPet.styled";
import { PetBlock } from "../../components/PetBlock";
import addPetImg from "../../helpers/images/addPetImg.png";
import { AddPetForm } from "../../components/AddPetForm";

const AddPet = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlock img={addPetImg} />
          <AddPetForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AddPet;
