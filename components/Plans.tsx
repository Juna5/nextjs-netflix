import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Product } from "../typings";
import Table from "./Table";

interface Props {
    products: Product[];
}
export default function Plans({ products }: Props) {
    const { logout } = useAuth();
    const [selectedPlan, setSelectedPlan] = useState<Product>(products[2]);
    return (
        <div>
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <header className="border-b border-white/10 bg-[#141414]">
                <Link href={"/"}>
                    <img
                        src="https://rb.gy/ulxxee"
                        alt="Netflix"
                        width={150}
                        height={90}
                        className="cursor-pointer object-contain"
                    />
                </Link>
                <button
                    className="text-lg font-medium hover:underline"
                    onClick={logout}
                >
                    Sign Out
                </button>
            </header>
            <main className="max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
                <h1 className="mb-3">Choose the plan that`s right for you</h1>
                <ul>
                    <li className="flex item-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Wathc all you want. Ad-free.
                    </li>
                    <li className="flex item-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Recommendation just for you.
                    </li>
                    <li className="flex item-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Change or cancel your plan anytime
                    </li>
                </ul>

                <div className="mt-4 flex flex-col space-y-4">
                    <div className="flex w-full items-center justify-center self-end md:w-3/5">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`plan-box ${
                                    selectedPlan?.id === product.id
                                        ? "opacity-100"
                                        : "opacity-60"
                                }`}
                                onClick={() => setSelectedPlan(product)}
                            >
                                {product.name}
                            </div>
                        ))}
                    </div>
                    <Table products={products} selectedPlan={selectedPlan} />
                </div>
            </main>
        </div>
    );
}