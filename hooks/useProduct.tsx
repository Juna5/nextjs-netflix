import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Product } from "../typings";

export default function useProduct() {
    const [products, setProducts] = useState<DocumentData[] | Product[]>([]);

    useEffect(() => {
        return onSnapshot(collection(db, "Product"), (snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        });
    }, [db]);

    return products;
}
