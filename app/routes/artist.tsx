import { Outlet } from "@remix-run/react"

export default function Posts() {
  return (
    <div className="prose lg:prose-xl min-h-screen bg-green-700">
      <Outlet />
    </div>
  )
}
