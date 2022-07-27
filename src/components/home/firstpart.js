import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

export default function SecondPart() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Hi <br />
                    </Heading>
                    <Text color={'gray.500'} fontSize={20}>
                        I'm Yu Liu, or you can call me Jason. A MSCS student at the University of Southern California.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            colorScheme={'blue'}
                            bg={'blue.400'}
                            rounded={'full'}
                            px={6}

                            _hover={{
                                bg: 'blue.500',
                            }}>
                            <a href='about'>About me</a>
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}