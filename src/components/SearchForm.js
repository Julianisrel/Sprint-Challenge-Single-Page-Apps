import React, { useState } from "react";
// The search form I called handleChange whenever text was inputted and 
// used that function to update the name inputted
​
const SearchForm = ({ handleSubmit }) => {
  const [ name, setName ] = useState('')
  const handleChange = (e) => {
    console.log("e: ", e);
    setName(e.target.value)
  }
​
  return (
    <form onSubmit={(e) => handleSubmit(name, e)}>
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
  </form>
  );
}
​
export default SearchForm;









