// import Header from "@/components/Header";
// import MainSection from "@/components/MainSection";
// import Services from "@/components/Services";
// import ImageSection from "@/components/ImageSection";

// export default function Home() {
//   return (
//     <div className="bg-gray-950 h-svh">
//       <Header />
//       <MainSection />
//       <Services />
//       <ImageSection/>
//     </div>
//   );
// }

import Card from "@/components/card"

export default function Home() {
  return (
    <div className="flex bg-blue-950 text-white min-h-screen gap-6 items-center justify-center">
      <Card text="View Recipes using Next.js Server Component" link="/way1" />
      <Card text="View Recipes using Next.js Client Component useEffect Method" link="/week8" />
      <Card text="View Recipes using Next.js Server Component SWR Method" link="/way3" />
    </div>
  )
}
