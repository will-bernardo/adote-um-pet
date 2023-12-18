import { Flex, Box, Text, List, ListItem, Image, Button } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from '@phosphor-icons/react'


export default function PetSelectPage() {
  return (
    <>
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
            <Text fontSize='2xl' fontWeight='bold'>Nome_do_Pet</Text>
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
    </>
  )
}
