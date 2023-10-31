
export default function HomepageCard(props : {title: string, description: string}) {
    const {title, description} = props
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className="relative">
                <img className="relative" src="/src/assets/homepage-image.jpg" alt="image" />
                <div className="absolute top-20 left-20 ">
                    <h1 className="text-6xl font-bold text-white uppercase">{title}</h1>
                    <h2 className="text-2xl font-semibold text-white uppercase">{title}</h2>
                    <span className="text-xl text-white ">{description}</span>
                </div>
            </div>
        </div>
    </div>
  )
}