import Image from "next/image";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5">
            <Header />
            <MainGrid />
        </main>
    );
}
