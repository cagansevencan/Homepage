import {useColorMode, IconButton} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronDownIcon} from "@chakra-ui/icons";
import {useRouter} from 'next/router'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    Avatar,
    HStack,
    Text,
    Box,
    Container,
    Button,
    MenuDivider
} from '@chakra-ui/react'

const MENU = [
    {name: 'Homepage', url: '/'},
    {name: 'Spotify Gems', url: '/spotify'},
    {name: 'Bookmarks', url: '/bookmarks'},
    {name: 'Photos', url: '/photos'},
]


function Header() {
    const router = useRouter()
    const activePage = MENU.find((_) => _.url === router.pathname)

    return (
        <Box as={"header"} py={10}>
            <Container maxW={"2xl"}>
                <Menu as={"nav"}>
                    <MenuButton
                        as={Button}
                        ml={-3}
                        px={3}
                        py={2}
                        h="auto"
                        bg="transparent"
                    >
                        {/* visible part */}
                        <HStack spacing={2}>
                        <Avatar size={"sm"} src={"/new.jpeg"} name="Cagan Sevencan" />
                        <Text fontSize={"lg"}>{activePage && activePage.name}</Text>
                        <ChevronDownIcon />
                        </HStack>
                    </MenuButton>

                    {/* Dropdown part */}
                    <MenuList>
                        {MENU.map((item) => {
                            return (
                                <MenuItem as={"div"} p={0} key={item.url}>
                                    <NextLink href={item.url}>
                                        <Link
                                            px={3}
                                            py={2}
                                            w={"full"}
                                            _hover={{textDecoration: 'none'}}
                                            >
                                            {item.name}
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Container>
        </Box>
    )
}

export default Header
