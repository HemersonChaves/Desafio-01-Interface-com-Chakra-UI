import {  Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Airplane from "../../public/Airplane.svg";

export default function Banner(): JSX.Element {
  return (
      <Flex
        backgroundImage="url('/Background.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flexDir='row'
                >
        <Box>
          <h1>5 Continentes,
            infinitas possibilidades.</h1>
          <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </p>
        </Box>
        <Box>
          <Image alt="logo" src={Airplane} />
        </Box>
      </Flex>
  )
}
