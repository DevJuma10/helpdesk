"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateTicket() {
  const router = useRouter()

const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [priority, setPriority] = useState("");
const [isLoading, setIsLoading] = useState(false)



const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);


    const newTicket = {title, body, priority};
    console.log(newTicket)

    // Persist data to db
    const res = await fetch("http://localhost:3000/api/ticket", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newTicket),
    })

  
    const json = await res.json()

    if(json.error) {
      console.log(error.message)
    }

    if (json.data) {
      router.refresh()
      router.push('/ticket')
    }
  }



  return (
    <>
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
         <option value="none" hidden>Select Options</option>
          <option value="low">Low Priority</option>
          <option value="medium" selected>Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
    </form>
    </>
  )
}
