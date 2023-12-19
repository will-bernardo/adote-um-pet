import { Flex } from "@chakra-ui/react";
import PetCarousel from "./PetCarousel";
import { useEffect, useState } from "react";

export default function MainPageSection3() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    async function getPetsData() {
      const response = await fetch('http://localhost:5173/src/petdata.json')
      const data = await response.json()
      console.log(data)
      setPets(data)
    }
    getPetsData()

  }, [])

  return (
    <Flex bg='#f3f4f6' justify='center'>
      <PetCarousel
        pets={pets}
        numCards={4}
        filterBtn={true}
        seeMoreBtn={true}
        title={"Encontre seu novo amigo"}
      />
    </Flex>
  )
}

