import Navbar from "@/components/main-nav"
import Divider from "@/components/ui/divider"
import Hero from "@/components/ui/hero"
import ItemsDivider from "@/components/ui/items-divider"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Divider />
      <ItemsDivider />
    </main>
  )
}
