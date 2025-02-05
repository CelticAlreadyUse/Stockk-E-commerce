"use client"

import { useToast } from "@/hooks/use-toast" 

export function ToastWithTitle() {
  const { toast } = useToast()
  return  toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })

  
}
