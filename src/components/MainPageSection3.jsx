import { Spacer, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import CardSelectPet from "./CardSelectPet"

export default function MainPageSection3(){

  const pets = [
    {
      key: 1,
      img: './images/cachorro2.png',
      name: 'Thor',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Canino',
      age: '3 anos',
      condition: 'Pata esquerda traseira amputada.'
    },
    {
      key: 2,
      img: './images/cachorro.png',
      name: 'Toby',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Canino',
      age: '7 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key: 3,
      img: './images/gato1.png',
      name: 'Bibi',
      sex: 'Fêmea',
      situation: 'Resgatada',
      type: 'Felino',
      age: '5 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key:4,
      img: './images/gato2.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    }
  ]

  return (
    <Flex as='section' align='center' bg='#f3f4f6' gap='2rem' p='2rem 14%' flexDir='column' >
      <Flex w='100%'>
        <Heading fontWeight='semibold' mb='1rem' w='100%' fontSize='26pt' color={'brand.blue'}>Encontre seu novo amigo</Heading>
        <Spacer />
        <Button mr='1.25rem' colorScheme='facebook' variant='outline' borderColor={'brand.orange'}>Filtrar</Button>
        </Flex>
      <Flex gap='2rem' align='center' justify='center'>
      <IconButton bg='none' aria-label="" icon={<ChevronLeftIcon h='5rem' w='5rem' />} w='3rem' h='4rem' />
        <Spacer />
          
          {pets.map((pet) => 
            <CardSelectPet key={pet.name} pet={pet}/>
          )}

        <Spacer />
        <IconButton bg='none' aria-label="" icon={<ChevronRightIcon h='5rem' w='5rem' />} w='3rem' h='4rem' />
      </Flex>
      <Button colorScheme='facebook' variant='solid' w='fit-content'>Ver mais</Button>
    </Flex>
  )
}

