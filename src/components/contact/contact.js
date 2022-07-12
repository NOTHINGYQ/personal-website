import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue, Center
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import Nav from "../NavBar/nav";
import Footer from "../footer/footer";

export default function Contact() {
    return (
        <div>
            <Nav/>
            <VStack
                minH={'72vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Heading fontSize={'4xl'}>Contact Me</Heading>
                <Box rounded={'lg'}
                     bg={useColorModeValue('white', 'gray.700')}
                     boxShadow={'lg'}
                     width='80%'
                     marginX={30}
                     mx={'auto'}>
                    <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                            <FormControl id="name">
                                <FormLabel>Your Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input type="text" size="md" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Mail</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<MdOutlineEmail color="gray.800" />}
                                    />
                                    <Input type="text" size="md" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder="message"
                                />
                            </FormControl>
                            <Center><FormControl id="name" float="right">
                                <Button
                                    variant="solid"
                                    bg="#0D74FF"
                                    color="white"
                                    _hover={{}}>
                                    Send Message
                                </Button>
                            </FormControl></Center>
                        </VStack>
                    </Box>
                </Box>
            </VStack>
            <Footer/>
        </div>
    );
}