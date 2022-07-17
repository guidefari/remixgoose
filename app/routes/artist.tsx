import { Outlet } from "@remix-run/react"

export default function Artist() {
  return (
    <div className="prose min-w-screen lg:prose-xl">
      <Outlet />
    </div>
  )
}
