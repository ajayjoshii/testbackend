import { useState } from "react";
import { API } from "../api";

export default function Login() {
  const [form, setForm] = useState({ email:"", password:"" });

  const submit = async () => {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 shadow-lg rounded-xl w-80">
        <input placeholder="Email" className="input" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="input" onChange={e=>setForm({...form,password:e.target.value})}/>
        <button onClick={submit} className="btn">Logins</button>
      </div>
    </div>
  );
}