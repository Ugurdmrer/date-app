
export default function HomepageCard(props : {title: string, description: string, image: string}) {
    const {title, description} = props
    const backgroundImage = `url(${props.image})`;
  return (
    <div>
        <div className="flex flex-col items-center">
            <div style={{
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '500px',
                height: '300px',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px'
            }} 
            className="relative ">
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