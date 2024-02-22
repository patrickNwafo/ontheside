import Image from "next/image";
import Logo from "@/images/logos/img1.jpeg";

interface HeaderProps {
    label: string;
}

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="w-full flex-col gap-y-4 items-center justify-center">
            <span className=" flex items-center justify-center py-4">
                <Image
                    src={Logo}
                    alt="logo"
                    width={75}
                    height={75}
                    className="rounded-full"
                />
            </span>
            <p className="text-muted-foreground text-sm justify-center items-center flex">
                {label}
            </p>
        </div>
    );
};
