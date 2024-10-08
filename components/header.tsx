import Link from "next/link";
import Themetoggle from "./theme-toggle";

export default function Header () {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
            <nav className="contianer flex max-w-3xl items-center justify-between">
                <div>
                    <Link href="/" className="font-serif text-2xl font-bold" >
                    HB
                    </Link>
                </div >
                <ul className="flex items-center gap-6 text-sm font-light text-muted-background sm">
                    <li className="transition-colours hover:text-foreground">
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li className="transition-colours hover:text-foreground">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="transition-colours hover:text-foreground">
                        <Link href="/contact">Contact</Link>
                    </li>

                </ul>
                    <div>
                        <Themetoggle/>
                    </div>
            </nav>
        </header>
    )
}