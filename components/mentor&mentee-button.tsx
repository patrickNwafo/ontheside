import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";

const MenteeMentorButton = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center py-10 m-10">
                <Link href="/menteepage">
                    <Button
                        variant="outline"
                        className="w-40 h-10 md:w-[300px] md-h-[50px] text-2xl"
                    >
                        Mentee
                    </Button>
                </Link>
                <Link href="/homepage">
                    <Button
                        variant="outline"
                        className="w-40 h-10 md:w-[300px] md-h-[50px] text-2xl"
                    >
                        Mentor
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center items-center text-wrap text-[30px] py-8 m-10">
                <h1>
                    Mentor the next generation of founder&apos;s, one step at a
                    time
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link href="/mentorprofile">
                    <Button className="w-30 h-10 md:w-[600px] md:h-[50px] text-2xl">
                        Become a Mentor
                    </Button>
                </Link>
            </div>

            <div className=" w-full p-4 mt-[100px] mb-[100px] flex items-center justify-center">
                <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rotate-[-35deg] relative">
                    <div className="flex flex-col absolute top-[-60px] left-[30px] rotate-[35deg] whitespace-nowrap p-2">
                        <h1 className=" font-semibold">Leslie Alexander</h1>
                        <p className=" text-sm">Experienced Founder</p>
                    </div>
                    <div className="flex flex-col absolute bottom-[-60px] right-[40px] rotate-[35deg] whitespace-nowrap p-2">
                        <h1 className=" font-semibold">Guy Hawkins</h1>
                        <p className=" text-sm">Early-stage founder</p>
                    </div>
                    <div className="py-2 px-1  flex items-center justify-center flex-col gap-6 bg-[#efe7ee] rounded-full">
                        <Image
                            src={Logo}
                            alt="img"
                            width={130}
                            height={130}
                            className="rounded-full p-1"
                        />
                        <Image
                            src={Logo}
                            alt="img"
                            width={130}
                            height={130}
                            className="rounded-full p-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenteeMentorButton;
