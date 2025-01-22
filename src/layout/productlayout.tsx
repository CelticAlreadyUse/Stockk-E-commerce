import React from "react"

interface LayoutProps {
    children: React.ReactNode;  }
const Productlayout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='grid p-10 grid-cols-1 place-items-center w-dvw md:grid-cols-2 h-fit pb-28 place-content-center'>
        {children}
    </div>
  )
}

export default Productlayout