import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import Link from 'next/link';
export default function Slider() {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            direction="column"
            bgImage={"url(/europa.png)"}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continet/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                  Europa
                </Heading>
                <Text mt={["2", "4"]} fontSize={["0.8rem", "1xl", "2xl"]} color="gray.300" fontWeight="bold">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            direction="column"
            bgImage={"url(/europa.png)"}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continet/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                  Europa
                </Heading>
                <Text mt={["2", "4"]} fontSize={["0.8rem", "1xl", "2xl"]} color="gray.300" fontWeight="bold">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            direction="column"
            bgImage={"url(/europa.png)"}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continet/europe">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                  Europa
                </Heading>
                <Text mt={["2", "4"]} fontSize={["0.8rem", "1xl", "2xl"]} color="gray.300" fontWeight="bold">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        ...
      </Swiper>
    </Flex>
  )
}