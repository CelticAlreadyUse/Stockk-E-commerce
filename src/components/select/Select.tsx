
import {
    Selects,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { formatToIDR } from "@/helper/IDRconverstion"

type Props ={
    Label:string,
    Item:string[] | number[] 
}
export function Select(item:Props) {
    let itemData
     if(Array.isArray(item.Item) && item.Item.every((item)=>typeof item == "number")){
        itemData =  item.Item.map((item)=>formatToIDR(item))
    }else{
        itemData = item.Item
    }
    return (
        <Selects>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={`Select a ${item.Label}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel >{item.Label}</SelectLabel>
                    {itemData.map((item)=>(
                        <SelectItem  value={item}>{item}</SelectItem>
                    ))
                    }
                </SelectGroup>
            </SelectContent>
        </Selects>
    )
}
