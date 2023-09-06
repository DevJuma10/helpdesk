"use client"

import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateTicket() {

const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [priority, setPriority] = useState("");
const [isLoading, setIsLoading] = useState(false)


const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {title, body, priority, user_email:'oluwamiyo@gmail.com'};
    console.log(newTicket)

    // Persist data to db
    const res = fetch("http://localhost:4000/tickets", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newTicket),
    })

    if (res.status === 201){
        console.log(res.status)
        router.refresh();
        router.push('/tickets')
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
        <span>Title:</span>
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
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
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
