function compareJSON(json1, json2) {
    // Convert JSON objects to strings and compare
    const string1 = JSON.stringify(json1);
    const string2 = JSON.stringify(json2);
  
    // Return true if the strings are equal, otherwise false
    return string1 === string2;
  }
  
  // Example usage:
  const json1 = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  const json2 = {
    "age": 30,
    "city": "New York",
    "name": "John"
  };
  
  console.log(compareJSON(json1, json2)); // Output: true

  
  // Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Iterate over each country object and display its flag URL
  data.forEach(country => {
    const flagUrl = country.flags.svg;
    console.log(flagUrl);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country object and display its name, region, sub-region, and population
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subRegion = country.subregion;
      const population = country.population;

      console.log(`Country: ${name}, Region: ${region}, Sub-region: ${subRegion}, Population: ${population}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
