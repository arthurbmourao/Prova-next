import Image from "next/image";
import BotaoLink from "./BotaoLink";
import Link from "next/link";

export default function Header(){

    return(
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <Link
                    href={"/"}
                >   <Image
                    className="h-8 w-auto"
                    src='/logo-weg.png'
                    alt="Logo da WEG"
                    width={50}
                    height={50}
                    />
                    <span className="text-sm font-bold text-weg-dark">Academy</span>
                </Link>
              <a href="./index.html" className="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                <Image
                    className="h-8 w-auto"
                    src='/logo-weg.png'
                    alt="Logo da WEG"
                    width={50}
                    height={50}
                />
                
                <span className="text-sm font-bold text-weg-dark">Academy</span>
              </a>

              <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                <BotaoLink
                 link={"/"} 
                 placeholder={"Cursos"}
                />
                <BotaoLink
                 link={"/sobre"} 
                 placeholder={"Sobre a Weg"}
                />
              </nav>
            </div>
        </header>
    );
}