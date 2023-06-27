let searchValue = document.getElementById("searchInput")
let selectOption = document.getElementById("select-option")
let countrySpace = document.getElementById("countryDiv")
let pagintaionBox = document.getElementById("paginationContainer")

const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData()
  .then((data) => {
   console.log(data);
   displayCountries()
  })
  .catch((error) => {
    console.error('Error:', error);
  });