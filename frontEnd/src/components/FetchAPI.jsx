import React from "react";

function FetchAPI() {

  const getApi = () => {
    fetch('http://localhost:3000/task')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <div>
      <button onClick={ getApi }>FetchAPI</button>


    </div>
  )
}

export default FetchAPI;