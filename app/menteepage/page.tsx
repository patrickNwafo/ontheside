import Container from "@/components/Container";
import MenteePage from "@/components/mentee-button";
import NavBar from "@/components/nav-bar";

export default function Home() {
    return (
        <div className="p-8">
            <Container>
                <div>
                    <MenteePage />
                </div>
            </Container>
        </div>
    );
}
