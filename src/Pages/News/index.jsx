import { Container } from "../../components/Container";
import { NewsList } from "../../components/NewsList";
import { Pagination } from "../../components/Pagination";
import { SearchField } from "../../components/SearchField";
import { Title } from "../../components/Title";
import { Section, Wrapper } from "./News.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../../redux/news/newsOperations";
import { selectNews, selectTotalPages } from "../../redux/news/newsSelectors";
import { topScroll } from "../../helpers/functions/topScroll";

const News = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (e) => {
    // console.log(`Selected page: ${page}`);
    // setSelectedPage(page);
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  useEffect(() => {
    dispatch(fetchNews(selectedPage));
  }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={"News"} />
          <SearchField />
        </Wrapper>
        <NewsList news={news} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default News;
