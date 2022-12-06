import { CheckIcon } from "@heroicons/react/outline";
import { DocumentData } from "firebase/firestore";
import { Product } from "../typings";

interface Props {
    products: Product[] | DocumentData[];
    selectedPlan: Product | DocumentData | undefined;
}

function Table({ products, selectedPlan }: Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="table-row-plan">
                    <td className="table-data-title">Monthly price</td>
                    {products.map((product) => (
                        <td
                            key={product.id}
                            className={`table-data-feature ${
                                selectedPlan?.id === product.id
                                    ? "text-[#e50914]"
                                    : "text-[gray]"
                            }`}
                        >
                            IDR. {product.price}K
                        </td>
                    ))}
                </tr>
                <tr className="table-row-plan">
                    <td className="table-data-title">Video quality</td>
                    {products.map((product) => (
                        <td
                            key={product.id}
                            className={`table-data-feature ${
                                selectedPlan?.id === product.id
                                    ? "text-[#e50914]"
                                    : "text-[gray]"
                            }`}
                        >
                            {product.quality}
                        </td>
                    ))}
                </tr>
                <tr className="table-row-plan">
                    <td className="table-data-title">
                        Watch on your TV, computer, mobile phone and tablet
                    </td>
                    {products.map((product) => (
                        <td
                            key={product.id}
                            className={`table-data-feature ${
                                selectedPlan?.id === product.id
                                    ? "text-[#e50914]"
                                    : "text-[gray]"
                            }`}
                        >
                            {product.portability === true && (
                                <CheckIcon className="inline-block h-8 w-8" />
                            )}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
