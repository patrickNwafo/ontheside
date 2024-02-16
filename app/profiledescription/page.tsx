import Container from "@/components/Container";
import Logo from "@/components/logo";
import ProfileDescription from "@/components/profileDescription";

const PageDescription = () => {
    return (
        <div>
            <div>
                <Logo />
            </div>
            <Container>
                <ProfileDescription />
            </Container>
        </div>
    );
};

export default PageDescription;
