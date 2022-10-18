import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';


import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Caracteristicas from '../components/Caracteristicas';
import Slider from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristicas />
      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.700" my={["9", "20"]}></Box>
      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
        mb={["5", "14"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  )
}

export default Home
