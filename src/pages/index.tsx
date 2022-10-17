import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Caracteristicas from '../components/Caracteristicas';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristicas />
      <Flex align='center'
        justify='center'>
        <Center>
          <Text fontSize={"3xl"}>Vamos nessa?
          </Text>
          <br />
          <Text fontSize={"3xl"}>
            Então escolha seu continente
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </Flex>
    </Flex>
  )
}

export default Home
