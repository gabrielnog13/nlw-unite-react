import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButon } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

export function AttendeeList() {
    //exemplo de uso de estado - para usar toda vez que quiser ver a mudança de de uma variável em tempo real
    const [search, setSearch] = useState("")

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 itens-center ">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>
                {search}
            </div>

            <Table>
                <thead>
                    <tr className="border-b border-white/10"> 
                        <TableHeader style={{ width: 48 }} >
                            <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((attendee) => {
                    return (
                            <TableRow key={attendee.id}>
                            <TableCell>
                                <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " />
                            </TableCell>
                            <TableCell>{attendee.id}</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-white">{attendee.name}</span>
                                    <span>{attendee.email}</span>
                                </div>
                            </TableCell>
                            <TableCell>{attendee.createdAt.toISOString()}</TableCell>
                            <TableCell>{attendee.checkedInAt.toISOString()}</TableCell>
                            <TableCell>
                                <IconButon transparent>
                                    <MoreHorizontal className="size-4" />
                                </IconButon>
                            </TableCell>
                        </TableRow>
                    )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 256 itens
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 27</span>

                                <div className="flex gap-1.5">
                                    <IconButon>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButon>
                                    <IconButon>
                                        <ChevronLeft className="size-4"/>
                                    </IconButon>
                                    <IconButon>
                                        <ChevronRight className="size-4"/>
                                    </IconButon>
                                    <IconButon>
                                        <ChevronsRight className="size-4"/>
                                    </IconButon>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}