import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { Contact } from "../components/contact/contact";
import CategoryDetail from "../pages/category/category-detail.page";
import LandingPage from "../pages/landing";
import AdminPageLayout from "../pages/layout/cms.layout";
import HomePageLayout from "../pages/layout/home.page";
import Allproduct from "../pages/products/products";

import { LoginPage, RegisterPage, UserActivation } from "../pages/auth";
import AuthContext from "../context/auth.context";
import { useEffect, useState } from "react";
import authSvc from "../pages/auth/register/auth.service";

const RouterConfig = () => {
    const [loggedInUser, setLoggedInUser] = useState();

    const getLoggedInUser = async () => {
        try {
            const response = await authSvc.getRequest("/auth/me", { auth: true })
            setLoggedInUser(response.result)
            console.log(response);
        } catch (exception) {
            console.log(exception);

        }
    }
    useEffect(() => {
        //logged in user 
        getLoggedInUser()
    }, [])
    
    return (<>
        <AuthContext.Provider value={loggedInUser}>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePageLayout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="activate/:token" element={<UserActivation />}></Route>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="category/:slug" element={<CategoryDetail />} />
                        <Route path="products" element={<Allproduct />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<>About</>} />

                        <Route path="*" element={<>Page Not Found</>} />

                    </Route>
                    <Route path="/admin" element={<AdminPageLayout />}>

                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    </>)
}
export default RouterConfig;