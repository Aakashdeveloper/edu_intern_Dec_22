import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`}>
                         <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt="drinks"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="compHeading">
                                    <a href="../listing/listing.html">{item.mealtype}</a>
                                </div>
                                <div class="compSubHeading">
                                    Best Deal For {item.mealtype}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
            <div class="mainBox">
               {listMeal(props)}
            </div>
    )
}

export default QuickDisplay;