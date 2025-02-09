import { Button } from "@/components/ui/button"
import { FaFilter } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Select } from "../select/Select";
import { useState } from "react";
type props ={
  itemsCategory?:string[]
  itemsPrice?:string[] 
}
type filterPrriceProps = {
  minPrice?:number
  maxPrice?:number
}

export function Filter(item:props) {
  const [prices,setPrices] = useState<filterPrriceProps>({maxPrice:0,minPrice:0})
  const setSaveChanges =() =>{
   
  }
  return (
    <Sheet>
      <SheetTrigger className="border-none" asChild>
        <Button variant="outline"><FaFilter className="md:mr-28 cursor-pointer" /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> <span className="flex gap-2 items-center justify-start"><FaFilter className="cursor-pointer" />Filter Category</span> </SheetTitle>
          <SheetDescription>
            Add some category to filter your search
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div>
            <label>Select Category</label>
            <Select Label="Category" Item={item?.itemsCategory || []}/>
          </div>
          <div>
          <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Minimal Harga
          </label>
          <div className="mt-1">
            <input
              type="number"
    inputMode="numeric"
    pattern="[0-9]"
              name="minPrice"
              id="minPrice"
              defaultValue={prices.minPrice || 0}
              onChange={(e) => setPrices({minPrice:Number(e.target.value)})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan harga minimum"
              min="0"
            />
          </div>
        </div>
    
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Maksimal
          </label>
          <div className="mt-1">
            <input
            inputMode="numeric"
    pattern="[0-9]"
    prefix="Rp"
              type="number"
              name="maxPrice"
              id="maxPrice"
              defaultValue={prices.maxPrice || 0}
              onChange={(e)=>setPrices({maxPrice:Number(e.target.value)})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan harga maksimum"
              min="0"
            />
          </div>
          </div>
        </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={()=>setSaveChanges()}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
