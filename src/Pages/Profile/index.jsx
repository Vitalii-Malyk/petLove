import { Container } from "../../components/Container";
import { MyNotices } from "../../components/MyNotices";
import { UserCard } from "../../components/UserCard";
import { Section, Wrapper } from "./Profile.styled";

const Profile = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <UserCard />
          <MyNotices />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Profile;
