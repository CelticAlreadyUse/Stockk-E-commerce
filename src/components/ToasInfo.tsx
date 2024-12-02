"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
type props ={
    children:JSX.Element,
    message:string
}
export function ToastSimple({children,message}:props) {
  const { toast } = useToast()

  return (
    <Button 
      onClick={() => {
        toast({
          description: message,
        })
      }}
    >
        {children}
    </Button>
  )
}
