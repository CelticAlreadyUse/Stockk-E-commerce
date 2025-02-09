
import  CardItem  from "@/components/card/Card"
import Loading from "@/components/effects/loading";
import { Filter } from "@/components/filterButton/Filter";
import { FadeText } from "@/components/ui/fade-text"
import SearchBar from "@/components/ui/searchbar/SearchBar";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
type category={
  data:{

    id:number,
    name:string
  }[]
}
export function Main() {
const [data,setData] = useState<any>(null)
const [loading,setLoading] = useState<boolean>(true)
const [err,setError] = useState<string>("")
const [searchParams] = useSearchParams();
const searchQuery = searchParams.get("search") || "";
const [categoryList,setCategoryist] = useState<category | null>()
const getItems = async() =>{
  try{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/products?search=${searchQuery}`)
    if (!response.ok){
      console.log(err)
      throw new Error("Network response was not ok")
    }
    const result =await response.json()
    console.log(result)
    setLoading(true)
    setData(result)
  }catch(err){
    setError("oops theres something wrong")
  }
  finally{
    setLoading(false)
  }
}
var itemCategorylist = categoryList?.data.map((data)=>data.name)
const getCategoryList = async()=>{
  try{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/categories`)
    const data = await response.json()
    setCategoryist(data)
  }catch(err){
    setError("oops theres something wrong")
  }
}
var sidebar = useSidebar().state
useEffect(()=>{
  getItems()
  getCategoryList()
},[searchQuery])
  return (
    <div className={`grid place-items-end md:${ sidebar == "expanded" ? 'w-[calc(100svw-16rem)]' : 'w-svw' }  `}>
       {loading == true &&
       <div className="fixed  z-10 left-0 top-0 bg-black/15 w-full h-full">
      <Loading/>
      </div>
      }
      <div className={` items-center justify-center mb-4 border-b-2 flex w-full ${ sidebar == "expanded" ? 'w-[calc(100svw-16rem)]' : ''}`}>
        <SearchBar />
        <FadeText text="Stock List" direction="up" className="hidden md:text-2xl mt-2 font-bold md:ml-10"></FadeText>
        <Filter itemsCategory={itemCategorylist}></Filter>
      </div>
        {data != null ?
        <>
        <section className={`${ sidebar == "expanded" ? 'md:w-[calc(100svw-16rem)]' : 'md:w-svw'} flex mt-2 ml-4 flex-wrap gap-5 justify-center md:justify-start items-center bg-purple-700-2`}>
          {
            data.data.map((item:any)=>(
            <CardItem  id={item.id} key={item.id} itemImage={item.picture_url_list.length > 0 ? item.picture_url_list[0].image_url : null}
            itemDescription={item.decsription}
            itemTitle={item.name}itemWarehouse={item.warehouse_id} itemPrice={item.price}/>
    
          ))
        }
        </section>
            </>
        :
        <div className="flex items-center absolute left-1/2 top-1/2">
          <img className="w-48 object-cover h-36" width={1000} height={1000} src="/images/error_not_found.png"></img>
          <h1 className="text-2xl font-bold">There's no product yet.add product now</h1>
          </div>
        }
        </div>
  )
}
