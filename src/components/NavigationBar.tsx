import Link from "next/link";
import { Nav, NavContainer, NavLink } from "./styled/Navigation";
import { TEXT_CONSTANTS } from "@/constants";

export default function NavigationBar() {
  return (
    <NavContainer>
      <h1>Погода</h1>
      <Nav>
        <Link href="/">
          <NavLink>
            {TEXT_CONSTANTS.LINKS.MAIN}
          </NavLink>
        </Link>
        <Link href="/forecast">
          <NavLink>{TEXT_CONSTANTS.LINKS.FORECAST}</NavLink>
        </Link>
        <Link href="favorites">
          <NavLink>{TEXT_CONSTANTS.LINKS.FAVORITES}</NavLink>
        </Link>
      </Nav>
    </NavContainer>
  );
}
