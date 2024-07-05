import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
    LinkOverlay,
} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure()
    return (
        <>
            <Button
             zIndex={'overlay'}
                pos={'fixed'}
                top={4}
                left={4}
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
               
                borderRadius={"full"}
                onClick={onOpen}
                >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Compounds</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={"flex"}>
                            <Button  onClick={onClose} variant={"ghost"} colorScheme='purple'>
                                <Link to={'/'}>Home</Link>

                            </Button>
                            <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                                <Link to={'/videos'}>Videos</Link>

                            </Button>
                            <Button  onClick={onclose} variant={"ghost"} colorScheme='purple'>
                                <Link to={'/videos?category=free'}> Free Videos</Link>

                            </Button>
                            <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                                <Link to={'/upload'}>upload Video</Link>

                            </Button>
                        </VStack>
                        <HStack pos={'absolute'} bottom={"10"} left={"0"}>
                            <Button  colorScheme={"purple"}>
                                <Link to={'/login'}>
                                Login
                                </Link>
                                </Button>
                                <Button onClick={onClose} colorScheme={"purple"} variant={'outline'}  w={"full"} justifyContent={"space-evenly"}> 
                                <Link to={'/signup'}> SingUp</Link>
                                
                                </Button>
                        </HStack>

                    </DrawerBody>
                
                  
                </DrawerContent>

            </Drawer>
        </>
    )
}

export default Header