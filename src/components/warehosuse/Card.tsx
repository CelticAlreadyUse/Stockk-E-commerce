import { useNavigate } from "react-router-dom";

type CardProps = {
    warehouse: {
      name: string;
      id:number
      description: string;
      created_at: string;
      email: string;
      phone: string;
      zip: string;
      picture_url_list: { image_url: string }[] | null;
      category: string | null;
    };
  };
  const Card = ({ warehouse }: CardProps) => {
    const navigate = useNavigate()
    const defaultImage = 'images/Theres no image.png'; // Default image if no image is available
    const images = warehouse.picture_url_list?.length ? warehouse.picture_url_list : [{ image_url: defaultImage }];
    
  return (
    <div  onClick={()=>navigate(`/warehouse/${warehouse.id}`)} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <div className="h-56 w-full">
      <a href="#">
        <img className="mx-auto object-cover h-full dark:hidden" src={images[0].image_url} alt="Warehouse" />
        <img className="mx-auto object-cover hidden h-full dark:block" src={images[0].image_url} alt="Warehouse" />
      </a>
    </div>
    <div className="pt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
      </div>
      <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{warehouse.name}</a>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{warehouse.description}</p>
      {warehouse.category && (
        <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">Category: {warehouse.category}</p>
      )}
      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Email: {warehouse.email}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Phone: {warehouse.phone}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">ZIP: {warehouse.zip}</p>
      </div>
    </div>
  </div>
  )
}

export default Card