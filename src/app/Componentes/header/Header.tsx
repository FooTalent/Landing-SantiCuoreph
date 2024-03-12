import Link from "next/link";
import CameraLogo from "./CameraLogo";
import InstagramLogo from "./InstagramLogo";
import TextLogo from "./TextLogo";

const navLinks = [
    { name: "Servicios", href: "/servicios"},
    { name: "Sobre mí", href: "/sobre-mi"},
    { name: "Contacto", href: "/contacto"}
]

const Header = () => {
    return (
        <header className="bg-fondoNegro">
            <nav className="2xl:container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 grow">
                    <CameraLogo />
                    <TextLogo />
                </Link>
                <ul className="flex justify-between text-white grow">
                    {
                        navLinks.map((link) => {
                            return (
                                <li className="hover:text-principalHover">
                                    <Link href={link.href} key={link.name}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })
                    }
                    
                </ul>
                <div className="flex grow justify-end">
                <InstagramLogo size={32} />
                </div>
            </nav>
        </header>
    );
};

export default Header;