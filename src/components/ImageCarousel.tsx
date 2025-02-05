
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useRef } from "react"
type ImageCArouselProps = {
  Image?:{
    image_url:string
  }[] 
}
export function ImageCArousel(props:ImageCArouselProps) {
   const plugin = useRef(Autoplay({delay:2400,stopOnMouseEnter:false,}))
    return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[38.5rem ] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {props.Image?.map((img, index) => (
          <CarouselItem key={index}>
            <div>
              <Card >
                <CardContent className=" h-[18rem] ">
                  <img  className="object-cover w-full h-full" width={1200} height={1200} src={img.image_url}>
                  </img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
