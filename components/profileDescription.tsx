import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";

const ProfileDescription = () => {
    return (
        <div>
            <div>
                <div className=" pl-9 pt-4 px-12">
                    <Link href="/mentorprofile">
                        <IoIosArrowBack
                            className=" bg-slate-200 hover:bg-slate-400"
                            size={40}
                        />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-2 px-10">
                <h1 className="w-[150px] font-bold text-xl md:w-[300px] md:text-4xl">
                    Profile Description
                </h1>
            </div>
            <div>
                <div className=" p-5  py-3 flex items-center">
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        placeholder="I am"
                    ></textarea>
                </div>
            </div>
            <div className="m-2 flex justify-center">
                <Link href="/educationdetails">
                    <Button className=" text-center w-[280px] md:w-[700px] lg:w-[950px]">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileDescription;
