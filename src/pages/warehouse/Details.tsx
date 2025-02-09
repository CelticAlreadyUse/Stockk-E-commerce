import { warehouse } from "@/model/warehouse";
import { useEffect, useState } from "react";
import ReactImageGallery,{ReactImageGalleryItem} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [Warehouses, setWarehouses] = useState<warehouse>()
  const [Error, setError] = useState<string>("")
  const { id } = useParams();
  const defaultImage = {
    original: "/images/Theres no image.png",
    thumbnail: "/images/Theres no image.png",
  };
  const getWarehouseDetails = async() =>{
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/warehouse/${id}`)
      const data = await response.json()
      setWarehouses(data)
    }catch(err){
      setError("oops theres something wrong")
    }
  }

  const warehousePictures: ReactImageGalleryItem[] =
  Warehouses?.data.picture_url_list?.length
    ? Warehouses.data.picture_url_list.map((item) => ({
        original: item.image_url,
        thumbnail: item.image_url,
      }))
    : [defaultImage];


  useEffect(()=>{
    console.log(Warehouses?.data.picture_url_list)
    getWarehouseDetails()
  },[])
  if (Error){
    return(
      <h1>{Error}</h1>
    )
  }
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={warehousePictures}
        />
      </div>
      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {Warehouses?.data.name}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">

            <p className="ml-3 text-sm text-gray-400">
              {/* ({Warehouses.reviews}) */}
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{" "}
            <span className="text-green-600">In Stock </span>
        </p>
        {/* <p className="font-bold">
          Brand: <span className="font-normal">{Warehouses.brand}</span>
        </p> */}
        <p className="font-bold">
          Cathegory:{" "}
          {
            Warehouses?.data.category_list?.map((item)=>(
              <span key={item.id} className="font-normal">{item.name}</span>
            ))
          }
        </p>
        <p className="font-bold">
          ID: <span className="font-normal">{Warehouses?.data.id}</span>
        </p>
        {/* <p className="mt-4 text-4xl font-bold text-violet-900">
          ${Warehouses.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ${Warehouses.previousPrice}
          </span>
        </p> */}
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {Warehouses?.data.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          {/* <div className="flex gap-1">
            {Warehouses.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          {/* <div className="flex gap-1">
            {productDetailItem.color.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${x}-600 focus:ring-2 focus:ring-${x}-500 active:ring-2 active:ring-${x}-500`}
                />
              );
            })}
          </div> */}
        </div>
        {/* <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton}`}> +</button>
          </div>
        </div> */}
        {/* <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDetail;