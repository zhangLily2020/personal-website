// This is the card that displays the project

// eslint-disable-next-line react/prop-types
const Card = ({image, title, subtitle, link}) => {
    return (
        <a href={link} className="m-4 block max-w-80 overflow-hidden rounded-3xl outline outline-4 outline-offset-8 outline-slate-300">
            <div className="relative ">
                {/* <div className="m-5"> */}
                    <img className="w-full rounded-lg" src = {image} alt={title} />
                    <div className="flex flex-col justify-between p-4 text-white">
                        <h2 className="mb-2 text-2xl font-bold">
                            {title}
                        </h2>
                        <p className="mb-4 text-sm font-medium">{subtitle}</p>
                    </div>
                {/* </div> */}
            </div>
        </a>
    )
}

export default Card