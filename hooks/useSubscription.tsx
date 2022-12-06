import { User } from "firebase/auth";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Subscription } from "../typings";

export default function useSubscription(user: User | null) {
    const [subscription, setSubscription] = useState<
        DocumentData | Subscription
    >([]);

    useEffect(() => {
        if (!user) return;
        return onSnapshot(collection(db, "subscribes"), (snapshot) => {
            setSubscription(
                snapshot.docs.filter(
                    (doc) => doc.data().user_id === user?.uid
                )[0]
            );
        });
    });
    return subscription;
}
