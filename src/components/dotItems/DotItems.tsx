import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FC } from "react";
import UseToggle from "../../hooks/useToogle";
import {
  DotButton,
  DotContainer,
  DotLink,
} from "../styledComponents/DotButton";

interface IButtonDetails {
  background?: string;
  icon: IconDefinition;
  onClick?: (e: Event) => void;
  to?: any;
}

interface propsType {
  Buttons: IButtonDetails[];
}

const DotMenu: FC<propsType> = ({ Buttons }) => {
  const [showAllButtons, toggleButtons] = UseToggle({});

  return (
    <DotContainer>
      {showAllButtons
        ? Buttons.map((section, index) => {
            if (section.to) {
              return (
                <DotLink
                  key={"dot-button" + index}
                  to={section.to}
                  background={section.background}
                >
                  <FontAwesomeIcon icon={section.icon} />
                </DotLink>
              );
            } else {
              return (
                <DotButton
                  key={"dot-button" + index}
                  background={section.background}
                >
                  <FontAwesomeIcon icon={section.icon} />
                </DotButton>
              );
            }
          })
        : null}
      <DotButton onClick={toggleButtons}>
        <FontAwesomeIcon icon={faPlus} />
      </DotButton>
    </DotContainer>
  );
};

export default DotMenu;
