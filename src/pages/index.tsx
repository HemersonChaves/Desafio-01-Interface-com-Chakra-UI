import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <Box >
      <Header />
      <Banner />
      <Flex>
        <h1>infor</h1>
      </Flex>
      <Flex>
        <h1>Texto</h1>
      </Flex>
      <Flex>
        <h1>Carrosel</h1>
      </Flex>
    </Box>
  )
}

export default Home
