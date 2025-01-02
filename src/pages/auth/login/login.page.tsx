import { NavLink, useNavigate } from "react-router-dom";
import { InputLabel, TextInputComponent } from "../../../components/common/form/input.component";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authSvc from "../register/auth.service";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const LoginDTO = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required()
  })
  let [loading, setLoading] = useState(false)

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(LoginDTO)
  })

  const navigate = useNavigate()
  
  const getLoggedInUser = async () => { 
    try {
      const response =await authSvc.getRequest("/auth/me",{auth:true})
      //console.log(response);
      toast.info("You are already logged in");
      navigate("/"+response.result.role)  

    } catch (exception) {
      console.log(exception);
      
    }
  }
  useEffect(() => { 
    //login check
    const token=localStorage.getItem("token") || null
    if (token) {
      //logged in user 
      getLoggedInUser()
      //validate token
    }
    
  }, [])

  const login = async (data: any) => {
    try {
      setLoading(true)
      const response:any= await authSvc.postRequest("/auth/login", data)
      //console.log(response);
      //console.log(data);
      
      //storage
      localStorage.setItem("token", response.result.token);
      localStorage.setItem("refresh_token", response.result.refreshToken);
      
      toast.success(`Welcome ${response.result.userdetails.role} - ${response.result.userdetails.name}`)
      navigate("/"+response.result.userdetails.role)


    } catch (exception: any) {
      console.log(exception);
      
      toast.error(exception.data.message)

    } finally {
      setLoading(false)
    }
  }
 
 
  return (<>
    <div className="grid text-center justify-center mt-4" >
      <h1 >Login </h1>

    </div>
    <section className="flex flex-col items-center justify-center min-h-screen " >

      <div className="max-w-xl lg:max-w-3xl">
        <form onSubmit={handleSubmit(login)} className=" items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-teal-200">

          <div className=" grid-cols-3 mb-2 block  text-black">
            <InputLabel htmlFor="email">Username:</InputLabel>
            <TextInputComponent
              name="email"
              type="email"
              control={control}
              errMsg={errors?.email?.message as string}
            />

          </div>
          <div className="mb-2 block  text-black">
            <InputLabel htmlFor="password">Password:</InputLabel>
            <TextInputComponent
              name="password"
              type="password"
              control={control}
              errMsg={errors?.password?.message as string}
            />

          </div>

          <div className=" grid-cols-3 mb-2 block  text-black">
            <NavLink className={'text-gray-600 text-sm hover:text-teal-600'} to={"/forget-password"} >Forgot password?</NavLink>
          </div>
          <div>
            <Button type="submit" disabled={loading} className="bg-teal-900 w-full">Login</Button>
          </div>
          <h3 className="text-center justify-center mt-2">OR</h3>
          <div className="flex item-center justify-center">
            <NavLink to="/google" className="p-3   m-2"> <FaGoogle /> </NavLink>
            <NavLink to="/facebook" className="p-3 m-2"> <FaFacebookF /></NavLink>

          </div>
        </form>

      </div>

    </section>
  </>);
}
export default LoginPage;