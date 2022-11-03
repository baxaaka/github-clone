
import "./index.css"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
const index = () => {
  


  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users/baxaaka/repos")
    const data = await response.json()
    setUsers(data)
    
  let newData = data.splice(0,5)
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
    <section className="section-4">
      
      {users.length > 0 && (
        <ul className="repos">
          {users.map(user => (
            <li key={user.id}>
              <div className="card-repo">
              <a href={user.html_url} target="_blank" className="a">{user.name} </a>     <b>{user.visibility}</b>
              <h5>{user.language}  <b>updated {user.updated_at} ago </b> </h5>
              </div>
             
              </li>
          ))}
        </ul>
      )}
      </section>
    </>
  )



}





export default index;