import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Cocktail from "../../public/cocktail.svg";
import Surf from "../../public/surf.svg";
import Building from "../../public/building.svg";
import Museum from "../../public/museum.svg";
import Earth from "../../public/earth.svg";

export default function Caracteristicas()  {
  return ( 
      <SimpleGrid columns={5} spacing={10}>
        <Box >
          <Image alt="cocktail" src={Cocktail} />
          <Text >Vida noturna</Text>
        </Box>
        <Box >
          <Image alt="surf" src={Surf} />
          <Text >Praia</Text>
        </Box>
        <Box >
          <Image alt="building" src={Building} />
          <Text >Moderno</Text>
        </Box>
        <Box >
          <Image alt="museum" src={Museum} />
          <Text >Clássico</Text>
        </Box>
        <Box >
          <Image alt="earth" src={Earth} />
          <Text >e mais</Text>
        </Box>
      </SimpleGrid>     
  )
}
