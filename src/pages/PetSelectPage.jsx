import { Flex, Box, Text, List, ListItem, Image, Button, Fade } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import PetCarousel from "../components/PetCarousel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PetSelectPage() {
  const { id } = useParams()
  const [pets, setPets] = useState([])
  const [curPet, setCurPet] = useState({})

  function getPet(data) {
    const petdata = data.find((pet) => {
      return pet.id === Number(id)
    })
    console.log('data recebido', data)
    console.log('founded', petdata)
    setCurPet(petdata)
  }

  useEffect(() => {
    async function getPetsData() {
      const response = await fetch('http://localhost:5173/src/petdata.json')
      const data = await response.json()
      console.log(data)

      if (data) {
        setPets(data)
        getPet(data)
      }
    }

    getPetsData()

  }, [id])


  return (
    <>
      <Fade in={true}>
      <Flex bg='#F3F4F6' py='3rem'>
        <Flex bg='#F5DAC2' gap='3rem' align='center' py='3rem' w='100%' justify='center'>
          <Flex align='center' gap='3rem'>
            <Button px='0' py='8' bg='none' _hover={{ backgroundColor: '#FFFFFF60' }}>
              <CaretLeft size={50} cursor='pointer' />
            </Button>
            <Box bg='#ccc' w='25rem' h='25rem' borderRadius='8px'>
            </Box>
            <Button px='0' py='8' bg='none' _hover={{ backgroundColor: '#FFFFFF60' }} >
              <CaretRight size={50} />
            </Button>
          </Flex>
          <Flex flexDir='column' color='#004569' gap='3rem'>
            <Text fontSize='2xl' fontWeight='bold'>{curPet.name}</Text>
            <List color='#6B7280'>
              <ListItem>Info 1</ListItem>
              <ListItem>Info 2</ListItem>
              <ListItem>Info 3</ListItem>
              <ListItem>Info 4</ListItem>
            </List>

            <List display='flex' gap='3rem'>
              <ListItem display='flex' gap='0.5rem' align='center'>
                <Image src='../../public/icons/checkbox.svg' alt='' />
                <Text fontSize='sm'>VACINADO</Text>
              </ListItem>
              <ListItem display='flex' gap='0.5rem' align='center'>
                <Image src='../../public/icons/checkbox.svg' alt='' />
                <Text fontSize='sm'>VERMIFUGADO</Text>
              </ListItem>
            </List>
            <Button bg='#004569' w='fit-content' color='white'>ADOTAR</Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex bg='#f3f4f6' pt='10' pb='20' justify='center'>
        <PetCarousel
          pets={pets}
          numCards={5}
          filterBtn={false}
          seeMoreBtn={false}
          title={"PETS mais próximos de você"}
        />
      </Flex>
     </Fade>
    </>
  )
}
