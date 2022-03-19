import React from "react"

function Recipe({recipe}) {

    return (
        <tr className="content_row">
            <td className="content_td"><p>{recipe.name}</p></td>
            <td className="content_td"><p>{recipe.cuisine}</p></td>
            <td className="content_td"><img src={recipe.photo} /></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete">Delete</button></td>
        </tr>
    )
}

export default Recipe