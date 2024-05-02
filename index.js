document.addEventListener("DOMContentLoaded", function () {
  fetchUrl();
});



// asyn function to fetch data from an API using async & await

async function fetchUrl() {

// fetching API
  const response = await fetch(
    "https://lucifer-quotes.vercel.app/api/quotes/60"
  );
  fetchData = await response.json();
  renderfetchData();
}

// Appending the data in table
try{
function renderfetchData() {
  console.log(fetchData)
  const userList = document.getElementById("quotesList");
  userList.innerHTML = "";
  fetchData.forEach((info, index) => {
   
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${info.quote}</td>
    <td>${info.author}</td>`
   
    userList.appendChild(row);
  });
}
}
catch(error)
{console.log("Error")}