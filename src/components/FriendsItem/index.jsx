import { workingDays } from "../../helpers/functions/workingDays";
import {
  Description,
  FriendsItemWrapper,
  Image,
  InfoWrapper,
  Link,
  NoText,
  Text,
  TextWrapper,
  Title,
  WorkingDaysWrapper,
} from "./FriendsItem.styled";

export const FriendsItem = ({ item }) => {
  const { title, imageUrl, email, address, addressUrl, phone, workDays } = item;

  return (
    <FriendsItemWrapper>
      <WorkingDaysWrapper>
        <p>{workingDays(workDays)[0]}</p>
      </WorkingDaysWrapper>
      <Image src={imageUrl} alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <TextWrapper>
          <Text>Email:</Text>
          {email ? (
            <Link href={`mailto:${email}`}>{email}</Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Text>Address:</Text>
          {address ? (
            <Link href={addressUrl} target="_blank">
              <Description> {address}</Description>
            </Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Text>Phone:</Text>
          {phone ? (
            <Link href={`tel:${phone}`}>{phone}</Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
      </InfoWrapper>
    </FriendsItemWrapper>
  );
};
