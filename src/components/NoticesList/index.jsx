import { NoticesItem } from "../NoticesItem/NoticesItem";
import { List } from "./NoticesList.styled";

export const NoticesList = ({ notices }) => {
  console.log(notices);

  return (
    <List>
      {notices?.map((item) => (
        <NoticesItem key={item._id} item={item} />
      ))}
    </List>
  );
};
