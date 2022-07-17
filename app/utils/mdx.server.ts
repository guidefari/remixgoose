import path from "path"
import { readdir, readFile } from "fs/promises"
import matter from "gray-matter"

const pathToMarkdownStuffs = path.join(__dirname, "..", "app", "routes")

export async function getMdxDirList(contentDir: string) {
  const stitchedTogetherPath = path.join(pathToMarkdownStuffs, contentDir)
  const filenames = await readdir(stitchedTogetherPath)
  const mdxFilteredFilenames = filenames.filter(name => name.match(/\.mdx?$/))

  return mdxFilteredFilenames
}

export async function getMdxDirFrontmatter(contentDir: string) {
  const markdownList = await getMdxDirList(contentDir)

  return Promise.all(
    markdownList.map(async filename => {
      const stitchedTogetherPath = path.join(
        pathToMarkdownStuffs,
        contentDir,
        filename
      )

      const file = await readFile(stitchedTogetherPath.toString())
      const { data: frontmatter } = matter(file)

      return { ...frontmatter, slug: filename.replace(/\.mdx?$/, "") }
    })
  )
}