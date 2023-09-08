import { Flex } from "@chakra-ui/react";

// eslint-disable-next-line
export default function Layout({ children }) {
  return (
    <Flex
      flexDir={"column"}
      bg={"gray.200"}
      minH={"100vh"}
      justifyContent={"space-between"}
    >
      {children}
    </Flex>
  );
}
