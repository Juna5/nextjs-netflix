import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constaints/movie";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
interface Props {
    netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

    useEffect(() => {
        setMovie(
            netflixOriginals[
                Math.floor(Math.random() * netflixOriginals.length)
            ]
        );
    }, [netflixOriginals]);

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-x-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image
                    src={`${baseUrl}${
                        movie?.backdrop_path || movie?.poster_path
                    }`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-shadow text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>

            <div className="flex  space-x-3">
                <button className="banner-button bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 pr-1 md:pr-2 " />{" "}
                    Play
                </button>
                <button
                    className="banner-button bg-[gray]/70"
                    onClick={() => {
                        setCurrentMovie(movie);
                        setShowModal(true);
                    }}
                >
                    More Info{" "}
                    <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8 pl-1 md:pl-2" />
                </button>
            </div>
        </div>
    );
}

export default Banner;
