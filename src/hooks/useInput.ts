import { ChangeEvent, useState } from "react";

interface IValue {
  value: any;
}

const UseInput = (type: string) => {
  const [data, setData] = useState<IValue>({ value: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "file") onChangeFile(e);
    else onChangeInput(e);
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setData({ value: value });
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setData({ value: file });
    }
  };

  return {
    value: data.value,
    onChange,
    type,
  };
};

export default UseInput;
