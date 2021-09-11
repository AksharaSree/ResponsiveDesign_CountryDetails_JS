
function getCountries() {
  const xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhttp.send();
  xhttp.onload = function() {
      var countries = JSON.parse(this.responseText);
      onLoad(countries);
  }
}


function onLoad(countriesInfo) {
  
  let countryHtml = ` <div class="Box">
              <div class="Box-body">
                  <div class="row"> `;
  let countryDetail = "";
      countriesInfo.forEach(cntry=> { 
  
          countryDetail = `<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 theme-card-wrap">
              <div class="row">
                  <div class="col-12 country-flag">
                      <img src="${cntry.flag}" alt="" class="img-display">
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 country-detail">
                      <label for="country-name" class="country-title"> ${cntry.name} </label>        
                      <label> <span>Population:</span> ${cntry.population} </label>
                      <label> <span>Region:</span>  ${cntry.region} </label>
                      <label> <span>Capital:</span>  ${cntry.capital} </label>
                  </div>
              </div>
              </div>`;
          countryHtml = countryHtml + countryDetail;
      });
  
      countryHtml = countryHtml + `</div>    
                  </div>
              </div>`;
  
  const divContianer = document.createElement('div');
  divContianer.className = "container";
  divContianer.innerHTML = countryHtml;
  document.body.append(divContianer);
  
  
    }
  
  
  
      window.onload = getCountries();
  