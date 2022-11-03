import React , {useEffect ,useState} from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';


const index = () => {
    
    const [baxaaka, setUsers] = useState([])

    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/baxaaka")
      const data = await response.json()
      setUsers(data)
     
    }
  
    useEffect(() => {
      fetchData()
    }, [])


    return (
        <>
            <section className='section-2'>
                
                    <div className="links">
                    <ul className='ul-2'>
                    <li><NavLink to="/"></NavLink></li>
                    <li><NavLink to="/overview">Overview</NavLink></li>
                    <li><NavLink to="/repositories">Repositories</NavLink></li>
                    <li><NavLink >Projects</NavLink></li>
                  
                    <li><NavLink>Stars</NavLink></li>
                  
                   </ul>

                   </div>
                   <div className='main'>
                       <div className="first-page">
                        <img src={baxaaka.avatar_url} alt="" className='avatar' />
                               <h3>{baxaaka.login}</h3>
                               
                               <button className='btn'>Edit profile</button>
                       </div>
                   </div>
                  
            </section>
        </>
    );
};

export default index;