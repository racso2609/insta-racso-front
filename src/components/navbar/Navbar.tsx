import { FC, useContext } from "react";
import { Item, Logo, NavBarContainer, SubItem } from "./styledComponents/Items";
import logo from "../../assets/index.png";
import AuthContext from "../../context/auth/authContext";
import {Link} from "react-router-dom";

const NavBar: FC = () => {
  const { auth } = useContext(AuthContext);
  return (
    <NavBarContainer>
      <Item justify="start">
        <Link to='/'>
          <Logo src={logo} maxWidth="50px" maxHeight="50px" />
        </Link>
      </Item>

      {auth ? (
        <Item justify="end" hChildPadding="15px" hPadding="15px">
          <SubItem>
            <span>Search</span>
          </SubItem>
          <SubItem>
            <span>Message</span>
          </SubItem>
          <SubItem>
            <span>Profile</span>
          </SubItem>
        </Item>
      ) : null}
    </NavBarContainer>
  );
};

export default NavBar;
