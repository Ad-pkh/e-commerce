import { Pagination, Table } from "flowbite-react";
import { HeadingwithLink } from "../../components/common/title";
import { useEffect, useState } from "react";
import {  RowSkeleton } from "../../components/common/table/table-skeleton.common";

const BannerlistingPage = () => {
    const [pagination, setpagination] = useState({
        currentPage: 1,
        totalPages: 100
    })
    const [banner, setBanner] = useState([]);
    const [loading, setLoading] = useState(true);
    const onPageChange = (page: number) => {
        console.log(page);

        setpagination({
            ...pagination,
            currentPage: page
        })
    }
    const getAllBanners = async () => {
        setLoading(true);
        try {
            //

        } catch (exception) {
            console.log(exception);


        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getAllBanners()
    }, [])


    return (<>

        <div className="overflow-x-auto m-5">
            <HeadingwithLink title="Banner Management" btntxt="Add banner" link="/admin/banner/create" />
        </div>
        <div className="overflow-x-auto">
            <Table>
                <Table.Head >
                    <Table.HeadCell >Title</Table.HeadCell>
                    <Table.HeadCell >status</Table.HeadCell>
                    <Table.HeadCell >image</Table.HeadCell>
                    <Table.HeadCell >link</Table.HeadCell>
                    <Table.HeadCell >start date</Table.HeadCell>
                    <Table.HeadCell >End date</Table.HeadCell>

                    <Table.HeadCell>
                        <span >Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {loading ? <>
                        <RowSkeleton rows={3} cols={7} />

                    </> : <>
                        {
                            banner && banner.length > 0 ? <>
                                {
                                        banner.map((row: any, index: number) => (
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {'Apple MacBook Pro 17"'}
                                            </Table.Cell>
                                            <Table.Cell>Sliver</Table.Cell>
                                            <Table.Cell>Laptop</Table.Cell>
                                            <Table.Cell>$2999</Table.Cell>
                                            <Table.Cell>$2999</Table.Cell>
                    
                                            <Table.Cell>
                                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row> 
                                    ))
                                }
                            </> : <>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                    <Table.Cell colSpan={7} className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                                        No data found
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        }
                    </>}


                 

                </Table.Body>
            </Table>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    </>)
}
export default BannerlistingPage;
