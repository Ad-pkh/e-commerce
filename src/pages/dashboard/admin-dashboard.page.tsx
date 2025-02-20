import { Card } from "flowbite-react";
import { HiUserGroup } from "react-icons/hi";
import { HiBuildingStorefront, HiCurrencyDollar, HiShoppingCart } from "react-icons/hi2";

const AdminDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
                <div
                    className="  border-gray-300 rounded-lg dark:border-gray-600   "
                >
                    <Card href="/admin/user-list" className="  max-w-sm bg-teal-500  hover:bg-yellow-200 ">
                        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white  ">
                            <HiUserGroup />
                            Total Customer
                        </h5>
                        <p className="font-normal text-white dark:text-white" >
                            15000
                        </p>
                    </Card>

                </div>
                <div
                    className=" rounded-lg border-gray-300 dark:border-gray-600"
                >
                    <Card href="/admin/user-list" className="  max-w-sm bg-teal-500  ">
                        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white ">
                            <HiBuildingStorefront />
                            Total Shops
                        </h5>
                        <p className="font-normal text-white dark:text-white" >
                            15000
                        </p>
                    </Card>
                </div>
                <div
                    className=" rounded-lg border-gray-300 dark:border-gray-600"
                >
                    <Card href="/admin/user-list" className="  max-w-sm bg-teal-500  ">
                        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white ">
                            <HiCurrencyDollar />
                            Revenue
                        </h5>
                        <p className="font-normal text-white dark:text-white" >
                            15000
                        </p>
                    </Card>
                </div>
                <div
                    className=" rounded-lg border-gray-300 dark:border-gray-600 "
                >
                    <Card href="/admin/user-list" className="  max-w-sm bg-teal-500  ">
                        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white  ">
                            <HiShoppingCart />
                            Total Order
                        </h5>
                        <p className="font-normal text-white dark:text-white" >
                            15000
                        </p>
                    </Card>
                </div>
            </div>
            <div
                className=" rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
            ></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
            </div>
            <div
                className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
            ></div>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
            </div>
        </>
    );
}

export default AdminDashboard;