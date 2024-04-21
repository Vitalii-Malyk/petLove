import { Container } from "../../components/Container";
import { PetBlock } from "../../components/PetBlock";
import { RegistrationForm } from "../../components/RegistrationForm";
import { Wrapper } from "./Registration.styled";
import registrationImg from "../../helpers/images/registrationAvatar.png";
import { registrationPet } from "../../helpers/pets";

const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock img={registrationImg} pet={registrationPet} />
        <RegistrationForm />
      </Wrapper>
    </Container>
  );
};

export default Registration;
