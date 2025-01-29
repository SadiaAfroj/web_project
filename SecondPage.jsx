import React from "react";
export default function SecondPage({mealList}) {
    return(
        <div className="col my-3 shadow">
            <div className="card">
                <img src={mealList.strMealThumb} alt="" />
            </div>
            <div className="card-body">
                
                <button className="btn btn-primary btn-lg w-100">{mealList.strMeal}</button>
            </div>
        </div>
    )
};
