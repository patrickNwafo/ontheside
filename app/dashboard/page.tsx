import Container from "@/components/Container";
import HomePage from "@/components/home";
import NavBar from "@/components/nav-bar";
import AboutPage from "@/components/about";
import ExperiencePage from "@/components/eperiance";

const Dashboard = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Container>
                <HomePage />
            </Container>
            <div>
                <hr className="border-t-1 py-4" />
            </div>
            <Container>
                <AboutPage />
            </Container>
            <Container>
                <ExperiencePage />
            </Container>
        </div>
    );
};

export default Dashboard;
