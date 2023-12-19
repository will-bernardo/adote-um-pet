/* eslint-disable react/prop-types */
import { Flex, Image, Button, Spacer, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex justify="center">
      <Flex
        as="header"
        bg="#fff"
        h="4rem"
        w="61rem"
        justify="center"
        gap="1.25rem"
        align="center"
      >
        <Link to={`/`}>
          <Image src="/logo.svg" alt="" w="120px" mr="1rem" />
        </Link>
        <HeaderButton name="Quem somos" />
        <HeaderButton name="Quero adotar" />
        <HeaderButton name="Quero ajudar" />
        <HeaderButton name="ONG'S" />
        <Spacer />
        <Flex gap="0.8rem" align="center">
          <HeaderButton name="Entrar" />
          <Divider
            orientation="vertical"
            borderColor="#004569"
            borderWidth="1px"
            h="2rem"
          />
          <Link to={'/signup'}>
            <Button
              colorScheme="facebook"
              variant="solid"
              minWidth="fitContent"
            >
              Cadastre-se
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

function HeaderButton(props) {
  return (
    <Link to={"/login"}>
      <Button
        onClick={() => router}
        colorScheme="facebook"
        variant="link"
        size="lg"
        minWidth="fitContent"
      >
        {props.name}
      </Button>
    </Link>
  );
}
