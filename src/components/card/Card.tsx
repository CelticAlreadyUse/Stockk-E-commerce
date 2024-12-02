import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BlurFade from "../ui/blur-fade"
import { Badge } from "../ui/badge"
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import LazyImage from "./LazyImage";
type props  = {
    itemTitle:string
    category:any
    itemDescription:string
    itemImage:string
}
const CardItem: React.FC<props> = React.memo(({ itemTitle, category, itemDescription, itemImage }) => {
  return (
    <BlurFade>
      <Card className="w-[250px] rounded-xl max-sm:w-[200px] cursor-pointer">
        <div className="border-b-2">

          <LazyImage 
              className="max-sm:h-36 rounded-t-xl object-center w-full h-full"
              src={itemImage}
              alt={itemTitle}  />
          {/* <img
            fetchPriority="high"
            className="max-sm:h-36 rounded-t-xl object-center w-full h-full"
            src={itemImage}
            alt={itemTitle} // Tambahkan atribut alt untuk SEO dan aksesibilitas
          /> */}
        </div>
        <CardHeader>
          <CardTitle className="max-sm:text-lg">{itemTitle}</CardTitle>
          <CardDescription className="max-sm:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full text-wrap max-h-16">
            {itemDescription}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap justify-between">
          <Badge className="border-b max-sm:w-24 text- border-sl rounded-xl w-fit">
            {category}
          </Badge>
        </CardFooter>
      </Card>
    </BlurFade>
  );
});

export default CardItem;