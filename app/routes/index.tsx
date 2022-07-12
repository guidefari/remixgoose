import { Link } from "@remix-run/react"

export default function Index() {
  return (
    <article className="prose-xl">
      <h1>Artists</h1>
      <ul>
        <li>
          <Link to="/artist/barcode">Barcode</Link>
        </li>
        <li>
          <Link to="/artist/dmonk">D'Monk</Link>
        </li>
      </ul>
    </article>
  )
}
