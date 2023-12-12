import { Flex, Heading, Button, IconButton, Spacer, Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import CardSelectPet from './CardSelectPet'
import { useRef } from 'react'


export default function PetCarousel({ pets }) {
  const carousel = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    const movementSize = carousel.current.offsetWidth / 4
    carousel.current.scrollLeft -= movementSize
  }

  function handleRightClick(e) {
    e.preventDefault()
    const movementSize = carousel.current.offsetWidth / 4
    carousel.current.scrollLeft += movementSize
  }


  return (
    <Flex flexDirection='column' align='center' gap='2rem'>
      <Flex w='81%' justify='space-between'>
        <Heading fontWeight='semibold' w='100%' fontSize='26pt' color='#004569'>Encontre seu novo amigo</Heading>
        <Button colorScheme='facebook' variant='outline' borderColor='#FA973B'>Filtrar</Button>
      </Flex>
      <Flex gap='2rem' w='100%' align='center' justify='center'>

        <IconButton bg='none' aria-label="" icon={<ChevronLeftIcon h='5rem' w='5rem' />} w='3rem' h='4rem'
          onClick={handleLeftClick}
        />
        <Spacer />
        <Flex gap='2' boxSizing='border-box' scrollBehavior='smooth' w='860px' overflow='hidden'
          ref={carousel}
        >
          {pets.map((pet) =>
            <CardSelectPet key={pet.id} pet={pet} />
          )}
        </Flex>

        <Spacer />
        <IconButton bg='none' aria-label="" icon={<ChevronRightIcon h='5rem' w='5rem' />} w='3rem' h='4rem'
          onClick={handleRightClick}
        />
      </Flex>
      <Button colorScheme='facebook' variant='solid' w='fit-content'>Ver mais</Button>
    </Flex>
  )
}
