const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals =>{
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="getApiByMealId(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
        </div>
      </div>
        `
        searchResult.appendChild(div);
    })
}

const getApiByMealId = mealId =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
   fetch(url)
   .then(res => res.json())
   .then(data => displaySearchResultById(data.meals[0]));
}

const displaySearchResultById = meal =>{
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent='';
  const div = document.createElement('div');
  div.classList.add('card','mx-auto','w-30');
  div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
          <a target="-blank" href="${meal.strYoutube}" class="btn btn-danger">Review Link</a>
        </div>
  `
  mealDetails.appendChild(div)

}