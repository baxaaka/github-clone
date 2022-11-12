import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Respositories from "./components/Repositories";
import Home from "./components/Home";
// import API from "./api/API"
// import context from "./context";

const App= ()=> {


  // const [user, setUser] = useState([]);

  
   
  // async function getData() {
  //   const data = await req.getPost();

  //   setUser(data);

  // }


  // useEffect(()=>{
  //   getData();
  // },[])



  // const [pins ,setNewPins]=useState([])



  // const getImages =(terms)=> {
  //   return API.get("https://api.github.com/search/users?q=${}"
  //    ,{
  //     params:{
  //       query : terms
  //     }
  //   }
  //   )

  // }

  // const onSearchSubmit =(terms)=> {
  //   console.log("hello pic" , terms);
  //   getImages(terms).then((res)=>{
  //     let results =res.html_url

  //     let newPins =[
  //       ...results ,
  //       ...pins ,
  //     ]
      
  //     newPins.sort(function(a, b){
  //       return 0.5 - Math.random();

  //     });
  //     setNewPins(newPins)
  //   })
  // }

 

  return (
    <>
      {/* <context.Provider value={user}> */}
        <Navbar/>

        <Home />

        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/repositories" element={<Respositories />} />
        </Routes>
      {/* </context.Provider> */}
    </>
  );
}

export default App;
