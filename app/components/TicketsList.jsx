// // const url = "https://www.boredapi.com/api/activity";
// const url = "http://localhost:4000/tickets";
// const url = 'http://localhost:4000/tickets'

// // async function getTickets() {
// //     fetch(url, {
// //                 method: 'get',
// //                 mode: 'cors'
// //     })
// //         .then((response) => {
// //             return response.json()})
// //         .catch((err) => console.log(err));
// // }

// ////////////////////////////////GOLD///////////////////////////////////////
// // let tickets = fetch(url)
// //     .then((response) => response.json())
// //     .then(data => {
// //         console.log(data)

// //         return data;
// //     })
// //     .catch(error => {
// //         return error;
// //     });

// async function getTickets() {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
  
//   getTickets()
//   .then((tickets) => {
//     console.log(tickets);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
  

// async function getTickets(){
//     const res = await fetch('http://localhost:4000/tickets')
//     const data = await res.json();
//     return await data
// }


async function getTickets() {
    try {
      const response = await fetch('http://localhost:4000/tickets');
      if (!response.ok) {
        console.error(`Network error: ${response.status} - ${response.statusText}`);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  

  export default async function TicketsList() {
    try {
      const tickets = await getTickets();
  
      return (
        <>
          {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className="text-center">There are no open tickets</p>
          )}
        </>
      );
    } catch (error) {
      // Handle the error here, e.g., show an error message or log it.
      console.error(error);
    }
  }