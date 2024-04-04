import { ComponentProps } from "react"

//herdando uma propriedade de um elemento nativo do html / extends == herança
interface NavLinkProps extends ComponentProps<"a"> {
    children: string
} 
//para receber um conteudo de um componente e usar sendo qualquer texto, se usa props.children
export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className="font-medium text-sm">
            {props.children}    
        </a>
    )
}