import { Flex, Link, Heading, Image } from "@chakra-ui/react";

export default function Footer(){
  return (
    <Flex as='footer' flexDir='column' bg='#004569' h='23rem' color='#fff' px='12%' py='3rem'>
      <Flex justify='space-between' >   
        <Flex flexDir='column' gap='3px'>
          <Heading as='h3' fontSize='13pt' fontWeight='500'>ADOTE</Heading>
        <Link>Adote com amor</Link>
        <Link>Pesquisar animais</Link>
        </Flex>

        <Flex flexDir='column' gap='3px'>
          <Heading as='h3' fontSize='13pt' fontWeight='500'>COLABORE</Heading>
        <Link>Doe qualquer valor</Link>
        <Link>Seja uma Empresa Parceira</Link>
        </Flex>

        <Flex flexDir='column' gap='3px'>
          <Heading as='h3' fontSize='13pt' fontWeight='500'>ONG&apos;S</Heading>
        <Link>Cadastrar</Link>
        </Flex>

        <Flex flexDir='column' gap='3px'>
          <Heading as='h3' fontSize='13pt' fontWeight='500'>SOBRE #AdoteumPet</Heading>
        <Link>Sobre #AdoteumPet</Link>
        <Link>Perguntas frequentes</Link>
        <Link>Termo de Uso e Política de<br/>Privacidade</Link>
        </Flex>

        <Flex flexDir='column' gap='3px'>
          <Heading as='h3' fontSize='13pt' fontWeight='500'>PERFIL</Heading>
        <Link>Minha página de perfil</Link>
        <Link>Cadastre-se</Link>
        </Flex>

      </Flex>
        <Flex justify='center' gap='1.75rem' mt='2rem'>
          <Image src='./instagram.svg' alt='' />
          <Image src='./facebook.svg' alt='' />
          <Image src='./youtube.svg' alt='' />
          <Image src='./twitter.svg' alt='' />
        </Flex>
        <Flex justify='center' mt='1.75rem'>
        <Image src='./logo-white.svg' alt='' />
        </Flex>
    </Flex>
  )
}