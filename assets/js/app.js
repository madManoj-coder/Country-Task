const cl = console.log;

const names = document.getElementById("name");
const population = document.getElementById("population");
const capital = document.getElementById("capital");
const cardContainer = document.getElementById("cardContainer");
const allCountrySearch = document.getElementById("allCountrySearch")
const iconName = document.getElementById("iconName")
const iconCapital = document.getElementById("iconCapital")
const iconPopulation = document.getElementById("iconPopulation")


const counrtyCard = (arr) => {
  let result = ""
  arr.forEach(ele => {
    result += `<div class="col-xl-2 col-sm-4 col-md-3 mt-4">
                      <div class="thumbnail countrycard">
                          <figure> 
                               <img src="${ele.flag}" alt="${ele.name}" title="${ele.name}">
                          </figure>
                          <div class="caption">
                              <h3> ${ele.name}</h3>
                              <p>Capital : <span>${ele.capital}</span></p>
                              <p>Languages : <span>${ele.languages}</p>
                              <p>Population : <span>${ele.population}</span></p>
                          </div>
                      </div>
                  </div> `
  })
  cardContainer.innerHTML = result
}
countries.forEach(ele => ele.capital ? ele.capital : ele.capital = "NA")
counrtyCard(countries)


let flag;
const onclickName = (eve) => {
  let btns = eve.target.innerText.toLowerCase().trim()
  if (btns === `name`) {
    let sortname = countries.sort((country1, country2) => {
      let p = country1.name.toLowerCase();
      let m = country2.name.toLowerCase();
      if (p < m) {
        return -1
      } if (p > m) {
        return 1
      }
      return 0
    })
    cl(sortname)

    if (flag) {
      iconName.classList.remove(`fa-arrow-up`)
      iconName.classList.add(`fa-arrow-down`)
      counrtyCard(sortname)
      // flag = false;
    } else {
      iconName.classList.remove(`fa-arrow-down`)
      iconName.classList.add(`fa-arrow-up`)
      counrtyCard(sortname.reverse())
      // flag = true;
    }
    flag = !flag
  } else if (btns === `capital`) {
    if (iconCapital.className.includes(`fa-arrow-up`)) {
      let ascendingarr = countries.sort((a, b) => a.capital > b.capital ? 1 : -1);
      counrtyCard(ascendingarr)
      iconCapital.classList.remove(`fa-arrow-up`)
      iconCapital.classList.add(`fa-arrow-down`)
    } else {
      let descendingarr = countries.sort((a, b) => a.capital > b.capital ? -1 : 1);
      counrtyCard(descendingarr)
      iconCapital.classList.add(`fa-arrow-up`)
      iconCapital.classList.remove(`fa-arrow-down`)
    }
  } else if (btns === `population`) {
    if (iconPopulation.className.includes(`fa-arrow-up`)) {
      let ascendingarr = countries.sort((a, b) => a.population > b.population ? 1 : -1);
      counrtyCard(ascendingarr)
      iconPopulation.classList.remove(`fa-arrow-up`)
      iconPopulation.classList.add(`fa-arrow-down`)
    } else {
      let descendingarr = countries.sort((a, b) => a.population > b.population ? -1 : 1);
      counrtyCard(descendingarr)
      iconPopulation.classList.add(`fa-arrow-up`)
      iconPopulation.classList.remove(`fa-arrow-down`)
    }
  }
}


names.addEventListener("click", onclickName)
capital.addEventListener("click", onclickName)
population.addEventListener("click", onclickName)


const onSearchCountry = (eve) => {
    let enteredValue = eve.target.value;
    let newCountryArray = countries.filter(ele => {
        // return ele.capital?.toLowerCase().includes(enteredValue);
        console.log(ele.languages);
        return ele.capital?.toLowerCase().includes(enteredValue);
    })
    counrtyCard(newCountryArray);
}


allCountrySearch.addEventListener("keyup", onSearchCountry)


