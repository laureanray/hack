import { NavHeader } from "../navheader"

type NarrowLayoutProps  = {
  children: React.ReactNode,
}

export function Narrow({ children }: NarrowLayoutProps) {
  return (<>
    <NavHeader/>
    <main className="flex flex-col">
       { children }
    </main>
    </>
  )
}
