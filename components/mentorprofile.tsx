import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Profile = () => {
    return (
        <div>
            <div>
                <div className=" pt-12 px-12">
                    <Link href="/homepage">
                        <IoIosArrowBack size={40} />{" "}
                    </Link>
                </div>
            </div>
            <div className=" pt-3 px-14">
                <h1 className="text-[50px]">Setup Mentor Profile</h1>
            </div>
            <div className=" p-10">
                <div className=" pt-6">
                    <Input placeholder="Expertise" className="" />
                </div>
                <div className="pt-6">
                    <Input placeholder="Industry" />
                </div>
                <div className="pt-6">
                    <Input placeholder="Tech/None/Tech" />
                </div>
            </div>
            <div className="m-8">
                <Link href="/profiledescription">
                    <Button className="w-[300px] items-center md:w-full">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
