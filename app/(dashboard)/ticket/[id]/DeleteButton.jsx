"use client"

import { useState } from "react"
import { TiDelete } from "react-icons/ti"
export default function DeleteButton( { id }) {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () =>{
        setIsLoading(true)
        console.log('Deleting ticket -', id)
    }

  return (
    <button
        className="btn-primary"
        onClick={handleClick}
        disabled={isLoading}
        >
            

    {isLoading && (
        <>
            <TiDelete/>
            Deleting...
        </>
    )}

    {!isLoading && (
        <>
        <TiDelete/>
        Delete Ticket
        </>
    )}


    </button>
  )
}
