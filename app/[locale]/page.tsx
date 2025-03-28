
import Introduce from "@/components/Introduce"
import Nav from "@/components/Nav"
import Shopping from "@/components/Shopping"
import Ability from "@/components/Ability"
import Advantage from "@/components/Advantage"
import BusinessModel from "@/components/BusinessModel"
export default function Home() {
  return <div>
    <div className="relative overflow-y-auto scrollbar-none">
      <div className="flex left-0 top-0 w-full">
        <Nav></Nav>
      </div>
      <Introduce></Introduce>
      <Shopping></Shopping>
      <Ability></Ability>
      <Advantage></Advantage>
      <BusinessModel></BusinessModel>
    </div>
  </div >
}
