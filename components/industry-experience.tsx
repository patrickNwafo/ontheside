import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const IndustryExperience = () => {
    return (
        <div>
            <div>
                <div className=" pt-12 px-12">
                    <Link href="/educationdetails">
                        <IoIosArrowBack size={40} />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-3 px-14">
                <h1 className="text-[50px]">Industry Experience</h1>
            </div>
            <div className=" border-3 rounded-2xl shadow-md px-[30px] m-[20px]">
                <div className=" px-[30px]">
                    <form action="submit">
                        <div className="py-4">
                            <Input placeholder="Company" />
                        </div>
                        <div className="py-4">
                            <Input placeholder="Position" />
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
                <div className="px-10 ">
                    <Button
                        className=" w-full border-dotted border-4 h-20"
                        variant="outline"
                    >
                        + Add More Experience
                    </Button>
                </div>
            </div>
            <div className="m-8">
                <Link href="/industryexperience">
                    <Button className="w-[290px] md:w-full">Next</Button>
                </Link>
            </div>
        </div>
    );
};

export default IndustryExperience;
