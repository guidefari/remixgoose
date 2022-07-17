import { useLoaderData } from "@remix-run/react"
import { ArtifactHero } from "~/components/common/ArtifactHero"
import { MinimalCard } from "~/components/common/MinimalCard"
import { getMdxDirFrontmatter } from "~/utils/mdx.server"

export const loader = () => {
  return getMdxDirFrontmatter("artist")
}

function Artists() {
  const artists = useLoaderData()
  console.log("artists:", artists)

  return (
    <div>
      <ArtifactHero
        title="Curated Artists"
        description="The Home of all artists I think are worth giving a look for one reason or another. Each artist likely has a story behind how they got here, feel free to reach out and ask me why"
      />
      <section className="grid grid-cols-1 gap-12 lg:px-16 lg:gap-24 lg:grid-cols-2">
        {artists.map(artist => (
          <MinimalCard
            blurb={artist.meta.description}
            title={artist.meta.title}
            key={artist.slug}
            slug={artist.slug}
            imageUrl={
              artist.imageUrl ||
              "https://res.cloudinary.com/hokaspokas/image/upload/v1658044917/goosebumpsfm/generic_xvsrwv.svg"
            }
          />
        ))}
      </section>
    </div>
  )
}

export default Artists
