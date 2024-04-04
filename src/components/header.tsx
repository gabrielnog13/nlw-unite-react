// JSX - possibilidade de escrever html diretamente dentro do js - JSX == JavaScript XML
//TSX == TypeScript XML
import nlwUniteIcon from "../assets/nwl-unite-icon.svg"

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon} />

            <nav className="flex itens-center gap-5">
                <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
                <a href="" className="font-medium text-sm">Participantes</a>
            </nav>
        </div>
    )
}