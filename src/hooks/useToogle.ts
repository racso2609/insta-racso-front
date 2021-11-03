import { useCallback, useState } from "react";
interface IUseToggle {
  defaultValue?: boolean;
}

const UseToggle = ({ defaultValue = false }: IUseToggle) => {
  const [show, setShow] = useState(defaultValue);
  const onToggle = useCallback(() => {
    setShow(!show);
  }, [show]);

  return [ show, onToggle ] as const;
};

export default UseToggle;
