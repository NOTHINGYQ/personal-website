import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    HStack,
    useColorModeValue, Image,
} from '@chakra-ui/react';

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


export default function Card(props) {
    return (
        <Center py={3}>
            <Box
                maxW={'lg'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                display={'block'}
                borderWidth={'1px'}
                minH={'lg'}
                p={6}
                paddingBottom={0}
                textAlign={'center'}>
                <Image
                    rounded={'lg'}
                    height={230}
                    width={280}
                    objectFit={'cover'}
                    src={props.item.img}
                />

                <Heading fontSize={'18px'} fontFamily={'body'} marginTop={1} paddingBottom={1}>
                    {props.item.title}
                </Heading>
                <Text
                    textAlign={'center'}
                    display={'block'}
                    paddingTop={1}
                    fontSize={14}
                    minH={120}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    >
                    {props.item.content}
                </Text>

                <Stack display={'block'} align={'flex-start'} justify={'left'} direction={'row'} >
                    {
                        props.item.tec.map((value) =>(
                            <Badge
                                fontWeight={'500'}>
                                {value}
                            </Badge>
                        ))
                    }
                </Stack>


                <HStack paddingTop={2} direction={'row'} spacing={12} justify={'center'}>
                    <a href={props.item.demo} target={'_blank'}><Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}

                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Demo
                    </Button></a>
                    <a href={props.item.github} target={'_blank'}><Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Github
                    </Button></a>
                </HStack>
            </Box>
        </Center>
    );
}