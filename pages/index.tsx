import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from "../utils/requests";
import { Movie, Product } from "../typings";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Plans from "../components/Plans";
import useSubscription from "../hooks/useSubscription";
import { db } from "../firebash";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
    const dbInstance = collection(db, "Product");
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
        products,
    ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
        getDocs(dbInstance).then((data) => {
            data.docs.map((item) => json({ ...item.data(), id: item.id }));
        }),
    ]);

    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
            // products: getNotes,
        },
    };
}
interface Props {
    netflixOriginals: Movie[];
    trendingNow: Movie[];
    topRated: Movie[];
    actionMovies: Movie[];
    comedyMovies: Movie[];
    horrorMovies: Movie[];
    romanceMovies: Movie[];
    documentaries: Movie[];
    products: Product[];
}

export default function Home({
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
}: // products,
Props) {
    const { loading, user } = useAuth();
    const showModal = useRecoilValue(modalState);
    const subscription = false;
    const [products, setProducts] = useState<any>([]);

    // const dbInstance = collection(db, "Product");
    // const getNotes = () => {
    //     getDocs(dbInstance).then((data) => {
    //         setProducts(
    //             data.docs.map((item) => {
    //                 return { ...item.data(), id: item.id };
    //             })
    //         );
    //     });
    // };

    useEffect(() => {
        getNotes();
    }, []);
    if (loading || subscription === null) return null;
    if (!subscription) return <Plans products={products} />;
    return (
        <div
            className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
                showModal && "!h-screen overflow-hidden"
            }`}
        >
            <Head>
                <title>Home - Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
                <Banner netflixOriginals={netflixOriginals} />
                <section className="md:space-y-24">
                    <Row title="Trending Now" movies={trendingNow} />
                    <Row title="Top Rated" movies={topRated} />
                    <Row title="Action Movies" movies={actionMovies} />
                    <Row title="Comedy Movies" movies={comedyMovies} />
                    <Row title="Horror Movies" movies={horrorMovies} />
                    <Row title="Romance Movies" movies={romanceMovies} />
                    <Row title="Documentar Movies" movies={documentaries} />
                </section>
            </main>
            {showModal && <Modal />}
        </div>
    );
}
