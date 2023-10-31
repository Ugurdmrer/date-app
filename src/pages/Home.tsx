import HomepageCard from "../components/HomepageCard"
import CardImage1 from "../assets/homepage-card1.jpg"
import CardImage2 from "../assets/homepage-card2.jpg"

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
            <HomepageCard title="title1" description="description1" image={CardImage1}/>
            <HomepageCard title="title2" description="description2" image={CardImage2}/>
            <HomepageCard title="title3" description="description3" image={CardImage1}/>
        </div>
        <>
            <div className="flex flex-col items-center md:flex-row gap-5">
              <div className="basis-2/4">
                <img style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px'
            }} src="/src/assets/homepage-image.jpg" alt="image" />
              </div>
              <div className="basis-2/4 justify-between flex flex-col gap-4">
                <h1 className="text-6xl font-bold text-dark uppercase mb-4 text-center">About Dates</h1>
                <span className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus incidunt facere? Tempore tenetur adipisci ipsa doloribus cum, magni reprehenderit corrupti velit placeat perferendis dolorem quaerat excepturi ipsam perspiciatis nemo dolorum, repudiandae deleniti eum repellat? Reiciendis ab pariatur quis? Nesciunt dolore reprehenderit laboriosam nisi maiores similique, repudiandae ipsum explicabo tempore.
                </span>
              </div>
            </div>
        </>
      </div>
    </>
  )
}

