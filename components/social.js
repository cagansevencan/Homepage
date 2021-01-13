import SiteConfig from '../site.config'
import { HStack, Link, IconButton } from '@chakra-ui/react'
import Image from 'next/image'

function SocialButton({ href, children }) {
  return <IconButton as={Link} isExternal href={href} icon={children} />
}

function Social({
                  twitter = false,
                  youtube = false,
                  github = false,
                  instagram = false,
                  spotify = false,
                  linkedin = false,
                  ...props
                }) {
  return (
    <HStack {...props}>
      {spotify && (
        <SocialButton href={SiteConfig.social.twitter}>
          <Image layout={"fixed"} src="/static/icons/twitter.png"
          width={24}
          height={24}/>
        </SocialButton>
      )}
      {spotify && (
        <SocialButton href={SiteConfig.social.spotify}>
          <Image layout={"fixed"} src="/static/icons/spotify.png"
          width={24}
          height={24}/>
        </SocialButton>
      )}
      {spotify && (
        <SocialButton href={SiteConfig.social.github}>
          <Image color={"currentColor"} fill={"currentColor"}  layout={"fixed"} src="/static/icons/github.png"
          width={24}
          height={24}/>
        </SocialButton>
      )}
      {spotify && (
        <SocialButton href={SiteConfig.social.instagram}>
          <Image layout={"fixed"} src="/static/icons/instagram.png"
          width={24}
          height={24}/>
        </SocialButton>
      )}
      {spotify && (
        <SocialButton href={SiteConfig.social.linkedin}>
          <Image layout={"fixed"} src="/static/icons/linkedin.png"
          width={24}
          height={24}/>
        </SocialButton>
      )}
    </HStack>
        )
}

export default Social
