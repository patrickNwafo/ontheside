import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";

const FinalizingAcc = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 to-pink-100">
            <div className=" bg-slate-100 flex justify-center items-center w-[300px] md:w-[800px] h-[65%] border-2 shadow-md rounded-xl">
                <div className=" flex absolute top-72">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={150}
                        height={150}
                        className=" w-16 rounded-full"
                    />
                </div>
                <div className="absolute top-96">
                    <h1 className="font-semibold">Finalizing Your Account</h1>
                    <p className="text-sm text-center">
                        Please wait for a moment
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinalizingAcc;
