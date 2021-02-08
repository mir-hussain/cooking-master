////////////////////To show the search result////////////////////

const searchButton = document.querySelector("#search-button").addEventListener("click", () => {
    const foodName = document.querySelector("#search").value;
    if (foodName === "") {
        return null; // To handle blank inputs
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${foodName}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayFood(data));
        document.querySelector("#search").value = "";
        errorOutput.innerText = "";
    }
});

const foodsContainer = document.querySelector("#foods-container");
const errorOutput = document.querySelector("#error");

const displayFood = (foods) => {
    if (foods.meals === null) {
        // To handle wrong input, typo or accidental inputs
        const error = "Sorry, we do not have this recipe. Please try again.";
        errorOutput.innerText = error;
    } else {
        foodsContainer.innerHTML = "";
        foods.meals.forEach((food) => {
            const foodContainer = document.createElement("div");
            foodContainer.className = "food";
            foodsContainer.appendChild(foodContainer);

            const foodCover = `
            <div onclick="detailedInfo('${food.idMeal}')">
                <img src="${food.strMealThumb}">
                <h3> ${food.strMeal} </h3>
            </div>
            `;
            foodContainer.innerHTML = foodCover;
        });
    }
};

////////////// To get the food details using id////////////

const detailedInfo = (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    const fullDetails = url;
    fetch(fullDetails)
        .then((res) => res.json())
        .then((data) => details(data.meals[0]));
};

const details = (foodInfo) => {
    const info = `
        <div id="info-container">
            <img src="${foodInfo.strMealThumb}">
            <div id="dish-info">
            <h2>${foodInfo.strMeal}</h2>
                <div id="ingredient">
                    <div>
                        <ul>
                            <li>${foodInfo.strMeasure1} ${foodInfo.strIngredient1} </li>
                            <li>${foodInfo.strMeasure2} ${foodInfo.strIngredient2} </li>
                            <li>${foodInfo.strMeasure3} ${foodInfo.strIngredient3} </li>
                            <li>${foodInfo.strMeasure4} ${foodInfo.strIngredient4} </li>
                            <li>${foodInfo.strMeasure5} ${foodInfo.strIngredient5} </li>
                            <li>${foodInfo.strMeasure6} ${foodInfo.strIngredient6} </li>
                            <li>${foodInfo.strMeasure7} ${foodInfo.strIngredient7} </li>
                            <li>${foodInfo.strMeasure8} ${foodInfo.strIngredient8} </li>
                            <li>${foodInfo.strMeasure9} ${foodInfo.strIngredient9} </li>
                            <li>${foodInfo.strMeasure10} ${foodInfo.strIngredient10} </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>${foodInfo.strMeasure11} ${foodInfo.strIngredient11} </li>
                            <li>${foodInfo.strMeasure12} ${foodInfo.strIngredient12} </li>
                            <li>${foodInfo.strMeasure13} ${foodInfo.strIngredient13} </li>
                            <li>${foodInfo.strMeasure14} ${foodInfo.strIngredient14} </li>
                            <li>${foodInfo.strMeasure15} ${foodInfo.strIngredient15} </li>
                            <li>${foodInfo.strMeasure16} ${foodInfo.strIngredient16} </li>
                            <li>${foodInfo.strMeasure17} ${foodInfo.strIngredient17} </li>
                            <li>${foodInfo.strMeasure18} ${foodInfo.strIngredient18} </li>
                            <li>${foodInfo.strMeasure19} ${foodInfo.strIngredient19} </li>
                            <li>${foodInfo.strMeasure20} ${foodInfo.strIngredient20} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    const detailsSection = document.getElementById("details-section");
    detailsSection.innerHTML = info;
};
