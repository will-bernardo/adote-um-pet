import { Flex, Image, Button } from "@chakra-ui/react";

export default function MainPageSection1() {

  return (
    <Flex as='section' flexDir='column' align='center' gap='2.25rem' pb='8' minWidth='100vh' bg='#f3f4f6' pt='2rem'>
      <Image src='./images/cachorro_na_caixa.png' alt='' maxW='61rem' />
      <Flex justify='center' gap='1rem' w='61rem'>
        <Button colorScheme='facebook' variant='solid' w='50%'>Quero adotar</Button>
        <Button colorScheme='facebook' variant='outline' w='50%' >Quero ajudar</Button>
      </Flex>
    </Flex>
  )
}
