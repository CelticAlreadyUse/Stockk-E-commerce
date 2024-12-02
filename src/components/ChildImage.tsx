

const ChildImage = () => {
    const ITEM = [
        {src:"https://dummyjson.com/image/150"},
        {src:"https://dummyjson.com/image/150"},
        {src:"https://dummyjson.com/image/150"},
        {src:"https://dummyjson.com/image/150"},
    ]

    return (
    <div className="flex mt-2 items-center gap-2">
        {
        ITEM.map(item=>(
            <img className="w-[6.25rem] h-full" src={item.src}></img>
        ))
        }
    </div>
  )
}

export default ChildImage