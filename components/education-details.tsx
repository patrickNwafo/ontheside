import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EducationDetails = () => {
    return (
        <div>
            <div>
                <div className=" pt-12 px-12">
                    <Link href="/profiledescription">
                        <IoIosArrowBack size={40} />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-3 px-14">
                <h1 className="text-[50px]">Education Details</h1>
            </div>
            <div className=" border-3 rounded-2xl shadow-md p-[10px] m-[20px]">
                <div className=" p-10">
                    <form action="submit">
                        <div className="py-4">
                            <Input placeholder="University /College / Institute" />
                        </div>
                        <div className="py-4">
                            <Input placeholder="Course / Degree" />
                        </div>
                        <div className="py-4">
                            <Input placeholder="From Date" />
                        </div>
                        <div className="py-4">
                            <Input placeholder="To Date" />
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <div className="px-10">
                    <Input
                        placeholder="+ Add Education"
                        className=" h-[60px]"
                    />
                </div>
            </div>
            <div className="m-8">
                <Link href="/educationdetails">
                    <Button className="w-[400px] md:w-full">Next</Button>
                </Link>
            </div>
        </div>
    );
};

export default EducationDetails;
