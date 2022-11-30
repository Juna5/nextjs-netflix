import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

interface Props {
    date: String;
}
export default function Membership({ date }: Props) {
    const [loader, setLoader] = useState(false);
    const { user } = useAuth();
    const cancelAt = true;
    const cancel = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    };
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
            <div className="space-y-2 py-4">
                <h4 className="text-lg text-[gray]">Membership & Billing</h4>
                <button
                    className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
                    onClick={cancel}
                >
                    {loader ? (
                        <Loader color="fill-[#e50914]" />
                    ) : (
                        "Cancel Membersip"
                    )}
                </button>
            </div>
            <div className="col-span-3">
                <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
                    <div className="">
                        <p className="font-medium">{user?.email}</p>
                        <p className="text-[gray]">Password: *********</p>
                    </div>
                    <div className="md:text-right">
                        <p className="membership-link">Change Email</p>
                        <p className="membership-link">Change Password</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0">
                    <div>
                        <p>
                            {cancelAt
                                ? "Your membership will end on "
                                : "Your next billing date is "}
                            {date}
                        </p>
                    </div>
                    <div className="md:text-right">
                        <p className="membership-link">Manage payment info</p>
                        <p className="membership-link">
                            Add backup payment method
                        </p>
                        <p className="membership-link">Billing Details</p>
                        <p className="membership-link">Change billing day</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
