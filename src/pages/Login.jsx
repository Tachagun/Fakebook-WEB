import React, { useEffect, useState } from "react";
import fakePic from "../assets/fakebook.png";
import { FakebookTitle } from "../icons";
import Register from "./Register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/validators";

function Login() {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const [resetForm, setResetForm] = useState(false)

  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2))
  }

  const hdlClose = ()=>{
    setResetForm(prv=>!prv)
  }


  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div className="flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5 border ">
            <div className="text-4xl">
              {/* <FakebookTitle /> */}
              <img src={fakePic} className=" w-1/2" />
            </div>
            <h2 className="text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px]">
              Fakebook helps you connect and share with people in your life
            </h2>
          </div>
          <div className="bg-white flex-1">
            <div className="card  w-full h-[350px] shadow-xl mt-8">
              <form>
                <div className="card-body">
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="E-mail or Phone number"
                  />
                  {...register('identity')}
                  {errors.identity && <p className="text-sm text-error -mt-4">{errors.identity?.message}</p>}
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  {...register('password')}
                  {errors.password && <p className="text-sm text-error -mt-4">{errors.password?.message}</p>}
                  <button onClick={handleSubmit(onSubmit)} className="btn btn-primary text-xl">Login</button>
                  <p className="text-center cursor-pointer opacity-70">
                    Forgot Password?
                  </p>
                  <div className="divider m-0"></div>
                  <button
                    type="button"
                    className="btn btn-secondary text-lg"
                    onClick={() =>
                      document.getElementById("register-form").showModal()
                    }
                  >
                    Create new Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog onClose={hdlClose} id="register-form" className="modal">
        <div className="modal-box">
          <Register resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
