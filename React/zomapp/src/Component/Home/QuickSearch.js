import React,{useState,useEffect} from 'react';
import './QuiclSearch.css';
import QuickDisplay  from './Quickdisplay';

const mealUrl = "http://3.17.216.66:4000/quicksearch"

const QuickSearch = () =>  {

    const [title] = useState('Quick Search')
    const [meals, setMeals] = useState()

    useEffect(() => {
        fetch(mealUrl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setMeals(data)
        })
    },[])

    return(
        <div id="quickSearch">
            <span class="quickHeading">
                {title}
            </span>
            <span class="quickSubHeading">
                Find Restaurants By MealType
            </span>
            <QuickDisplay mealData={meals}/>
        </div>
    )
}

export default QuickSearch