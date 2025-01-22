
import  CardItem  from "@/components/card/Card"
import Loading from "@/components/effects/loading";
import { Filter } from "@/components/filterButton/Filter";
import { FadeText } from "@/components/ui/fade-text"
import SearchBar from "@/components/ui/searchbar/SearchBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Main() {
// const ItemData =[
//   {
//     itemImageUrl :"https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image",
//     category:["techonology"],
//     ItemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis deleniti voluptatibus repudiandae temporibus ipsum quod reiciendis qui, maxime accusamus eligendi natus assumenda quas quisquam quos, itaque eveniet fuga unde. Veniam debitis commodi assumenda praesentium quibusdam aut cum, reiciendis distinctio quos explicabo nulla eius voluptas iusto harum, unde odio? Enim, magnam nam dolorem nesciunt doloremque soluta a at architecto consequuntur.",
//     ItemTitle:"Remote"
//   },
//   {
//     itemImageUrl :"https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image",
//     category:["techonology"],
//     ItemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis deleniti voluptatibus repudiandae temporibus ipsum quod reiciendis qui, maxime accusamus eligendi natus assumenda quas quisquam quos, itaque eveniet fuga unde. Veniam debitis commodi assumenda praesentium quibusdam aut cum, reiciendis distinctio quos explicabo nulla eius voluptas iusto harum, unde odio? Enim, magnam nam dolorem nesciunt doloremque soluta a at architecto consequuntur.",
//     ItemTitle:"Remote"
//   },
//   {
//     itemImageUrl :"https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image",
//     category:["techonology"],
//     ItemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis deleniti voluptatibus repudiandae temporibus ipsum quod reiciendis qui, maxime accusamus eligendi natus assumenda quas quisquam quos, itaque eveniet fuga unde. Veniam debitis commodi assumenda praesentium quibusdam aut cum, reiciendis distinctio quos explicabo nulla eius voluptas iusto harum, unde odio? Enim, magnam nam dolorem nesciunt doloremque soluta a at architecto consequuntur.",
//     ItemTitle:"Remote"
//   },
//   {
//     itemImageUrl :"https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image",
//     category:["techonology"],
//     ItemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis deleniti voluptatibus repudiandae temporibus ipsum quod reiciendis qui, maxime accusamus eligendi natus assumenda quas quisquam quos, itaque eveniet fuga unde. Veniam debitis commodi assumenda praesentium quibusdam aut cum, reiciendis distinctio quos explicabo nulla eius voluptas iusto harum, unde odio? Enim, magnam nam dolorem nesciunt doloremque soluta a at architecto consequuntur.",
//     ItemTitle:"Remote"
//   }
// ]
const [data,setData] = useState<any>(null)
const [loading,setLoading] = useState<boolean>(true)
const [err,setError] = useState<string>("")
const getItems = async() =>{
  try{
    const response = await fetch('https://dummyjson.com/products?limit=10')
    if (!response.ok){
      throw new Error("Network response was not ok")
    }
    const result =await response.json()
    setLoading(true)
    setData(result)
  }catch(err){
    setError("oops theres something wrong")
  }
  finally{
    setLoading(false)
  }
}

useEffect(()=>{
  getItems()
},[])
  return (
    <div>
         <SearchBar />
       {loading == true &&
       <div className="fixed  z-10 left-0 top-0 bg-black/15 w-full h-full">
      <Loading/>
      </div>
      }
      <div className="flex items-center justify-between">
      <FadeText text="Stock List" direction="up" className="text-2xl mt-2 font-bold ml-10"></FadeText>
      <Filter/>
      </div>
        <section className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4 gap-12">
        {data != null ?
          data.products.map((item:any)=>(
            <Link to={`/detail/${item.id}`}>
            <CardItem  key={item.id} itemImage={item.images.map((img:string)=>img)} category={item.tags.map((item:any)=>(item))}
            itemDescription={item.decsription}
            itemTitle={item.title}/>
            </Link>
          ))
        
        :<h1>There's no data</h1>}
          
        </section>
        </div>
  )
}
