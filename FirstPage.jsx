import React from "react";
import { Link } from "react-router-dom";
export default function FirstPage({meal}) {
    return(
        <>
        <div className="row my-3 shadow-lg bg-white py-4">
            <div className="col-3 margin-botton-10">
                <img src={meal.strCategoryThumb} alt="" />
            </div>
            
            <h3 className="col-9">
            <Link to={"/"+ meal.strCategory}>{meal.strCategory}</Link>
                <p>{meal.strCategoryDescription}</p>
            </h3>
        </div>
        </>
    )
};
