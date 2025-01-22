import BoxRevealText from "@/components/BoxReveral"
import Star from "@/components/card/Star"
import { ImageCArousel } from "@/components/ImageCarousel"
import OptionBuy from "@/components/OptionBuy"
import Riiview from "@/components/riview/Riiview"
import { Button } from "@/components/ui/button"
import Productlayout from "@/layout/productlayout"
import { useState } from "react"
import { useParams,  } from "react-router-dom"

const ProductDetail = () => {
  const {id} = useParams()
  const [isOpentab,setIsopenTab] = useState<boolean>(true)
  return (
    <Productlayout>
    <div className="">
      <div className="grid place-items-start ">
      <h1 className="font-bold text-2xl">Product Detail {id} </h1>
        <ImageCArousel/> 
      <Star></Star>
        <div className="gap-4  flex mt-2 ">
          <Button onClick={()=>setIsopenTab(true)} className={`text-slate-800 cursor-pointer text-2xl font-bold ${isOpentab == true ? "border-b-2" : ""}`}>Detail</Button>
          <Button  onClick={()=>setIsopenTab(false)} className={`text-slate-800 cursor-pointer text-2xl font-bold ${isOpentab == false ? "border-b-2" : ""}`}>Riview</Button>
          </div>
      { isOpentab ? <BoxRevealText /> :<Riiview/>}
      </div>
      <OptionBuy/>
       </div>
    </Productlayout>
 
  )
}

export default ProductDetail