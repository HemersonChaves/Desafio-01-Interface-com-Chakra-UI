import { Box, Flex, Heading, Image, Text} from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image alt="Londres" src="/cidade/londres.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300"  borderTop="0" >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500" >Londres</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino Unido</Text>
        </Flex>
        <Image alt="Reino Unido" src="/cidade/bandeiraReinoUnido.png" width="30px" height="30px" objectFit="cover" borderRadius="50%" />
      </Flex>
    </Box>
  );
}