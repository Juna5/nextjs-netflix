import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useSubscription(user: User | null) {
    const [subscription, setSubscription] = useState(1);

    useEffect(() => {
        if (!user) return;
        // setSubscription();
    });
    return subscription;
}
