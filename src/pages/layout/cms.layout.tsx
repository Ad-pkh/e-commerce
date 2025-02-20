import { Outlet } from "react-router-dom";
import Sidebar from "../../components/cms/sidebar/cms-sidebar.component";

import Adminheader from "../../components/common/header/admin-header.component";

const AdminPageLayout = () => {
    return (<>

        <div className="antialiased  ">
            <Sidebar />


            <Adminheader />


            <main className="p-4 md:ml-64 h-auto pt-20">
                <Outlet />
            </main>
        </div>

    </>)
}

export default AdminPageLayout;