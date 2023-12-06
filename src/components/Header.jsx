/* eslint-disable react/prop-types */
import { Flex, Image, Button, Spacer, Divider } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justify='center'>
      <Flex as='header' bg='#fff' h='4rem' w='61rem' justify='center' gap='1.25rem' align='center'>
        <Image src="./logo.svg" alt="" w="120px" mr='1rem' />
        <HeaderButton name="Quem somos" />
        <HeaderButton name="Quero adotar" />
        <HeaderButton name="Quero ajudar" />
        <HeaderButton name="ONG'S" />
        <Spacer />
        <Flex gap='0.8rem' align='center'>
          <HeaderButton name="Entrar" />
          <Divider orientation='vertical' borderColor='#004569' borderWidth='1px' h='2rem' />
          <Button colorScheme='facebook' variant='solid' minWidth='fitContent'>Cadastre-se</Button>
        </Flex>

      </Flex>
    </Flex>
  )
}

function HeaderButton(props) {
  return (
    <Button
      colorScheme='facebook'
      variant='link'
      size='lg'
      minWidth='fitContent'>
      {props.name}
    </Button>
  )
}
