import { Container } from "../../components/Container";
import { LoginForm } from "../../components/LoginForm";
import { PetBlock } from "../../components/PetBlock";
import { Wrapper } from "./Login.styled";
import loginImg from "../../helpers/images/loginImg.png";
import { loginPet } from "../../helpers/pets";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock img={loginImg} pet={loginPet} />
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default Login;
