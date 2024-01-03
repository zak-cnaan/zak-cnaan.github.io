import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import { responsive } from "../../assets/styles/bp";

const projectsList = [
  {
    id: 1,
    image: "https://picsum.photos/600/300",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 2,
    image: "https://picsum.photos/600/300",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 5,
    image: "https://picsum.photos/600/300",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 6,
    image: "https://picsum.photos/300/200",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
];
const Container = styled(StyledContainer)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;
const MainTitle = styled.h2`
  text-align: center;
`;
const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;

  ${responsive.min_sm} {
    grid-template-columns: 50% 50%;
  }
  ${responsive.min_lg} {
    grid-template-columns: repeat(3, 33.3333%);
  }
`;
const ProjectCard = styled.div`
  img {
    width: 100%;
  }
`;
function Projects() {
  return (
    <Container>
      <MainTitle>Projects</MainTitle>
      <ProjectsContainer>
        {projectsList.map((item) => (
          <ProjectCard key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div>
              {item.tags.length && item.tags.map((tag) => <span>{tag}</span>)}
            </div>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
