import { Link, useNavigate} from "react-router-dom"
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
interface signupInput {
  name: string;
  username: string;
  password: string;
}

export const Auth = ({type}:{type: "signup" | "signin"}) => {
  const navigate = useNavigate();
   const [PostInputs, setPostInputs] = useState<signupInput>({
    name: "",
    username: "",
    password: ""
   });

   async function sendRequest (){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/vi/user/${type === "signup" ? "signup" :" signin"}`, PostInputs);
    const jwt = response.data;
    localStorage.setItem("token", jwt);
    navigate("/blogs")
    }catch(e){
      alert("error when signing up");
    }
  }
  

  return  <div className="h-screen flex justify-center  flex-col">
      <div className="flex justify-center pt-19">
        <div className="">
        <div className="text-3xl font-extrabold">
           Create an account
        </div>
        <div className="text-slate-400 mt-4">
          {type === "signin" ? "Dont have an account?": "Already have an account?"}
          <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
            {type=== "signin" ? "sign Up" : "sign In"}
          </Link>
        </div>
        <div>
         {type === "signup" ? <LabelledInput label="Name" placeholder="Name" onChange={(e) =>{
            setPostInputs({
              ...PostInputs,
              name: e.target.value
            })

          }}></LabelledInput> : null}
          <LabelledInput label="Username" placeholder="Enter the Username" onChange={(e) =>{
            setPostInputs({
              ...PostInputs,
              username: e.target.value
            })

          }}></LabelledInput>

          <LabelledInput label="password" placeholder="" onChange={(e) =>{
            setPostInputs({
              ...PostInputs,
              password: e.target.value
            })

          }}></LabelledInput>
        </div>
        <div className="py-4">
          <div className="mt-4 block w-full p-2.5">
          <button onClick={sendRequest} type="button" className=" block w-full p-2.5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{type=== "signin" ?  "sign In":"sign Up" }</button>
          </div>
        <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
       </svg>
       Sign in with Github
      </button>
      <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
      <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
         <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
      </svg>
       Sign in with Google
       </button>
        </div>
        </div>
      </div>
    </div>
  
}

interface LabelledInputType{
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label , placeholder , onChange}: LabelledInputType) {
  return<div>
  <label  className="block mb-2 text-sm font-semibold text-black mt-5">{label}</label>
  <input onChange={onChange} type="text" id="first_name" className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
</div>

}

