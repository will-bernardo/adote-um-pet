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

export default function SignUpPage() {
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("");
  const { onOpen: onTermsOpen } = useDisclosure();

  console.log(error, textError);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(accountCreationSchema) });

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
      <Flex
        flexDir={"column"}
        gap={"12px"}
        fontSize={"2xl"}
        bg={"brand.white"}
        p={"2.5rem 2rem"}
        w={"sm"}
        borderRadius={"8px"}
      >
        <Text color={"brand.blue"}>Acesse sua conta</Text>
        <Input bg={"gray.100"} placeholder={"Digite seu e-mail"} />
        <Input bg={"gray.100"} placeholder={"Digite sua senha"} />
        <Flex color={"gray.500"} justifyContent={"space-between"}>
          <Flex gap={"10px"}>
            <Checkbox id={"remember-me"}></Checkbox>
            <Text fontSize={"1rem"}>Lembrar-me</Text>
          </Flex>
          <Button variant={"link"} textDecor={"underline"} size={"sm"}>
            Esqueci minha senha
          </Button>
        </Flex>
        <Button h={"50px"} bg={"brand.blue"} color={"brand.white"} _hover={{}}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
