const searchButton = document.querySelector("#search-button").addEventListener("click", () => {
    const foodName = document.querySelector("#search").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${foodName}`)
        .then((res) => res.json())
        .then((data) => displayFood(data));

    const displayFood = (foods) => {
        for (let i = 0; i < foods.meals.length; i++) {
            const food = foods.meals[i].strMeal;
            const h3 = document.createElement("h3");
            h3.className = "food-name"
            h3.innerText = food;
            const foodContainer = document.querySelector("#food-container");
            foodContainer.appendChild(h3);
        }
    };
});

const foodContainer = document.querySelector("#food-container").addEventListener("click", (e) => {
    console.log(e.target.innerText);
})

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then(res => res.json())
// .then(data => document.getElementById("food-container").innerText = data.meals[0].strMeal)

// data.meals[0].strMeal
// const div = document.createElement("div");
// const currentDiv = document.getElementById("food-container");
// currentDiv.appendChild(div);
