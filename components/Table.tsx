import { Product } from "../typings";

interface Props {
    products: Product[];
    selectedPlan: Product;
}

function Table({ products, selectedPlan }: Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="table-row">
                    <td className="table-data-title">Monthly price</td>
                    {products.map((product) => (
                        <td
                            key={product.id}
                            className={`table-data-feature ${
                                selectedPlan.id === product.id
                                    ? "text-[#e50914]"
                                    : "text-[gray]"
                            }`}
                        >
                            IDR. {product.price}K
                        </td>
                    ))}
                </tr>
                <tr className="table-row">
                    <td className="table-data-title">Video quality</td>
                    {products.map((product) => (
                        <td
                            key={product.id}
                            className={`table-data-feature ${
                                selectedPlan.id === product.id
                                    ? "text-[#e50914]"
                                    : "text-[gray]"
                            }`}
                        >
                            {product.quality}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
