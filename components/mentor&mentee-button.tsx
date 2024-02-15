import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";

const MenteeMentorButton = () => {
    return (
        <div className=" overflow-hidden">
            <div className="flex justify-center items-center py-10 m-10">
                <Link href="#">
                    <Button
                        variant="outline"
                        className="w-40 h-10 md:w-[400px] md-h-[50px text-2xl"
                    >
                        Mentee
                    </Button>
                </Link>
                <Link href="#">
                    <Button
                        variant="outline"
                        className="w-40 h-10 md:w-[400px] md-h-[50px] text-2xl"
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
                <Button className="w-60 h-10 md:w-[800px] md:h-[50px] text-2xl">
                    Become a Mentor
                </Button>
            </div>
            {/* <div className="flex pr-32 flex-col justify-center items-center py-4 m-2 pt-8">
                <h1>Leslie Alexander</h1>
                <p>Experienced Founder</p>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[250px] h-[150px]">
                    <div className="ml-[30%] ">
                        <div className="w-[100%] h-[100%] rounded-full pt-1 pb-1 bg-transparent border border-red-200">
                            <Image
                                src={Logo}
                                alt="img"
                                width={100}
                                height={100}
                                className="rounded-full p-1"
                            />
                            <Image
                                src={Logo}
                                alt="img"
                                width={100}
                                height={100}
                                className="rounded-full p-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pl-32 flex-col justify-center items-center py-4 m-2 pb-8">
                <h1>Leslie Alexander</h1>
                <p>Experienced Founder</p>
            </div> */}
            <section className=" w-full bg-yellow-200 p-4 mt-[100px] flex items-center justify-center">
                <div className="bg-blue-300 p-1 rounded- flex items-center justify-center flex-col gap-2">
                    <Image
                        src={Logo}
                        alt="img"
                        width={100}
                        height={100}
                        className="rounded-full p-1"
                    />
                    <Image
                        src={Logo}
                        alt="img"
                        width={100}
                        height={100}
                        className="rounded-full p-1"
                    />
                </div>
            </section>
        </div>
    );
};

export default MenteeMentorButton;
