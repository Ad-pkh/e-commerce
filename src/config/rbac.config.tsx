import { useContext } from "react"
import { UserRole } from "./constant.config"
import AuthContext from "../context/auth.context"
import { toast } from "react-toastify"
import { Navigate } from "react-router-dom"

type permissionType = {
    allowedby:string ,//UserRole
    children: any,
    user:any
}
const CheckPermissions = ({ user,allowedby, children }: permissionType) => {

    const loggedInUser = useContext(AuthContext)

    //todo: loading 
    //useEffect =loggin user
    if (loggedInUser) {
        
        if (loggedInUser.loggedInUser.role === allowedby) {
            return children
        } else {
            console.log();
            
            toast.warn("You are not authorized to view this page")
            return (<>
                <Navigate to={"/" + loggedInUser.loggedInUser.role} />
            </>)

        }
    } else {
        toast.error("You are not logged in. Please login to view this page");

        return (<>
            <Navigate to="/login" />
        </>)
    }
}
export default CheckPermissions;