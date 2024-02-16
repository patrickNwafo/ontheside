import Container from "@/components/Container";
import Logo from "@/components/logo";
import Profile from "@/components/mentorprofile";

const MentorProfile = () => {
    return (
        <div>
            <div>
                <Logo />
            </div>
            <Container>
                <Profile />
            </Container>
        </div>
    );
};

export default MentorProfile;
