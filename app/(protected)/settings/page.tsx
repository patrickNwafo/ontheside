import { auth, signOut } from "@/auth";
import NavBar from "@/components/nav-bar";

const SettingsPage = async () => {
    const session = await auth();
    return (
        <div>
            <NavBar />
            {JSON.stringify(session)}
            <form
                action={async () => {
                    "use server";

                    await signOut();
                }}
            >
                <button type="submit">Sign out</button>{" "}
            </form>
        </div>
    );
};

export default SettingsPage;
