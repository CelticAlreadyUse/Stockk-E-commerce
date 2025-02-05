import { TimeAgo } from "@/helper/TimeAgo"
import BoxReveal from "../ui/box-reveal"
import Star from "../card/Star"
type commentProps = {
    review?:string
    created_at:string
    name:string
    picture_url:string
    rating:number
}
const Riiview = (props:commentProps) => {
  return (
    <>
      <div className="bg-black/15 w-[132%] rounded-xl">
        <BoxReveal boxColor={"#0c002b"} duration={0.5}>
        <div className="max-w-lg mx-auto  px-6 py-4 rounded-lg">
    <div className="flex items-center  mb-6">
        <img src={props.picture_url}  className="w-12 object-cover h-12 rounded-full mr-4"/>
        <div>
        <Star rating={props.rating}/>
            <div className="text-lg font-medium text-gray-800">{props.name}</div>
            <div className="text-gray-500">{TimeAgo(props.created_at)}</div>
        </div>
    </div>
   
    <p className="text-lg leading-relaxed mb-6">{props.review}</p>
    <div className="flex justify-between items-center">
    </div>
</div>
        </BoxReveal>
    </div>
    </>
  )
}

export default Riiview