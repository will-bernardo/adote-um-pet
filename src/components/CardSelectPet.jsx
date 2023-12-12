/* eslint-disable react/prop-types */
import { Image, List, ListItem, Heading, Flex } from "@chakra-ui/react"

export default function CardSelectPet(props) {
  return (
    <Flex flexDir='column' border='solid' borderWidth='thin' borderColor='#f3f4f6' bg='#fff' borderRadius='10px' minW='13rem' h='29rem' cursor='pointer'
      _hover={{ border: '1px solid #FA973B', transition: 'border 0.3s' }} >


      <Image src={props.pet.img} alt='' borderTopRadius='10px' />
      <List color='#6B7280' mb='1rem' px='1rem'>
        <Heading fontSize='16pt' color='#FA973B' mt='1rem'>{props.pet.name}</Heading>
        <ListItem>{props.pet.sex}-{props.pet.situation}</ListItem>
        <ListItem>Tipo: {props.pet.type}</ListItem>
        <ListItem>Idade: {props.pet.age}</ListItem>
        <ListItem>Condição: {props.pet.condition}</ListItem>
      </List>
    </Flex>
  )
}
