import { Flex, Image, Button } from "@chakra-ui/react";

export default function MainPageSection1() {
  return (
    <Flex as='section' flexDir='column' gap='2.25rem' Height='100vh' minWidth='100vh' bg='#f3f4f6' p='2rem 14%'>
      <Image src='./images/cachorro_na_caixa.png' alt='' w='100%'/>
      <Flex justify='center' gap='1rem'>
        <Button colorScheme='facebook' variant='solid' w='50%'>Quero adotar</Button>
        <Button colorScheme='facebook' variant='outline' w='50%' >Quero ajudar</Button>
      </Flex>
    </Flex>
  )
}