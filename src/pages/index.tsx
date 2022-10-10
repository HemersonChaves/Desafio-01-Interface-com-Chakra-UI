import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from "../../public/logo.svg";
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <Box >
      <Flex align='center' justify='center' h="100px">
        <Image alt="logo" src={Logo} />
      </Flex>
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
