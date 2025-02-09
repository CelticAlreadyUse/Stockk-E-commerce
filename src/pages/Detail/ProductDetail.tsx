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

type CommentResponse = {
  data: {
    id: number;
    comment: string;
    created_at: string;
    rating: number;
    average_rating?: number;
    user: {
      name: string;
      picture_url: string;
    };
  }[];
};

type ProductResponse = {
  data: {
    id: number;
    name: string;
    description: string;
    created_at: string;
    category_list: {
      name: string;
    }[];
    picture_url_list: {
      image_url: string;
    }[];
    price: number;
    updated_at: string;
    warehouse_id: number;
  };
};

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isOpenTab, setIsOpenTab] = useState(true);
  const [product, setProduct] = useState<ProductResponse | null>(null);
  const [commentsData, setCommentsData] = useState<CommentResponse>();
  const [error, setError] = useState("");

  const getProductData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/warehouse/product/${id}`
      );
      
      if (!response.ok) {
        throw new Error("Produk tidak ditemukan");
      }
      
      const results = await response.json();
      setProduct(results);
      setError("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Terjadi kesalahan");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCommentsData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/warehouse/product/comments/${id}`
      );
      
      if (!response.ok) {
        throw new Error("Gagal memuat komentar");
      }
      
      const resultComment = await response.json();
      setCommentsData(resultComment);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
    getCommentsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
        <p className="ml-2">Memuat produk...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md text-center">
          <h2 className="font-bold text-xl mb-2">⚠️ Error!</h2>
          <p>{error}</p>
          <Button 
            onClick={getProductData}
            className="mt-4 bg-red-600 hover:bg-red-700"
          >
            Coba Lagi
          </Button>
        </div>
      </div>
    );
  }

  if (!product?.data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg max-w-md text-center">
          <h2 className="font-bold text-xl mb-2">😞 Produk Tidak Ditemukan</h2>
          <p>Produk yang Anda cari tidak tersedia atau mungkin telah dihapus</p>
        </div>
      </div>
    );
  }

  return (
    <Productlayout>
      <div>
        <div className="grid place-items-start">
          <h1 className="font-bold text-2xl">{product.data.name}</h1>
          <ImageCArousel Image={product.data.picture_url_list} />
          <Star rating={commentsData?.data[0]?.average_rating || 0} />
          
          <div className="gap-4 flex mt-2">
            <Button
              onClick={() => setIsOpenTab(true)}
              className={`text-slate-800 cursor-pointer text-2xl font-bold ${
                isOpenTab ? "border-b-2" : ""
              }`}
            >
              Detail
            </Button>
            <Button
              onClick={() => setIsOpenTab(false)}
              className={`text-slate-800 cursor-pointer text-2xl font-bold ${
                !isOpenTab ? "border-b-2" : ""
              }`}
            >
              Review
            </Button>
          </div>

          {isOpenTab ? (
            <BoxRevealText
              picture_url={product.data.picture_url_list[0]}
              price={product.data.price}
              KeyID={product.data.id}
              warehouseID={product.data.warehouse_id}
              CategoryList={product.data.category_list}
              title={product.data.name}
              description={product.data.description}
            />
          ) : (
            <>
              {commentsData?.data?.length ? (
                commentsData.data.map((data) => (
                  <div key={data.id} className="mt-4">
                    <Review
                      rating={data.rating}
                      picture_url={data.user.picture_url}
                      name={data.user.name}
                      created_at={data.created_at}
                      review={data.comment}
                    />
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-2 font-bold font-sans bg-black/25 p-3 rounded-lg mt-4">
                  <Loader />
                  <p>
                    Belum ada <span className="text-red-600">komentar</span> untuk produk ini
                  </p>
                </div>
              )}
            </>
          )}
        </div>
        <OptionBuy />
      </div>
    </Productlayout>
  );
};

export default ProductDetail;