import FirstNav from "./firstNav";
import SecondNav from "./secondNav";

export default function Navbar() {
    return (
        <section className="border-b border-gray-200">
            <FirstNav />
            <SecondNav />
        </section>
    );
}