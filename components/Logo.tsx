"use client";

import LogoImage from "@logos/img1.jpeg";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
function Logo() {
    return (
        // <Link href="/" prefetch={false} className="overflow-hidden">
        //     <div className="flex items-center w-16 h-5 pt-10 pl-4">
        //         <AspectRatio
        //             ratio={16 / 9}
        //             className="flex items-center justify-center"
        //         >
        //             <Image
        //                 priority
        //                 src={LogoImage}
        //                 alt="logo"
        //                 className="dark:filter dark:invert"
        //             />

        //             <ul className="flex">
        //                 <li className="">
        //                     <Link href="#">Login</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="#">Sign Up</Link>
        //                 </li>
        //             </ul>
        //         </AspectRatio>
        //     </div>
        // </Link>
        <header className="py-10 absolute w-full z-[3]">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <div>
                    <Link href="/">
                        <Image
                            priority
                            src={LogoImage}
                            alt="logo"
                            className="dark:filter dark:invert rounded-full w-20 h-20"
                        />
                    </Link>
                </div>
                <div className="flex">
                    <ul role="list" className="hidden md:flex space-x-8">
                        <li>
                            <Link href="#">Login</Link>
                        </li>
                        <li>
                            <Link href="#">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Logo;
