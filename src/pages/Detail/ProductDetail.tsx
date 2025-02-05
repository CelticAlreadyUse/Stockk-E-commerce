import BoxRevealText from "@/components/BoxReveral";
import Star from "@/components/card/Star";
import Loader from "@/components/effects/writtLoader/Loader";
import { ImageCArousel } from "@/components/ImageCarousel";
import OptionBuy from "@/components/OptionBuy";
import Review from "@/components/riview/Review";
import { Button } from "@/components/ui/button";
import Productlayout from "@/layout/productlayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type commentResponse = {
 data?:{
   id:number
   comment:string
   created_at:string
   rating:number
   user:{
    name:string
    picture_url:string
   }
  }[]
}
type productResponse ={
  data : {
    id:number
    name:string
    description:string
    created_at:string
    category_list:{
      name:string
    }[]
    picture_url_list:{
      image_url:string
    }[]
    price:number
    updated_at:string
    warehouse_id:number
  }
}
const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [isOpentab, setIsopenTab] = useState<boolean>(true)
  const [product, setProduct] = useState<productResponse>()
  const [commentsData,setCommentsData] = useState<commentResponse>()
  const [err, setErr] = useState<string>("")
  const getProductData = async() => {
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/product/${id}`)
      if (!response.ok){
      console.log(err)
      }      
      const results = await response.json()
      setProduct(results)
      setLoading(true)
    }catch(error){
      setErr("Oops there something wrong")
      console.log(err)
    }finally{
      setLoading(false)
    }
  };
  const getCommentsData =  async() =>{
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/product/comments/${id}`)
      if (!response.ok){
        console.log(err)
        }  
        const resultComment = await response.json()
        setCommentsData(resultComment)
    }catch(err){

    }finally{

    }
  }
  useEffect(() => {
    getProductData()
    getCommentsData()
  }, []);
  if (loading == true){
    return (
    <p>Now loading....</p>
    )
  }
  return (
    <Productlayout>
      <div >
        <div className="grid place-items-start ">
          <h1 className="font-bold text-2xl">{product?.data.name} </h1>
          <ImageCArousel Image={product?.data.picture_url_list} />
          <Star rating={2}/>
          <div className="gap-4  flex mt-2 ">
            <Button
              onClick={() => setIsopenTab(true)}
              className={`text-slate-800 cursor-pointer text-2xl font-bold ${
                isOpentab == true ? "border-b-2" : ""
              }`}
            >
              Detail
            </Button>
            <Button
              onClick={() => setIsopenTab(false)}
              className={`text-slate-800 cursor-pointer text-2xl font-bold ${
                isOpentab == false ? "border-b-2" : ""
              }`}
            >
              Riview
            </Button>
          </div>
          {isOpentab ? 
          <BoxRevealText KeyID={product?.data.id} warehouseID={product?.data.warehouse_id} CategoryList={product?.data.category_list} title={product?.data.name} description={product?.data.description} /> 
          : 
              <>
              { commentsData?.data?.length != 0 ? commentsData?.data?.map((data)=>(
               <div key={data.id} className="mt-4">
               <Review rating={data?.rating}   picture_url={data.user.picture_url} name={data.user.name} created_at={data.created_at} review={data.comment} />
                </div>
              ))
              :
              <div className="flex items-center gap-2 font-bold font-sans bg-black/25 p-3 rounded-lg mt-4">
              <Loader/>
              <p>Sory looks like there is no <span className="text-red-600">comment</span> for this product</p>
              </div>
                }
              </>
}
        </div>
        <OptionBuy />
      </div>
    </Productlayout>
  );
};

export default ProductDetail;
