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
import {BiLinkExternal} from 'react-icons/bi'


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
                minH={'md'}
                p={6}
                paddingBottom={2}
                textAlign={'center'}>
                <Image
                    rounded={'lg'}
                    // height={188}
                    height={156}
                    width={250}
                    objectFit={'cover'}
                    src={props.item.img}
                    border={'solid 2px rgb(0, 140, 255)'}
                />

                <Heading fontSize={'18px'} fontFamily={'body'} marginTop={2.5} paddingBottom={2}>
                    {props.item.title}
                </Heading>
                <Text
                    textAlign={'center'}
                    display={'block'}
                    paddingTop={1}
                    fontSize={14}
                    minH={135}
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


                <HStack paddingTop={2.5} paddingBottom={1} direction={'row'} spacing={12} justify={'center'}>
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
                        Demo<BiLinkExternal/>
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
                        Github<BiLinkExternal/>
                    </Button></a>
                </HStack>
            </Box>
        </Center>
    );
}