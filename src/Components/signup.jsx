import {Container,Heading,VStack, Input, Button, Link, Text, Avatar} from "@chakra-ui/react"
 import React from 'react'

const signup = () => {
  return (
   <Container maxW={"container.xl"} h={"100vh"} p={"16"} >
   <form action="">
    <VStack alignItems={"strech" } spacing={"8"} w={["full" ,"96"]} m={"auto"} my={"16"}>
        <Heading>
            Quest Hub
        </Heading>
        <Avatar alignSelf={'center'} boxSize={"32"}/>

        <Input placeholder='Name' type={"text"} required focusBorderColor='purple.500' />
        <Input placeholder='Email' type={"email"} required focusBorderColor='purple.500' />
        <Input placeholder='Password' type={"password"} required focusBorderColor='purple.500' />
        
    
    
   
    <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
        <Text textAlign={"right"}>Sign Up?{" "}
        <Button variant={"link"} alignSelf={"flex-end"} >
        <Link to={'signup'}>Log In</Link>
       
    </Button>
        </Text>
       
    </VStack>
   </form>
   
   </Container>
  )
}

export default signup