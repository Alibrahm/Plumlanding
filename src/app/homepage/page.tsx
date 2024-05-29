import LandingSectionOne from "../components/landingSections/section1"
import LandingSectionTwo from "../components/landingSections/section2"
import LandingSectionThree from "../components/landingSections/section3"
import LandingSectionFeatures from "../components/landingSections/section4"
export default function Home() {
  return (
    <main className="flex min-h-screen font-flow-circular bg-white flex-col items-center justify-between  scroll">
        <LandingSectionOne/>
        <LandingSectionTwo/>
        <LandingSectionThree/>
        <LandingSectionFeatures/>
    </main>
  );
}
