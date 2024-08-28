import React,{useContext,useState} from 'react'
import {Context} from '../../main'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show,setShow]=useState(false);
  const {isAuthorized,setIsAuthorized,user}=useContext(Context);
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user/logout",{withCredentials: true,});
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };
  return (
    <div>Navbar</div>
  )
}

export default Navbar