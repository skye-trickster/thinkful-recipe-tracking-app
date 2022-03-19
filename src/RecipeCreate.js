import React, { useState } from "react";

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" placeholder="Name"/>
            </td>
            <td>
              <input type="text" name="cuisine" placeholder="Cuisine"/>
            </td>
            <td>
              <input type="url" name="photo" placeholder="URL"/>
            </td>
            <td>
              <textarea type="text" name="ingredients" placeholder="Ingredients" />
            </td>
            <td>
              <textarea type="text" name="ingredients" placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
