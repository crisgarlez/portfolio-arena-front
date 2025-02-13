import styled from "@emotion/styled";

export const Container = styled.div(() => ({
  margin: "0 auto",
  maxWidth: "1820px",
  padding: "0 10px",
}));

export const Nav = styled.nav(() => ({
  // align-items: center;
  borderBottom: "1px solid rgba(40, 35, 74, 0.1)",
  display: "flex",
  justifyContent: "space-between",
  height: "92px",
}));
