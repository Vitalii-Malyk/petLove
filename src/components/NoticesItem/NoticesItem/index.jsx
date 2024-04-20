import { Button } from "../../Button";
import { NoticesDetails } from "../NoticesDetails";
import {
  ButtonWrapper,
  Image,
  ImageWrapper,
  NoticesItemWrapper,
  Text,
  Title,
} from "./NoticesItem.styled";
import { FavoritesHeart } from "../../FavHeart";

export const NoticesItem = ({ item }) => {
  const { title, imgURL, comment } = item;

  return (
    <NoticesItemWrapper>
      <ImageWrapper>
        <Image src={imgURL} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <NoticesDetails item={item} />
      <Text>{comment}</Text>
      <ButtonWrapper>
        <Button
          // padding={'14px 89px'}
          width={"257px"}
          text={"Learn more"}
          type={"button"}
          // handleClick={handleModal}
        />
        <FavoritesHeart item={item} />
      </ButtonWrapper>
    </NoticesItemWrapper>
  );
};
