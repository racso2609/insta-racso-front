import { FC } from "react";
import { ImageContainer, ImageComponent, IImageContainer } from "./styles";

interface propsType {
  styles?: IImageContainer;
  alt: string;
  src: string;
}

const Image: FC<propsType>= ({ src, alt, styles }) => {
  return (
    <ImageContainer {...styles}>
      <ImageComponent src={src} alt={alt} />
    </ImageContainer>
  );
};

export default Image;
