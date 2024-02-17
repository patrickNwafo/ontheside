import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";

const ProfileDescription = () => {
    return (
        <div>
            <div>
                <div className=" pt-12 px-12">
                    <Link href="/mentorprofile">
                        <IoIosArrowBack size={40} />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-3 px-14">
                <h1 className="text-[50px]">Profile Description</h1>
            </div>
            <div>
                <div className=" p-10">
                    <textarea
                        id="message"
                        name="message"
                        rows={10}
                        className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        placeholder="I am"
                    ></textarea>
                </div>
            </div>
            <div className="m-8">
                <Link href="/educationdetails">
                    <Button className="w-[300px] items-center md:w-full">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileDescription;
