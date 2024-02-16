import Image from "next/image";
import Img from "@/images/logos/img1.jpeg";
import Container from "./Container";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <Link href="/homepage">
                        <Image
                            src={Img}
                            alt="logo"
                            width={100}
                            height={100}
                            className=" w-12 rounded-full"
                        />
                    </Link>
                </Container>
            </div>
        </div>
    );
};

export default Logo;
