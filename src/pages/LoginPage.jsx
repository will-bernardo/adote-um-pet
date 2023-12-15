import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Flex gap={'40px'} flexDir={"column"} alignItems={"center"} bg={"brand.beige"} h={'xl'} mt={'3.75rem'}>
      <Text fontSize={"4xl"} color={"brand.blue"} mt={'3.75rem'}>
        Bem-vindo ao #AdoteumPet
      </Text>
      <Flex gap={"12px"}>
        <Flex
          flexDir={"column"}
          gap={"12px"}
          fontSize={"2xl"}
          bg={"brand.white"}
          p={"2.5rem 2rem"}
          w={'sm'}
          borderRadius={'8px'}
        >
          <Text color={"brand.blue"}>Acesse sua conta</Text>
          <Input bg={"gray.100"} placeholder={"Digite seu e-mail"} />
          <Input bg={"gray.100"} placeholder={"Digite sua senha"} />
          <Flex color={"gray.500"} justifyContent={'space-between'}>
            <Flex gap={"10px"}>
              <Checkbox id={"remember-me"}></Checkbox>
              <Text fontSize={"1rem"}>Lembrar-me</Text>
            </Flex>
            <Button variant={"link"} textDecor={"underline"} size={'sm'}>
              Esqueci minha senha
            </Button>
          </Flex>
          <Button h={'50px'} bg={'brand.blue'} color={'brand.white'} _hover={{}}>Entrar</Button>
        </Flex>
        <Flex
          flexDir={"column"}
          gap={"12px"}
          bg={"brand.white"}
          p={"2.5rem 2rem"}
          w={'sm'}
          borderRadius={'8px'}
          h={'max-content'}
        >
          <Text fontSize={"2xl"} color={"brand.blue"}>
            Crie sua conta
          </Text>
          <Button
            variant={"outline"}
            color={"brand.orange"}
            borderColor={"brand.orange"}
          >
            Criar conta ONG
          </Button>
          <Button
            variant={"outline"}
            color={"brand.blue"}
            borderColor={"brand.blue"}
          >
            Criar conta Tutor
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
