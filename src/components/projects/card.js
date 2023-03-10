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
    useToast
} from '@chakra-ui/react';
import {BiLinkExternal} from 'react-icons/bi'


export default function Card(props) {
    const person = (a, b) => ({kj:a, sld:b,})
    const toast = useToast();
    const Demo= ({item}) =>{
        if(item.demo === '#'){
            return(
                <a ><Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'lg'}
                    bg={item.color}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.900',
                    }}

                    _focus={{
                        bg: 'blue.900',
                    }}
                    onClick={()=> toast({
                        title: 'Sorry, demo not ready yet',
                        status:'info',
                        position: 'top',
                        isClosable: true,
                    })}
                >
                    Demo<BiLinkExternal/>
                </Button></a>
            )
        }else return(
            <a href={item.demo} target={'_blank'}><Button
                flex={1}
                fontSize={'sm'}
                rounded={'lg'}
                bg={item.color}
                color={'white'}
                boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                    bg: 'blue.900',
                }}

                _focus={{
                    bg: 'blue.900',
                }}>
                Demo<BiLinkExternal/>
            </Button></a>
        )
    }
    return (
        <Center py={3}>
            <Box
                maxW={'lg'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                display={'block'}
                borderWidth={'1.5px'}
                borderColor={props.item.color}
                minH={'md'}
                // p={3}
                paddingBottom={2}
                textAlign={'center'}>
                <Text
                    textAlign={'left'}
                    display={'block'}
                    fontSize={11}
                    paddingLeft={2}
                    color={props.item.color}
                >
                    {props.item.time}
                </Text>
                <Image
                    margin={'auto'}
                    rounded={'lg'}
                    // height={188}
                    height={156}
                    width={250}
                    objectFit={'cover'}
                    src={props.item.img}
                    border={'solid 2px rgb(0, 140, 255)'}
                    alt={'sorry image load error'}
                />

                <Heading fontSize={'18px'} fontFamily={'body'} marginTop={2.5} paddingBottom={2}>
                    {props.item.title}
                </Heading>
                <Text
                    textAlign={'center'}
                    display={'block'}
                    paddingTop={1}
                    paddingX={3}
                    fontSize={14}
                    minH={135}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    >
                    {props.item.content}
                </Text>

                <Stack display={'block'} align={'flex-start'} justify={'left'} direction={'row'} paddingX={3}>
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
                    <Demo item={props.item}/>
                    <a href={props.item.github} target={'_blank'}><Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'lg'}
                        bg={props.item.color}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.900',
                        }}
                        _focus={{
                            bg: 'blue.900',
                        }}>
                        Github<BiLinkExternal/>
                    </Button></a>
                </HStack>
            </Box>
        </Center>
    );
}