import { useLoaderData } from "@remix-run/react"
import { getMdxDirFrontmatter } from "~/utils/mdx.server"

export const loader = () => {
  return getMdxDirFrontmatter("artist")
}

function Artists() {
  const artists = useLoaderData()
  console.log("artists:", artists)

  return <div>All Artists</div>
}

export default Artists
