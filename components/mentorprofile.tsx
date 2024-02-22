import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Profile = () => {
    return (
        <div>
            <div>
                <div className=" pl-9 pt-4 px-12">
                    <Link href="/homepage">
                        <IoIosArrowBack
                            className=" bg-slate-200 hover:bg-slate-400"
                            size={40}
                        />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-2 px-10">
                <h1 className="w-[150px] font-bold text-xl md:w-[300px] md:text-4xl">
                    Setup Mentor Profile
                </h1>
            </div>
            <div className=" p-3">
                <div className=" p-4">
                    <Input placeholder="Expertise" className="" />
                </div>
                <div className="p-4">
                    <Input placeholder="Industry" />
                </div>
                <div className="p-4">
                    <Input placeholder="Tech/None/Tech" />
                </div>
            </div>
            <div className="m-2 flex justify-center ">
                <Link href="/profiledescription">
                    <Button className=" text-center w-[280px] md:w-[700px] lg:w-[1000px]">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
