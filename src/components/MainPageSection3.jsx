import { Button, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";

export default function MainPageSection3(){
  return (
    <Flex as='section' align='center' bg='#f3f4f6' gap='2rem' p='2rem 14%' flexDir='column' >
      <Heading fontWeight='semibold' mb='1rem' w='100%' fontSize='26pt' color='#004569'>Encontre seu novo amigo</Heading>
      <Flex gap='2rem' align='center' justify='center'>
        <Button>L</Button>
          <DogSelect />
          <DogSelect />
          <DogSelect />
          <DogSelect />
        <Button>R</Button>
      </Flex>
      <Button colorScheme='facebook' variant='solid' w='fit-content'>Ver mais</Button>
    </Flex>
  )
}

function DogSelect() {
  return (
    <Flex flexDir='column' bg='#fff' boxShadow='md' borderRadius='10px' w='11rem' h='auto' cursor='pointer' >
            <Image src='./images/cachorro.png' alt='' />
            <List color='#6B7280' mb='1rem' px='1rem'>
              <Heading fontSize='16pt' color='#FA973B' mt='1rem'>Toby</Heading>
              <ListItem>Macho-Resgatado</ListItem>
              <ListItem>Tipo: Canino</ListItem>
              <ListItem>Idade: 7 meses</ListItem>
              <ListItem>Condição: Filhote encontrado na rua.</ListItem>
            </List>
          </Flex>
  )
}