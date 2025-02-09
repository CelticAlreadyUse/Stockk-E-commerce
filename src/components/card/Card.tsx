import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BlurFade from "../ui/blur-fade"
import "react-lazy-load-image-component/src/effects/blur.css";
import LazyImage from "./LazyImage";
import { Badge } from "../ui/badge";
import { FaWarehouse } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { formatToIDR } from "@/helper/IDRconverstion";
type props  = {
    id:number
    itemTitle:string
    itemDescription:string
    itemImage:string
    itemWarehouse:number,
    itemPrice:number
}
const CardItem = ({ id,itemTitle, itemDescription, itemImage ,itemWarehouse,  itemPrice}:props) => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate(`/detail/${id}`)
  }
  return (
    <BlurFade>
      <Card onClick={()=>handleRoute()} className="  rounded-xl h-[300px] cursor-pointer">
        <div className="flex justify-center object-cover">
          <LazyImage 
              className=" h-36 w-[250px] object-cover rounded-t-xl "
              src={itemImage}
              alt={itemTitle}  />
        </div>
        <CardHeader className="gap-[2px]">
          <Badge className="w-fit rounded-lg bg-green-500/10 hover:bg-green-500" variant={"outline"}>Ready Stock</Badge>
          <CardTitle className="max-sm:text-lg">{itemTitle}</CardTitle>
          <CardTitle className="max-sm:text-sm ">{formatToIDR(itemPrice)} / unit</CardTitle>
          <Link  className="flex px-2 py-1 hover:bg-yellow-500 hover:text-black rounded-lg mt-4 bg-black text-yellow-400 items-center gap-4" to={`/detail/warehouse/${itemWarehouse}`}  > 
          <FaWarehouse/>Visit Warehouse
          </Link> 
          <CardDescription className="max-sm:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full text-wrap max-h-16">
            {itemDescription}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap justify-between">
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default CardItem;