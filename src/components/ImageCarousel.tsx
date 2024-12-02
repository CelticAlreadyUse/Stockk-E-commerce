
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useRef } from "react"
import ChildImage from "./ChildImage"

export function ImageCArousel() {
   const plugin = useRef(Autoplay({delay:2400,stopOnMouseEnter:false,}))
    return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[38.5rem ] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className=" h-[18rem] flex  items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <ChildImage/>
    </Carousel>
  )
}
