import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";

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
                        <div className="hidden md:flex">
                            <Input placeholder="Search for?" />
                            <Button>
                                <FaSearch />
                            </Button>
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
