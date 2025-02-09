import {  useNavigate } from "react-router-dom"

export const navigateURL= (url:string) =>{
    const navigate =useNavigate()
    navigate(url)
}