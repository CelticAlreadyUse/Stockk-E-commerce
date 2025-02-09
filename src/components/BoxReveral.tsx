import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { DollarSignIcon, ShoppingBagIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import {useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { Dispatch } from "@/state/store";

type boxReveralText ={
  KeyID:number 
  title:string  | ""
  description?:string | ""  
  warehouseID?:number  | ""
  picture_url:{
    image_url:string
  }
  price:number
  CategoryList?:{
    name:string
  }[]
}
export default function BoxRevealText(props:boxReveralText) {
  const { toast } = useToast()
  const dispatch = useDispatch<Dispatch>();
 const handleToast =(message:string) =>{
    toast ({
      variant:"default",
      description: message,
      className:"bg-yellow-400"
    })
 }
 const HandleAddtoCart = () =>{
  dispatch.cart.addToCart({
    id:props.KeyID,
    itemImage:props.picture_url?.image_url,
    itemPrice:props.price,
    itemTitle:props.title,
    quantity:1
  });
  handleToast("Item added to cart")
 }
  return (
    <div className="h-full max-w-lg items-center justify-center overflow-hidden">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>

        <div className="flex items-baseline gap-2">
        <p className="text-[3.2rem] font-semibold">
         {props.title}<span className="text-[#5046e6]">.</span>
        </p>
  
  <span className="text-xl font-medium text-gray-500"></span>
  <span className="text-3xl font-bold text-gray-900">Rp{props.price}</span>
</div>
       
      
      </BoxReveal>
      <div className="flex items-center gap-2 ">

      { props.CategoryList  &&
            props.CategoryList.map((item:any)=>( 
              <Badge key={props.KeyID} variant={"outline"} className="text-green-600 rounded-[0.2rem]">{item.name}</Badge>
            ))
          }
          </div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-2">
          <p>{props.description}</p>
        </div>

      </BoxReveal>
      <BoxReveal width="100%" boxColor={"#5046e6"} duration={0.5}>
        <div className=" flex  items-center justify-end mr-[2rem] w-full  gap-4">
        <Button onClick={HandleAddtoCart} variant={"ghost"} className="mt-[1.6rem] bg-yellow-500 text-white rounded-[0.2rem]">
          <ShoppingBagIcon/> Add cart
        </Button>
        <Button variant={"ghost"} className="mt-[1.6rem] bg-green-600 text-white rounded-[0.2rem]"> <DollarSignIcon/>Buy</Button>
        </div>
      </BoxReveal>
    </div>
  );
}
