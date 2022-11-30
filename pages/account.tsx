import Head from "next/head";
import Link from "next/link";
import Membership from "../components/Membership";
import useAuth from "../hooks/useAuth";

export default function Account() {
    const { logout } = useAuth();
    const today = Date.now();

    const date = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(today);

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
            <main className="mx-5 md:mx-auto max-w-6xl pt-24 pb-12 transition-all md:px-10">
                <div className="flex flex-col gap-4 md:flex-row">
                    <h1 className="text-3xl md:text-4xl">Account</h1>
                    <div className="flex -ml-0.5 items-center gap-x-1.5">
                        <img
                            src="https://rb.gy/4vfk4r"
                            alt="play"
                            className="w-7 h-7"
                        />
                        <p className="text-xs font-semibold text-[#555]">
                            Member Since {date}
                        </p>
                    </div>
                </div>
                <Membership date={date} />
                <div className="mt-6 grid grid-cols-1 gap-x4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-b-0 md:px-0 md:pb-0">
                    <h4 className="text-lg text-[gray]">Plan Details</h4>
                    <div className="col-span-2 font-medium">Basic</div>
                    <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
                        Change Plan
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-b-0 md:px-0 md:pb-0">
                    <h4 className="text-lg text-[gray]">Settings</h4>
                    <p
                        className="cursor-pointer col-span-3 text-blue-500 hover:underline md:text-right"
                        onClick={logout}
                    >
                        Sign out of all devices
                    </p>
                </div>
            </main>
        </div>
    );
}
