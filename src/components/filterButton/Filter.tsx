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

export function Filter() {
  return (
    <Sheet>
      <SheetTrigger className="border-none" asChild>
        <Button variant="outline"><FaFilter className="mr-28 cursor-pointer" /></Button>
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
            <Select Label="Category" Item={["Technology","Food","Factory","Book"]}/>
          </div>
          <div>
            <label>Minimum Price</label>
            <Select Label="Minimum Price" Item={[50.000,90.000,100.000,250.000,350.000,500.000,600.000,1_200_000,1_800_000,3_500_000]} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
