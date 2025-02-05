
import  CardItem  from "@/components/card/Card"
import Loading from "@/components/effects/loading";
import { Filter } from "@/components/filterButton/Filter";
import { FadeText } from "@/components/ui/fade-text"
import SearchBar from "@/components/ui/searchbar/SearchBar";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Main() {
const [data,setData] = useState<any>(null)
const [loading,setLoading] = useState<boolean>(true)
const [err,setError] = useState<string>("")
const getItems = async() =>{
  try{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/products`)
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
var sidebar = useSidebar().state
useEffect(()=>{
  getItems()
},[])

  return (
    <div className={`grid md:${ sidebar == "expanded" ? 'w-[calc(100svw-16rem)]' : 'w-svw' }    place-items-end`}>
       {loading == true &&
       <div className="fixed  z-10 left-0 top-0 bg-black/15 w-full h-full">
      <Loading/>
      </div>
      }
      <div className="flex items-center justify-end w-full mb-4 border-b-2">
        <SearchBar />
        <FadeText text="Stock List" direction="up" className="hidden md:text-2xl mt-2 font-bold md:ml-10"></FadeText>
        <Filter/>
        </div>
        {data != null ?
        <>
        <section className="flex mt-2 flex-wrap gap-5 justify-center w-ful items-center bg-purple-700-2">
          {
            data.data.map((item:any)=>(
              <Link key={item.id} to={`/detail/${item.id}`}>
            <CardItem  key={item.id} itemImage={item.picture_url_list.length > 0 ? item.picture_url_list[0].image_url : null}
            itemDescription={item.decsription}
            itemTitle={item.name}itemWarehouse={item.warehouse_id} itemPrice={item.price}/>
            </Link>
          ))
        }
        </section>
            </>
        
        :
        <div className="flex items-center absolute left-1/2 top-1/2">
          <img className="w-48 object-cover h-36" width={1000} height={1000} src="/public/images/error_not_found.png"></img>
          <h1 className="text-2xl font-bold">There's no data</h1>
          </div>
        }
        </div>
  )
}
