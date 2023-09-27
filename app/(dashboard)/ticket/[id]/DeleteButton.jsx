"use client"

import { useState } from "react"
import { TiDelete } from "react-icons/ti"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { deleteTicket } from "../actions"



//Components

export default function DeleteButton( { id }) {

    const [isPending, startTransition] = useTransition()

  return (
    <button
        className="btn-primary"
        onClick={() => startTransition(() => deleteTicket(id))}
        disabled={isPending}
        >
            

    {isPending && (
        <>
            <TiDelete/>
            Deleting...
        </>
    )}

    {!isPending && (
        <>
        <TiDelete/>
        Delete Ticket
        </>
    )}


    </button>
  )
}
