import { Box, Heading, Image, Container, Stack, Text} from "@chakra-ui/react"
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/9.jpg"
import img2 from "../assets/7.avif"
import img3 from "../assets/2.jpg"
import img4 from "../assets/12.avif"
import img5 from "../assets/8.jpg"
const headingOption = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl",

};
const home = () => {
    return (
      <Box>
        <MyCarousel />
  
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
          <Heading
            textTransform={'uppercase'}
            py="2"
            w={'fit-content'}
            borderBottom={'2px solid'}
            m="auto"
          >
            Services
          </Heading>
  
          <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
            
              <Text 
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit labore consectetur reprehenderit maxime hic cupiditate, neque nisi sit esse dolorum minima quod minus, nihil cumque, nemo a quasi! Nulla molestiae harum pariatur, autem velit in culpa blanditiis dolores libero consequuntur cum explicabo, enim ullam consequatur unde quod praesentium totam possimus iure quisquam quam aperiam quo! Quis blanditiis sequi deserunt rem laborum? Ullam est eius reiciendis possimus ab distinctio corrupti obcaecati? Culpa fugit soluta rem corporis atque! Pariatur delectus dolore temporibus eius error, rem, possimus adipisci ipsa consectetur dicta recusandae distinctio?
              </Text>
           
          </Stack>
        </Container>
      </Box>
    );
  };
const MyCarousel = () => (

    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption} >
                Watch The Future
            </Heading>
        </Box>
        <Box w="100av" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption} >
                future is gamming
            </Heading>
        </Box>
        <Box w="100av" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption} >
                Gaming on Console
            </Heading>
        </Box>
        <Box w="100av" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.200'} color={'black'} {...headingOption} >
            Where the Night Comes Alive.
            </Heading>
        </Box>
    </Carousel>

)
export default home