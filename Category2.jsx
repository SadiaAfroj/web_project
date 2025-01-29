import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondPage from "./SecondPage";

export default function Category2(params) {
    let[meals,setMeals]=useState([])
    let {foodie}=useParams()

    useEffect(()=>{
        fetchMeal(foodie)
    },[foodie])

    let fetchMeal=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodie}`)
        .then((res)=>res.json())
        .then((data)=>setMeals(data.meals))
        .catch((err)=>console.log(err))
    }
    return(
        <>
        <div className="row row-cols-4">
        {
        meals.map((list,index)=>(<SecondPage key={index} mealList={list}/>))
        }
        </div>
        
        </>
    )
};
