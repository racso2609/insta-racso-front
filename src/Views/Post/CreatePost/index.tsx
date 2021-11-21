import { FC, FormEvent, useContext } from "react";
import { useLocation } from "react-router";
import UseInput from "../../../hooks/useInput";
import InputFile from "../../../components/InputFile/InputFile";
import { Grid } from "../../../components/GridSystem/GridSystem";
import PostContext from "../../../context/PostContext/PostContext";
interface IState {
  type: string;
}

interface ILocationState {
  pathname: string;
  state: IState;
}

const CreatePost: FC = () => {
  const { state } = useLocation() as ILocationState;
  const description = UseInput("text");
  const image = UseInput("file");

  const { createPost } = useContext(PostContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = new FormData();
    data.append("description", description.value);
    if (image.value) data.append("publication", image.value);
    if (createPost) createPost(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid gap="10px" columns=".5fr 1fr">
        {state.type === "image" && <InputFile {...image} />}

        <div>
          <input {...description} placeholder="description" />
        </div>
      </Grid>
    </form>
  );
};

export default CreatePost;
