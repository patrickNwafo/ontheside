import NavBar from "@/components/nav-bar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body
                className={`${poppins.className}
            text-slate-700`}
            >
                <div className="flex flex-col min-h-screen">
                    <NavBar />
                    <main className="flex-grow bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 to-pink-100">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
};

export default HomeLayout;
