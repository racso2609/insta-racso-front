import React, { useContext } from "react";
import DotMenu from "../../components/dotItems/DotItems";
import { ContainerPage } from "../../components/styledComponents/PageContainer";
import {
  faCamera,
  faTextHeight,
  //faPlus,
} from "@fortawesome/free-solid-svg-icons";
import PostContext from "../../context/PostContext/PostContext";
import PostComponent from "../../components/Posts/Posts";
import { Grid } from "../../components/GridSystem/GridSystem";
const sections = [
  {
    background: "gray",
    icon: faCamera,
    to: { pathname: "/post/create-post", state: { type: "image" } },
  },
  {
    background: "lightblue",
    icon: faTextHeight,
    to: { pathname: "/post/create-post", state: { type: "text" } },
  },
];

const Home: React.FC = () => {
  const { posts } = useContext(PostContext);
  return (
    <ContainerPage
      display="flex"
      justify="center"
      aling="center"
      flexDirection="column"
    >
      <Grid padding='30px 0px' columns="1fr" gap='30px'>
        {posts && posts.map((post) => (
          <PostComponent post={post} key={post._id} />
        ))}
      </Grid>
      <DotMenu Buttons={sections} />
    </ContainerPage>
  );
};

export default Home;
