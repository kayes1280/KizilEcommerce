import FirstNav from "./firstNav.tsx";
import SecondNav from "./secondNav.tsx";

export default function Navbar() {
    return (
        <section className="border-b border-gray-200">
            <FirstNav />
            <SecondNav />
        </section>
    );
}