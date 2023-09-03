import { Grid, Image, Button } from "@chakra-ui/react";

export default function MainPageRow1() {
  return (
    <Grid 
    templateColumns='repeat(2, 1fr)' 
    templateRows='repeat(2,1fr)'
    minHeight='100vh' minWidth='100vh' bg='#f3f4f6' p='2rem 12%'>
      <Image colStart={1} colEnd={3} src='./images/cachorro_na_caixa.png' alt='' w='100%'/>
      <Button colorScheme='facebook' variant='solid'>Quero adotar</Button>
      <Button colorScheme='facebook' variant='outline'>Quero ajudar</Button>
    </Grid>
  )
}