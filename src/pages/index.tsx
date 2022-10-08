import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import logo from "../../public/logo.svg";

const Home: NextPage = () => {
  return (
    <Flex direction='column'  >
      <Flex align='center' justify='center'>
        <Image alt="logo" src={logo} />
      </Flex>
      <Flex>
        <h1>Banner</h1>
      </Flex>
      <Flex>
        <h1>infor</h1>
      </Flex>
      <Flex>
        <h1>Texto</h1>
      </Flex>
      <Flex>
        <h1>Carrosel</h1>
      </Flex>
    </Flex>
  )
}

export default Home
