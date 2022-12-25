import React from "react";
import {useSelector} from "react-redux"

function DisplayDataComponent(){

    const drinksArray = useSelector((s) => s.getDataFromApiReducer)

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Drink Name</th>
                        <th>Drink Instructions</th>
                    </tr>
                </thead>
                    
                <tbody>
                {
                        drinksArray && drinksArray.map(item => {
                            return(
                                <tr>
                                    <td>{item.strDrink}</td>
                                    <td>{item.strInstructions}</td>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayDataComponent