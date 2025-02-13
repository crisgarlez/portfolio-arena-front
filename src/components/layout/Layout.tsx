import { AppContainer } from "../../App.styled";
// import "../../index.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
  return <AppContainer>{children}</AppContainer>;
}

export default Layout;
