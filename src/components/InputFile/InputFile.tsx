import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FC, useEffect, useRef, useState } from "react";
import { Grid } from "../GridSystem/GridSystem";
import { ImageArea, InputFileArea } from "./styles";

interface propsType {
  onChange: ChangeEventHandler<HTMLElement>;
  value?: File;
}


const InputFile: FC<propsType> = ({ onChange, value }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewImage, setImagePreview] = useState("");
  useEffect(() => {
    if (value) {
      const previewImage = URL.createObjectURL(value);
      setImagePreview(previewImage);
    }
  }, [value]);
  const onClick = () => {
    if (fileRef.current) fileRef.current.click();
  };
  return (
    <>
      <input
        onChange={onChange}
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
      />
      <InputFileArea onClick={onClick}>
        <Grid align='center' height='100%' justify='center' columns="1fr">
          {previewImage ? (
            <ImageArea src={previewImage} alt="preview image" />
          ) : (
            <FontAwesomeIcon icon={faPlus} color="purple" />
          )}
          { !value?.name &&
          <span>Upload file</span>
          }
        </Grid>
      </InputFileArea>
    </>
  );
};
export default InputFile;
