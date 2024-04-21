import { Container } from "../../components/Container";
import { Section, Wrapper } from "./NotFound.styled";
import { NotFoundDetails } from "../../components/NotFoundDetails";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <NotFoundDetails />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NotFound;
