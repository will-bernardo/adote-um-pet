import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { api } from "../lib/api";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const accountCreationSchema = z
  .object({
    name: z
      .string()
      .regex(/(\D+ +\D+)/g, { message: "Nome completo necessário." }),
    email: z
      .string()
      .min(1, { message: "E-mail necessário." })
      .email({ message: "E-mail inválido" }),
    password: z.string().min(8, { message: "Mínimo de 8 caracteres." }),
    confirmPassword: z.string().min(8, { message: "Mínimo de 8 caracteres." }),
    terms: z.string({
      invalid_type_error: "Você deve aceitar o termo de uso para se cadastrar.",
    }),
    marketing: z.string().optional().or(z.literal(false)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "A confirmação da senha não confere",
    path: ["confirmPassword"],
  });

export default async function SignUpPage() {
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("");
  const { onOpen: onTermsOpen } = useDisclosure();

  console.log(error, textError);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({resolver: zodResolver(accountCreationSchema)})

  const onSubmitAccountCreation = async (formData) => {
    const { data } = await api
      .post(`/create-user`, {
        email: formData.email,
        name: formData.name.toLowerCase(),
        password: formData.password,
        marketing:
          typeof formData.marketing === "string" && formData.marketing === "y",
      })
      .catch((err) => {
        setTextError(
          "Houve um erro na criação do usuário. Por favor, contate o suporte!"
        );
        setError(true);
        console.log(err);
      });

    if (data) {
      console.log("sucesso");
    } else {
      console.log("deu errado");
    }
  };

  return (
    <Flex
      gap={"40px"}
      flexDir={"column"}
      alignItems={"center"}
      bg={"brand.beige"}
      h={"xl"}
      mt={"3.75rem"}
    >
      <Flex gap={"12px"}>
        <Flex
          flexDir={"column"}
          gap={"12px"}
          fontSize={"2xl"}
          bg={"brand.white"}
          p={"2.5rem 2rem"}
          w={"sm"}
          borderRadius={"8px"}
        >
          <HStack
            gap={5}
            alignItems={"flex-start"}
            as={"form"}
            pt={2}
            onSubmit={handleSubmit(onSubmitAccountCreation)}
          >
            <VStack
              flex={2/3}
              px={5}
              py={8}
              border={"0"}
              borderColor={"gray.100"}
              w={"full"}
              alignItems={"flex-start"}
              gap={5}
            >
              <Text>Crie sua conta</Text>

              <Text>
                E escolha o plano ideal para você. Uma experiência de compra
                mais fácil e rápida em apenas alguns cliques!
              </Text>

              <VStack gap={2} w={"full"}>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  gap={3}
                  w={"full"}
                >
                  <FormControl isInvalid={errors.name && true}>
                    <FormLabel fontSize={"sm"} fontWeight={"bold"}>
                      Nome e sobrenome
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder={"Ana Santos"}
                      {...register("name")}
                    />

                    <FormErrorMessage colorScheme="red">
                    </FormErrorMessage>
                  </FormControl>
                </Stack>

                <FormControl>
                  <FormLabel fontSize={"sm"} fontWeight={"bold"}>
                    E-mail
                  </FormLabel>
                  <Input
                    placeholder={"exemplo@email.com"}
                    type="email"
                    {...register("email")}
                  />

                  <FormErrorMessage colorScheme="red">
                  </FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"} fontWeight={"bold"}>
                    Senha
                  </FormLabel>
                  <Input
                    placeholder={"No mínimo 8 caracteres"}
                    type="password"
                    {...register("password")}
                  />

                  <FormErrorMessage colorScheme="red">
                  </FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"} fontWeight={"bold"}>
                    Confirme sua Senha
                  </FormLabel>
                  <Input
                    placeholder={"No mínimo 8 caracteres"}
                    type="password"
                    {...register("confirmPassword")}
                  />

                  <FormErrorMessage colorScheme="red">
                  </FormErrorMessage>
                </FormControl>

                <VStack gap={0} w={"full"}>
                  <FormControl>
                    <span
                      style={{
                        display: "inline",
                        alignItems: "center",
                        height: "21px",
                      }}
                    >
                      <Checkbox
                        size={"sm"}
                        colorScheme={"purple"}
                        value={"y"}
                        {...register("terms")}
                      >
                        Eu li e concordo com os
                      </Checkbox>
                      <Box as={"span"} onClick={() => onTermsOpen()}>
                        <Text
                          color={"purple.600"}
                          fontWeight={600}
                          _hover={{ cursor: "pointer", textDecor: "underline" }}
                          fontSize={"sm"}
                          as={"span"}
                        >
                          {" "}
                          Termos de Serviço e Política de Privacidade
                        </Text>
                      </Box>
                    </span>

                    <FormErrorMessage colorScheme="red">
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <Checkbox
                      size={"sm"}
                      colorScheme={"purple"}
                      value={"y"}
                      {...register("marketing")}
                    >
                      Quero receber as novidades da Hubee em primeira mão!
                    </Checkbox>
                  </FormControl>
                </VStack>

                <Button
                  colorScheme={"purple"}
                  fontSize={"md"}
                  alignSelf={"flex-start"}
                  type={"submit"}
                  isLoading={isSubmitting}
                  w={"full"}
                >
                  Confirmar e Continuar
                </Button>
              </VStack>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
