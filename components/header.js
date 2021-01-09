import { useColorMode, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
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
    { name: 'Homepage', url: '/' },
    { name: 'Spotify Gems', url: '/spotify' },
    { name: 'Bookmarks', url: '/bookmarks' },
    { name: 'Photos', url: '/photos' },
]



function Header(){
    const router = useRouter()

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

                        </HStack>

                    </MenuButton>
                </Menu>
            </Container>
        </Box>
    )
}

export default Header
