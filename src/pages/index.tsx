import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Caracteristicas from '../components/Caracteristicas';

const Home: NextPage = () => {
  return (
    <Box >
      <Header />
      <Banner />
      <Caracteristicas />
      <Flex   align='center'
      justify='center'>
        <Center>
          <Text  fontSize={"3xl"}>Vamos nessa?
          </Text>
          <br/>
          <Text  fontSize={"3xl"}>
            Então escolha seu continente
          </Text>
        </Center>
      </Flex>
      <Flex>
        <h1>Carrosel</h1>
      </Flex>
    </Box>
  )
}

export default Home
