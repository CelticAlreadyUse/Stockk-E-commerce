import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { Dispatch } from "@/state/store"
type CartCardProps = {
  id:number,
  image:string,
  price:number
  quantity:number
  title:string
}
const CartCard = ({id,image,price,quantity,title}:CartCardProps) => {
  const dispatch = useDispatch<Dispatch>()
   const navigate = useNavigate()
   const handleIncrease = () => {
    dispatch.cart.increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch.cart.decreaseQuantity(id)
    }
  };
  const handleRemove= () =>{
    dispatch.cart.removeFromCart(id)
  }
   const handleRoute = () =>{
     navigate(`/detail/${id}`)
   }
    return (
        <div  className="space-y-6">
          <div className="max-w-xl w-[16rem] md:max-w-full  md:w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <button onClick={handleRoute} className="w-20 shrink-0 md:order-1">
                <img className="object-cover h-20 w-20 dark:hidden" src={image} alt="imac image" />
             </button>
              <label  className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button onClick={handleDecrease} type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0
                   dark:text-whit">{quantity}</p>
                  <button onClick={handleIncrease} type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    Rp{price}</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <Button  className="text-base font-medium text-gray-900 hover:underline dark:text-white">
              {title}
                  </Button>
                <div className="flex items-center gap-4">
                  <Button onClick={handleRemove} variant={"ghost"} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> 
    )
}

export default CartCard