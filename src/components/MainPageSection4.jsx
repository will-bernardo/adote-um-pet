import { Flex, Image, Text, Spacer } from "@chakra-ui/react";

export default function MainPageSection2() {
  return (
    <Flex as='section' bg='#f3f4f6' p='4rem 0'>
      <Flex bg='#F5DAC2' h='26rem' gap='2rem' w='100%' justify='center' align='center'>
        <Flex align='center' justify='center' border='1px' borderColor='#004569' borderRadius='3px' bg='' h='27rem' w='25.5rem' p='0 0.75rem'>
          <Image src='./images/depoimento.png' alt='' w='97%' />
        </Flex>
        <Flex align='center' flexDir='column' gap='0.25rem' w='34rem'>
          <Flex alignSelf='end' >
            <Stars />
          </Flex>
          <Image alignSelf='start' src='./open-quote.svg' alt='' w='2rem' />
          <Text textAlign='center' w='94%' fontSize='18pt' color='#2a2a2a'>
            Adotar a mel foi a melhor coisa que poderia ter feito,
            dar amor e carinho a um animal e ser retribuida
            é sem igual.
          </Text>
          <Image alignSelf='end' src='./close-quote.svg' alt='' w='2rem' />
          <Text as='i' fontSize='16pt' alignSelf='start'>- Ana Clara</Text>
        </Flex>

      </Flex>
    </Flex>
  )
}

function Stars() {
  return (
    <Flex>
      <Image src='./star.svg' alt='' />
      <Image src='./star.svg' alt='' />
      <Image src='./star.svg' alt='' />
      <Image src='./star.svg' alt='' />
      <Image src='./star.svg' alt='' />
    </Flex>
  )
}
