import React, { useState } from "react";
import FirstPage from "./FirstPage";

export default function Category(params) {
    let[categori,setCategori]=useState([]);
    let[show,setShow]=useState(null)

    let showData=()=>{
        setShow("Loading...")
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>res.json())
        .then((data)=>setCategori(data.categories))
        .catch((err)=>console.log(err))
        .finally(()=>setShow(null))
    }
    let clean=()=>{
        setCategori([])
    }
    return(
        <>
        <button className="btn btn-primary" onClick={showData}>Show data</button>
        <button className="btn btn-danger" onClick={clean}>Hide data</button>
        <div>{show}</div>
        {
            categori.map((cat,idx)=>(<FirstPage key={idx} meal={cat}/>))
        }
        </>
    );
};
