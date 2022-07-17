import { useLoaderData } from "@remix-run/react"
import { FeaturedArtists } from "~/components/FrontPage/FeaturedArtists"
import { SuperHero } from "~/components/FrontPage/SuperHero"
import { getMdxDirFrontmatter } from "~/utils/mdx.server"

export const loader = () => {
  return getMdxDirFrontmatter("artist")
}

export default function Index() {
  const artists = useLoaderData()

  return (
    <>
      <SuperHero />
      <FeaturedArtists artists={artists} />
    </>
  )
}
