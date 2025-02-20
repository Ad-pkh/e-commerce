import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { Contact } from "../components/contact/contact";
import CategoryDetail from "../pages/category/category-detail.page";
import LandingPage from "../pages/landing";
import AdminPageLayout from "../pages/layout/cms.layout";
import HomePageLayout from "../pages/layout/home.page";
import Allproduct from "../pages/products/products";

import { useEffect, useState } from "react";
import AuthContext from "../context/auth.context";
import { LoginPage, RegisterPage, UserActivation } from "../pages/auth";
import authSvc from "../pages/auth/register/auth.service";
import { AdminDashboard } from "../pages/dashboard";
import CheckPermissions from "./rbac.config";
import { UserRoleValue } from "./constant.config";
import Errorpage from "../components/common/error/error.comonent";

const RouterConfig = () => {
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState(true);
    const getLoggedInUser = async () => {
        try {
            const response = await authSvc.getRequest("/auth/me", { auth: true });
            setLoggedInUser(response.result);
            // console.log(response);
        } catch (exception) {
            console.log(exception);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            //logged in user
            getLoggedInUser();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <>
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
                        <ToastContainer />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<HomePageLayout />}>
                                    <Route index element={<LandingPage />} />
                                    <Route path="register" element={<RegisterPage />} />
                                    <Route
                                        path="activate/:token"
                                        element={<UserActivation />}
                                    ></Route>
                                    <Route path="login" element={<LoginPage />} />
                                    <Route path="category/:slug" element={<CategoryDetail />} />
                                    <Route path="products" element={<Allproduct />} />
                                    <Route path="contact" element={<Contact />} />
                                    <Route path="about" element={<>About</>} />

                                    <Route path="*" element={<Errorpage url="/" label="homepage"  />} />
                                </Route>
                                {/* need to dbug here  allowed by type binding*/}
                                <Route
                                    path="/admin"
                                    element={
                                        <CheckPermissions
                                            user={loggedInUser}
                                            allowedby={UserRoleValue.ADMIN}
                                        >
                                            <AdminPageLayout />
                                        </CheckPermissions>
                                    }
                                >
                                        <Route index element={<AdminDashboard />}></Route>
                                        <Route path="*" element={<Errorpage url="/admin" label="Dashboard"/>} />

                                </Route>

                                <Route
                                    path="/seller"
                                    element={
                                        <CheckPermissions
                                            user={loggedInUser}
                                            allowedby={UserRoleValue.SELLER}
                                        >
                                            <>
                                                seller component
                                                <Outlet />
                                            </>
                                        </CheckPermissions>
                                    }
                                >
                                    <Route index element={<>Seller Dashboard</>}></Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </AuthContext.Provider>
                </>
            )}
        </>
    );
};
export default RouterConfig;
