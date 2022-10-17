import { Box, Text, Flex, Image, Heading } from '@chakra-ui/react';

export default function Banner(): JSX.Element {
  return (
    <Flex
      backgroundImage="url('/Background.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition={["100% 20%", "100% 20%", "100% 30%"]}
      w="100%"
      h={["163px", "250px", "250px", "335px"]}

    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "3xl", "4xl"]} >
            5 Continentes,<br />infinitas possibilidades
          </Heading>

          <Text
            color="gray.300"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}

          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
      </Flex>
      <Image
        w={["300px", "300px", "300px", "430px"]}
        display={["none", "none", "block"]}
        transform="translateY(48px)"
        mx="8"
        alt="avião amarelo voando com algumas nuvens"
        src="/Airplane.svg" />
    </Flex >
  )
}
