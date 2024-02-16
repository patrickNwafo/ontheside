import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
    return (
        <div
            className="
    sticky top-0 w-full bg-slate-200 z-30 shadow-sm"
        >
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/">
                            <Image
                                src={Logo}
                                width={100}
                                height={100}
                                alt="logo"
                                className="rounded-full w-12"
                            />
                        </Link>
                       
                        <div className="hidden md:flex relative">
                            <input
                                type="text"
                                name="username"
                                className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 h-10 md:w-[600px] md:h-[40px] text-2xl"
                                placeholder="What sector are you operating in?"
                            />

                            <IoSearch
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={30}
                            />
                        </div>

                        <div className="flex items-center gap-8 md:gap-12">
                            <div>My Profile</div>
                            <div>My Mentees</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;
