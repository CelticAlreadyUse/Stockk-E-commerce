import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { DollarSignIcon, ShoppingBagIcon } from "lucide-react";
import { ToastSimple } from "./ToasInfo";
import { Badge } from "./ui/badge";
// export async function BoxRevealText
export default function BoxRevealText() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Product tilte here<span className="text-[#5046e6]">.</span>
        
      <Badge variant={"outline"} className="text-green-600 rounded-[0.2rem]">Techonology</Badge>
        </p>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal> */}

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci id nobis, eveniet inventore beatae eum! Adipisci repellendus quaerat nulla nihil illo exercitationem totam provident, dolore nostrum iste nobis eligendi.
            Delectus alias numquam impedit dolorum fugit molestias quia exercitationem perferendis, qui porro fugiat tempore, inventore minima atque ipsam voluptas eos tempora, quaerat excepturi error ut aspernatur optio eius. Repudiandae, commodi.
            <span className="font-semibold text-[#5046e6]"> Categorie</span>,
            <span className="font-semibold text-[#5046e6]"> Categorie</span>,
            <span className="font-semibold text-[#5046e6]"> Categorie</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
             100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
        
      <BoxReveal  width="100%" boxColor={"#5046e6"} duration={0.5}>
        <div className=" flex  items-center justify-end mr-[2rem] w-full  gap-4">
      <ToastSimple  message="Sucessfully add to cart">
        <Button variant={"ghost"}  className="mt-[1.6rem] bg-yellow-500 text-white rounded-[0.2rem]">
          <ShoppingBagIcon/> Add cart</Button>
      </ToastSimple>
        <Button variant={"ghost"} className="mt-[1.6rem] bg-green-600 text-white rounded-[0.2rem]"> <DollarSignIcon/>Buy</Button>
        </div>
      </BoxReveal>
    </div>
  );
}
