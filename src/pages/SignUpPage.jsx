import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Fade,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SignUpPage() {
  //Variações de erro na criação da conta
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("Erro na criação do usuário");

  //Campos de inputs
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  //Valida o acesso ao botão de criação depois que todos os campos estiverem completos
  function validate() {
    return (
      name.length > 2 &&
      cpf.length > 2 &&
      email.length > 2 &&
      phone.length > 2 &&
      address.length > 2 &&
      password.length > 2 &&
      cep.length > 2 &&
      confirmPassword.length > 2 &&
      terms
    );
  }

  //Criação da conta
  const onSubmitAccountCreation = async () => {
    //Implementação supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          cpf,
          phone,
          address,
          cep,
        },
      },
    });

    if (error) {
      setTextError(
        `Erro na criação da conta no auth supabase: ${error.message}`
      );
      setError(true);
    } else {
      console.log(`Usuário criado com sucesso: ${data.user.id}`);
    }
  };

  //Alert de error
  const cancelRef = (useRef < HTMLButtonElement) | (null > null);

  useEffect(() => {
    if (error) {
      cancelRef.current?.focus();
    }
  }, [error]);

  return (
    <>
    <Fade in={true}>
      <Flex
        gap={"40px"}
        flexDir={"column"}
        alignItems={"center"}
        bg={"brand.beige"}
        minH={"xl"}
        mt={"3.75rem"}
        py={8}
      >
        <Flex
          flexDir={"column"}
          gap={"12px"}
          fontSize={"2xl"}
          bg={"brand.white"}
          p={"2.5rem 2rem"}
          w={"full"}
          maxW={"800px"}
          borderRadius={"8px"}
          my={"auto"}
        >
          <Text color={"brand.blue"}>Cadastrar</Text>
          <Flex gap={5}>
            <FormControl isInvalid={name.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"Nome Completo"}
                value={name}
                onChange={(element) => setName(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={cpf.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"CPF"}
                value={cpf}
                onChange={(element) => setCpf(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isInvalid={email.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"E-mail"}
                value={email}
                onChange={(element) => setEmail(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={phone.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"Celular"}
                value={phone}
                onChange={(element) => setPhone(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isInvalid={address.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"Endereço"}
                value={address}
                onChange={(element) => setAddress(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={password.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"Digite uma senha"}
                value={password}
                type={"password"}
                onChange={(element) => setPassword(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isInvalid={cep.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"CEP"}
                value={cep}
                onChange={(element) => setCep(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={confirmPassword.length < 2}>
              <Input
                bg={"gray.100"}
                placeholder={"Confirmar senha"}
                value={confirmPassword}
                type={"password"}
                onChange={(element) => setConfirmPassword(element.target.value)}
              />
              <FormErrorMessage>Mínimo 2 letras</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl isInvalid={!terms} my={"24px"}>
            <Flex
              onClick={() => setTerms(!terms)}
              gap={"10px"}
              color={"gray.500"}
              maxW={"max-content"}
            >
              <Checkbox isChecked={terms} onClick={() => setTerms(!terms)} />
              <Text fontSize={"1rem"}>Concordo com os Termos e Condições</Text>
            </Flex>
            <FormErrorMessage>
              Você precisa concordar com os termos e condições
            </FormErrorMessage>
          </FormControl>
          <Button
            onClick={onSubmitAccountCreation}
            h={"max-content"}
            p={"14px"}
            bg={"brand.blue"}
            color={"brand.white"}
            _hover={{}}
            isDisabled={!validate()}
          >
            Acessar
          </Button>
        </Flex>
      </Flex>

      <AlertDialog isOpen={error} leastDestructiveRef={cancelRef}>
        <AlertDialogOverlay bg={""} />
        <AlertDialogContent>
          <Alert status="error" variant={"left-accent"}>
            <AlertIcon />
            <Flex justifyContent={"space-between"} w={"full"} h={"full"}>
              <Box my={"auto"}>
                <AlertTitle>Erro!</AlertTitle>
                <AlertDescription>{textError}</AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={() => setError(false)}
              />
            </Flex>
          </Alert>
        </AlertDialogContent>
      </AlertDialog>
      </Fade>
    </>
  );
}
