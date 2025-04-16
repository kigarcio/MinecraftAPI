const inputSearchItems = document.querySelector(".input-search-items");
const btnSearchItems = document.querySelector(".card-submit-items");

const inputSearchBlock = document.querySelector(".input-search-block");
const btnSearchBlock = document.querySelector(".card-submit-block");

const inputSearchRecipes = document.querySelector(".input-search-recipes");
const btnSearchRecipes = document.querySelector(".card-submit-recipes");

const imgMcItems = document.querySelector(".img-mc-items");
const textMcItems = document.querySelector(".card-text-items");

const imgMcBlock = document.querySelector(".img-mc-block");
const textMcBlock = document.querySelector(".card-text-block");

const imgMcRecipes = document.querySelector(".img-mc-recipes");
const textMcRecipes = document.querySelector(".card-text-recipes");

const crafting = document.querySelectorAll(".crafting div");

const API_URL = "https://minecraft-api.vercel.app/api";
const API_ITEMS = "/items";
const API_BLOCK = "/blocks";
const API_RECIPES = "/crafting-recipes";
const options = { method: "GET" };

const getItems = () => {
	const items = inputSearchItems.value;
	const URL_ITEMS = API_URL + API_ITEMS;
	fetch(URL_ITEMS, options)
		.then((res) => res.json())
		.then((data) => {
			const searchedItem = data.find(
				(item) => item.name.toLowerCase() === items.toLowerCase()
			);

			if (searchedItem) {
				console.log("Znaleziono przedmiot:", searchedItem);
				imgMcItems.setAttribute("src", searchedItem.image);
				textMcItems.textContent = searchedItem.name;
			} else {
				console.log("Nie znaleziono przedmiotu");
			}
		})
		.catch((error) => {
			console.error("Błąd podczas pobierania danych:", error);
		});
};
const getBlocks = () => {
	const blocks = inputSearchBlock.value;
	const URL_BLOCKS = API_URL + API_BLOCK;
	fetch(URL_BLOCKS, options)
		.then((res) => res.json())
		.then((data) => {
			const searchedBlock = data.find(
				(block) => block.name.toLowerCase() === blocks.toLowerCase()
			);
			if (searchedBlock) {
				console.log("Znaleziono przedmiot:", searchedBlock);
				imgMcBlock.setAttribute("src", searchedBlock.image);
				textMcBlock.textContent = searchedBlock.name;
			} else {
				console.log("Nie znaleziono przedmiotu");
			}
		})
		.catch((error) => {
			console.error("Błąd podczas pobierania danych:", error);
		});
};
const getRecipes = () => {
	const recipes = inputSearchRecipes.value;
	const URL_RECIPES = API_URL + API_RECIPES;
	fetch(URL_RECIPES, options)
		.then((res) => res.json())
		.then((data) => {
			const searchedRecipes = data.find(
				(recipe) => recipe.item.toLowerCase() === recipes.toLowerCase()
			);
			const rec = Object.assign({}, searchedRecipes.recipe)
			rec.foreach(r =>{
				console.log(r);
			})
			if (searchedRecipes) {
				textMcRecipes.textContent = searchedRecipes.item;
			} else {
				console.log("Nie znaleziono przedmiotu");
			}
		})
		.catch((error) => {
			console.error("Błąd podczas pobierania danych:", error);
		});
};
btnSearchRecipes.addEventListener("click", getRecipes);
btnSearchBlock.addEventListener("click", getBlocks);
btnSearchItems.addEventListener("click", getItems);
