import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Center,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {BiLinkExternal} from 'react-icons/bi'
const Links = ['Home','About Me','Projects', 'Resume'];

const NavLink = ({ children }) => {
    let url = children.split(" ")[0];
    let tar = '_self';
    if(children ==='Resume'){
        url = 'https://drive.google.com/file/d/1NrPNs6aVobzAnDKhO02U3IqYlTXo9aKG/view?usp=sharing';
        tar = '_blank';
    }
    // if(children ==='Home') url='/';
    //when deploy on github page, change prefix path
    if(children ==='Home') url='/personal-website/';
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            target={tar}
            href={children === 'Resume' ? url : url.toLowerCase()}>
            <Center>{children}
            {
                children === 'Resume' ? <BiLinkExternal/> : <></>
            }
            </Center>
        </Link>
    )
}

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        {/*when deploy on github page, change prefix path*/}
                        {/*<Box><a href='/'>Jason Liu</a></Box>*/}
                        <Box><a href='/personal-website/'>Jason Liu</a></Box>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => {
                                if(link === 'other') return <><NavLink>sdf</NavLink><BiLinkExternal/></>
                                else
                                    return <NavLink key={link}>{link}</NavLink>
                            })}
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Nav;