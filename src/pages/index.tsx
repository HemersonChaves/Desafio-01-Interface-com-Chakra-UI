import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from "../../public/logo.svg";
import Airplane from "../../public/Airplane.svg";

const Home: NextPage = () => {
  return (
    <Box >
      <Flex align='center' justify='center' h="100px">
        <Image alt="logo" src={Logo} />
      </Flex>
      <Flex
        backgroundImage="url('/Background.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
        <Flex>
          <h1>5 Continentes,
            infinitas possibilidades.</h1>
          <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </p>
        </Flex>
        <Flex>
          <Image alt="logo" src={Airplane} />
        </Flex>

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
    </Box>
  )
}

export default Home
