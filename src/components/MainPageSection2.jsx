import { Flex, Image, Text, Heading, Spacer, Button } from "@chakra-ui/react";

export default function MainPageSection2() {
  return (
    <Flex as='section' bg='#f3f4f6' p='4rem 0'>
      <Flex bg='#F5DAC2' h='26rem' w='100%' p='14%' justify='center' align='center'>
        <Flex flexDir='column' gap='1rem' w='44%'>
          <Heading fontSize='26pt' fontWeight='semibold' color='#004569'>Você sabe os benefícios de ter um Pet?</Heading>
          <Text fontSize='14pt' color='#2a2a2a'>
            De acordo com a ciência, os pets, especialmente o cachorro e o gato,
             podem reduzir o estresse, a ansiedade e a depressão. 
             Além disso, eles aliviam os efeitos da solidão e estimulam atividades físicas,
              proporcionando benefícios tanto à saúde mental como à saúde física.
          </Text>
          <Button colorScheme='facebook' variant='solid' w='fit-content'>Ver mais</Button>
        </Flex>
      <Spacer />
        <Flex align='center' justify='center' border='1px' borderColor='#004569' borderRadius='3px' bg='' h='28.5rem' w='44%' p='0 0.75rem'>
          <Image src='./images/mulher_deitada_com_cachorro.png' alt='' />
        </Flex>

      </Flex>
    </Flex>
  )
}