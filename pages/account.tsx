import Head from "next/head";
import Link from "next/link";

export default function Account() {
    return (
        <div>
            <Head>
                <title>Account Setting - Netflix</title>
                <link rel="icon" href="/icon.ico" />
            </Head>

            <header>
                <Link href={"/"}>
                    <img
                        src="https://rb.gy/ulxxee"
                        alt="logo"
                        width={120}
                        height={120}
                        className="cursor-pointer rounded"
                    />
                </Link>
                <Link href={"/account"}>
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt="asd"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </header>
        </div>
    );
}
