import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-content bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 to-pink-100">
            <div className="flex flex-col justify-center items-center h-screen space-y-6">
                <Image
                    src={Logo}
                    alt="logo"
                    width={200}
                    height={200}
                    className="rounded-full drop-shadow-md"
                />
                <div>
                    <LoginButton>
                        <Button variant="secondary" size="lg">
                            Login
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
