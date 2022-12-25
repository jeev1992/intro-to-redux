import React, { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addDataToStore} from "../actions/index"

function GetDataFromComponent(){

    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchData(){
            const payloadData = []
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%")
            console.log("Response is " + JSON.stringify(response.status))
            const data = await response.json()
            console.log("The data from API is " + JSON.stringify(data.drinks))

            //Dispatch this data to the store
            for(let i = 0; i < data.drinks.length; i++){
                payloadData[i] = data.drinks[i]
            }

            dispatch(addDataToStore(payloadData))
            
        }

        fetchData()

    }, [])

    return(
        <div>
            <h1>This is get data component</h1>
        </div>
    )
}

export default GetDataFromComponent