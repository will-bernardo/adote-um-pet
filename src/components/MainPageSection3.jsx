import { Flex } from "@chakra-ui/react";
import PetCarousel from "./PetCarousel";

export default function MainPageSection3() {

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
      key: 4,
      img: './images/gato2.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key: 5,
      img: './images/cachorro.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key: 6,
      img: './images/gato1.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key: 7,
      img: './images/cachorro2.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    },
    {
      key: 8,
      img: './images/gato1.png',
      name: 'Lupin',
      sex: 'Macho',
      situation: 'Resgatado',
      type: 'Felino',
      age: '6 meses',
      condition: 'Filhote encontrado na rua.'
    }


  ]

  return (
    <Flex bg='#f3f4f6' justify='center'>
      <PetCarousel
        pets={pets}
        numCards={4}
        filterBtn={true}
        seeMoreBtn={true}
        title={"Encontre seu novo amigo"}
      />
    </Flex>
  )
}

