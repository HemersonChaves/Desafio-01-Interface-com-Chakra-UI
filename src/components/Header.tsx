import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Logo from "../../public/logo.svg";

export default function Header()  {
  return (
    <Box >
      <Flex align='center' justify='center' h="100px">
        <Image alt="logo" src={Logo} />
      </Flex>
    </Box>
  )
}