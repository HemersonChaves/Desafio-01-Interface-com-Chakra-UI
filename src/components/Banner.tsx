import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import Airplane from "../../public/Airplane.svg";

export default function Banner(): JSX.Element {
  return (
    <SimpleGrid
      backgroundImage="url('/Background.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      flexDir='row'
      w="100%"
      columns={2} 
      spacing={10}
      paddingLeft={8}
      paddingRight={8}
      color="white.50"
    >
      <Box>
      <Text fontWeight="bold" fontSize={"3xl"} >5 Continentes,
          infinitas possibilidades.</Text>
        <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </p>
      </Box>
      <Box alignItems="center">
        <Image alt="airplane" src={Airplane} />
      </Box>
    </SimpleGrid >
  )
}
