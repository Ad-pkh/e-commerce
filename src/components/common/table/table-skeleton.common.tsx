import { Table } from "flowbite-react"

export const CellSkeleton = () => {
    return (<>
        <Table.Cell >

            <div role="status" className="w-full animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-full m-4"></div>
            </div>
        </Table.Cell>
    </>)
}
export const RowSkeleton = ({ rows, cols }: { rows: number, cols: number }) => {
    return (<>
        {
            [...Array(rows)].map((_, i: number) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                    {
                        [...Array(cols)].map((_, j: number) => (
                            <CellSkeleton key={j} />
                        ))
                    }
                </Table.Row>
            )
            )}
    </>)

}
