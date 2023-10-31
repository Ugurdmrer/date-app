import HomepageCard from "../components/HomepageCard"


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img className="relative" src="/src/assets/homepage-image.jpg" alt="image" />
          <div className="absolute top-20 left-20 ">
            <h1 className="text-6xl font-bold text-white uppercase">Dates</h1>
            <h2 className="text-2xl font-semibold text-white uppercase">A Dating App</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row">
            <HomepageCard/>
            <HomepageCard/>
            <HomepageCard/>
        </div>
      </div>
    </>
  )
}

