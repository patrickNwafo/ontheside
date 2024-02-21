import Image from "next/image";
import { Button } from "./ui/button";

const HomePage = () => {
    return (
        <div className=" flex items-center justify-center">
            <div className="">
                <div className="m-2 pl-12 pt-12 ">
                    <Image
                        src="https://images.unsplash.com/photo-1708312609221-4d67cb8a6c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                        alt="img"
                        width={150}
                        height={150}
                        className=" w-32 h-32 md:w-52 md:h-52 rounded-full"
                    />
                </div>
                <div className="pt-4 justify-center">
                    <div className=" md:pl-8">
                        <h2 className="m-2 font-semibold text-xl  pl-4">
                            Ebuka Itanyi (4.8★)
                        </h2>
                        <p className="m-2 text-[12px] text-center md:pr-14">
                            CEO of On The Side
                        </p>
                    </div>
                </div>

                <div className="pt-5 pb-6 m-2">
                    <div className=" ">
                        <Button
                            className=" w-56 md:w-[300px]"
                            variant="outline"
                        >
                            Edit Profile
                        </Button>
                    </div>
                    <div className="pt-2">
                        <Button
                            className=" w-56 md:w-[300px]"
                            variant="outline"
                        >
                            Set Availability
                        </Button>
                    </div>
                    <div className="pt-2">
                        <Button
                            className=" w-56 md:w-[300px]"
                            variant="outline"
                        >
                            My Mentee
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
