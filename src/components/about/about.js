import {
    Button, Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    HStack,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import Nav from "../NavBar/nav";
import Footer from "../footer/footer";


export default function SplitScreen() {
    return (
        <div>
            <Nav/>
            <VStack>
            <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'top'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

                            <Text color={'blue.400'} as={'span'}>
                                About Me
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            The project board is an exclusive resource for contract work. It's
                            perfect for freelancers, agencies, and moonlighters.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Text>

                    </Stack>
                </Flex>
                <Flex flex={1} align={'center'} justify={'center'}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        width='50%'
                        height='50%'
                        src={
                            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
                </Flex>
            </Stack>
                <VStack width={'87%'}>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The project board is an exclusive resource for contract work. It's
                        perfect for freelancers, agencies, and moonlighters.The project board is an exclusive resource for contract work. It's
                        perfect for freelancers, agencies, and moonlighters.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The project board is an exclusive resource for contract work. It's
                        perfect for freelancers, agencies, and moonlighters.moonlighters.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "L
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The project board is an exclusive resource for contract work. It's
                        perfect for freelancers, agencies, and moonlighters.moonlighters.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "L
                    </Text>
                </VStack>


            </VStack>
            <Footer/>
        </div>
    );
}