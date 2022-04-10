import React from "react";

import { Container, Logo, ContainerFluid, Input } from "./styles";

export const SideBar = () => {
  return (
    <Container>
        <Logo />
      <ContainerFluid>
        <Input />
      </ContainerFluid>
    </Container>
  );
};

export default SideBar;
