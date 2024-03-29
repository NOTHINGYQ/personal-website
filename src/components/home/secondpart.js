import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import ThirdPart from "./thirdpart";
import TP from "./thirdpar-2";

const FirstPart = ()=>{
    return(
        <Stack maxW={'1100px'} margin={'auto'} minH={'40vh'} direction={{ base: 'column', md: 'row' }} marginBottom={50}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            My projects
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        These are some of the projects I did.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <a href='projects'><Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Detail
                        </Button></a>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} padding={6}>
                {/*<Image*/}
                {/*    alt={'Login Image'}*/}
                {/*    objectFit={'cover'}*/}

                {/*    src={*/}
                {/*        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'*/}
                {/*    }*/}
                {/*/>*/}
                <ThirdPart/>
                {/*<TP/>*/}
            </Flex>
        </Stack>
    )
}
export default FirstPart;