import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"
import { IconButon } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

dayjs.extend(relativeTime)
dayjs.locale("pt-br")

export function AttendeeList() {
    //exemplo de uso de estado - para usar toda vez que quiser ver a mudança de de uma variável em tempo real
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    const TotalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }

    function goToLastPage() {
        setPage(TotalPages)
    }

    function goToFirstPage() {
        setPage(1)
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
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
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
                            <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                            <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
                            Mostrando 10 de {attendees.length} itens
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página {page} de {TotalPages} </span>

                                <div className="flex gap-1.5">
                                    <IconButon onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4"/>
                                    </IconButon>
                                    <IconButon onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4"/>
                                    </IconButon>
                                    <IconButon onClick={goToNextPage} disabled={page === TotalPages}>
                                        <ChevronRight className="size-4"/>
                                    </IconButon>
                                    <IconButon onClick={goToLastPage} disabled={page === TotalPages}>
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