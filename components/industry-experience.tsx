import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const IndustryExperience = () => {
    return (
        <div>
            <div>
                <div className=" pl-9 pt-4 px-12">
                    <Link href="/educationdetails">
                        <IoIosArrowBack
                            className=" bg-slate-200 hover:bg-slate-400"
                            size={40}
                        />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-2 px-10">
                <h1 className="w-[150px] font-bold text-xl md:w-[300px] md:text-4xl">
                    Industry Experience
                </h1>
            </div>
            <div className=" border-3 rounded-2xl shadow-md px-[10px] m-[10px]">
                <div className=" px-[10px]">
                    <form action="submit">
                        <div className="p-2">
                            <Input placeholder="Company" />
                        </div>
                        <div className="p-2">
                            <Input placeholder="Position" />
                        </div>
                        <div className="p-2">
                            <Input placeholder="From Date" />
                        </div>
                        <div className="p-2">
                            <Input placeholder="To Date" />
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <div className="px-10 flex justify-center py-3">
                    <Button
                        className=" border-dotted border-4 h-20 w-[400px] md:w-[700px] lg:w-[950px]"
                        variant="outline"
                    >
                        + Add More Experience
                    </Button>
                </div>
            </div>
            <div className="m-2 flex justify-center py-3">
                <Link href="/finalizingaccount">
                    <Button className=" text-center w-[300px] md:w-[700px] lg:w-[950px]">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default IndustryExperience;
