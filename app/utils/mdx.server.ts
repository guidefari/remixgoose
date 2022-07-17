import path from "path"
import { readdir } from "fs/promises"

export async function getMdxDirList(contentDir: string) {
  const stitchedTogetherPath = path.join(
    __dirname,
    "..",
    "app",
    "routes",
    contentDir
  )
  const filenames = await readdir(stitchedTogetherPath)

  return filenames
}
