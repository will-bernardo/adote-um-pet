import { Flex, Heading, Button, IconButton, Spacer, Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import CardSelectPet from './CardSelectPet'
import { useRef } from 'react'


export default function PetCarousel({ pets, numCards, title, seeMoreBtn, filterBtn }) {
  const cardCount = numCards * 215

  const carousel = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    const movementSize = carousel.current.offsetWidth / numCards
    carousel.current.scrollLeft -= movementSize
  }

  function handleRightClick(e) {
    e.preventDefault()
    const movementSize = carousel.current.offsetWidth / numCards
    carousel.current.scrollLeft += movementSize
  }


  return (
    <Flex flexDirection='column' align='center' gap='2rem'>
      <Flex w='81%' justify='space-between'>
        <Heading fontWeight='semibold' w='100%' fontSize='26pt' color='#004569'>{title}</Heading>
        {filterBtn ? <Button colorScheme='facebook' variant='outline' borderColor='#FA973B'>Filtrar</Button> : null}
      </Flex>
      <Flex gap='2rem' w='100%' align='center' justify='center'>


        <Button px='0' py='8' bg='none' _hover={{ backgroundColor: '#FFFFFF60' }} onClick={handleLeftClick}>
          <CaretLeft size={50} />
        </Button>
        <Spacer />
        <Flex gap='2' boxSizing='border-box' scrollBehavior='smooth' w={cardCount} overflow='hidden'
          ref={carousel}
        >
          {pets.map((pet) =>
            <CardSelectPet key={pet.id} pet={pet} />
          )}
        </Flex>
        <Spacer />
        <Button px='0' py='8' bg='none' _hover={{ backgroundColor: '#FFFFFF60' }} onClick={handleRightClick}>
          <CaretRight size={50} />
        </Button>
      </Flex>
      {seeMoreBtn ? <Button colorScheme='facebook' variant='solid' w='fit-content'>Ver mais</Button> : null}
    </Flex>
  )
}
