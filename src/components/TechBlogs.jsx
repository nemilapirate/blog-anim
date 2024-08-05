import styled from "styled-components";
import { blogs } from "../data/blogs";
import Blog from "../ui/Blog";
import AsideBlogs from "../ui/AsideBlogs";
import HeaderSections from "../ui/HeaderSections";

const StyledTechBlogs = styled.section``;

const TechBlogsBody = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 4.8rem 0;
`;

const TechBlogsBodyBig = styled.div`
  flex: 2;
`;
const TechBlogsBodyRest = styled.aside`
  flex: 1;
`;

export default function TechBlogs() {
  const [firstTechBlog, ...restBlogs] = blogs;

  return (
    <StyledTechBlogs>
      <HeaderSections
        titles={{
          main: "Tech",
          sub: "Toutes les nouveautés dont vous avez besoin",
          link: "/",
        }}
        size="big"
        color="dark"
      />
      <TechBlogsBody>
        <TechBlogsBodyBig>
          <Blog blog={firstTechBlog} fixedSizeImg={true} />
        </TechBlogsBodyBig>
        <TechBlogsBodyRest>
          {restBlogs.map((blog) => (
            <AsideBlogs blog={blog} key={blog.id} />
          ))}
        </TechBlogsBodyRest>
      </TechBlogsBody>
    </StyledTechBlogs>
  );
}
