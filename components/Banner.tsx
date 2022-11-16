import Image from "next/image"
import { Movie } from "../typings"
import {baseUrl} from '../constaints/movie'
import { useEffect, useState } from "react"

interface Props {
    netflixOriginals: Movie[]
}
function Banner({netflixOriginals} : Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() =>{
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])
  return (
    <>
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                layout='fill'
                objectFit="cover" 
                alt=""
            />
        </div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{ movie?.overview }</p>
    </>
  )
}

export default Banner