import { Container } from "../../components/Container";
import { NoticesFilters } from "../../components/NoticesFilters";
import { NoticesList } from "../../components/NoticesList";
import { Pagination } from "../../components/Pagination";
import { Title } from "../../components/Title";
import { Section, TitleWrapper } from "./Notices.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNotices,
  selectTotalPages,
} from "../../redux/notices/noticesSelectors";
import { useEffect, useState } from "react";
import { fetchNotices } from "../../redux/notices/noticesOperations";
import { topScroll } from "../../helpers/functions/topScroll";

const Notices = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (e) => {
    // console.log(`Selected page: ${page}`);
    // setSelectedPage(page);
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  useEffect(() => {
    dispatch(fetchNotices(selectedPage));
  }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={"Find your favorite pet"} />
        </TitleWrapper>
        <NoticesFilters />
        <NoticesList notices={notices} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default Notices;
