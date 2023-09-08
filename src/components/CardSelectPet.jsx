/* eslint-disable react/prop-types */
import { Image, List, ListItem, Heading, Flex } from "@chakra-ui/react"

export default function CardSelectPet(props) {
  return (
    <Flex flexDir='column' bg={'brand.white'} boxShadow='md' borderRadius='10px' w='13rem' h='30rem' cursor='pointer' >
            <Image src={props.pet.img} alt=''  />
            <List color='#6B7280' mb='1rem' px='1rem'>
              <Heading fontSize='16pt' color={'brand.orange'} mt='1rem'>{props.pet.name}</Heading>
              <ListItem>{props.pet.sex}-{props.pet.situation}</ListItem>
              <ListItem>Tipo: {props.pet.type}</ListItem>
              <ListItem>Idade: {props.pet.age}</ListItem>
              <ListItem>Condição: {props.pet.condition}</ListItem>
              
            </List>
          </Flex>
  )
}