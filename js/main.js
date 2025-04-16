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
const rec = () =>{
	const recipes2 = inputSearchRecipes.value;
	const URL_RECIPES2 = API_URL + API_RECIPES;
	fetch(URL_RECIPES2, options).then((res)=>res.json()).then((data)=>{
	
		const searchedRecipes = data.find(
			(recipe) => recipe.item.toLowerCase() === recipes2.toLowerCase()
		);
		//console.log(crafting[1]);
		if(searchedRecipes){
			const re = searchedRecipes.recipe
			
			for(let i=0;i<=9;i++){
				//console.log(re[i]);
				if(i==0){
					// crafting[0].textContent = re[0].textContent
					if(re[0] !== null){
						crafting[0].textContent = re[0]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}else if(i==1){
					if(re[1] !== null){
						crafting[1].textContent = re[1]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==2){
					if(re[2] !== null){
						crafting[2].textContent = re[2]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==3){
					if(re[3] !== null){
						crafting[3].textContent = re[3]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==4){
					if(re[4] !== null){
						crafting[4].textContent = re[4]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==5){
					if(re[5] !== null){
						crafting[5].textContent = re[5]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==6){
					if(re[6] !== null){
						crafting[6].textContent = re[6]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==7){
					if(re[7] !== null){
						crafting[7].textContent = re[7]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
				else if(i==8){
					if(re[8] !== null){
						crafting[8].textContent = re[8]

						
					}else{
						console.log("Błąd, wartość pola to null!");
					}
				}
			}
		}
		// data.forEach(element => {
		// 	const elem = element.recipe
			
		// 	elem.forEach(el =>{
		// 		console.log(el);
		// 	})
		// });
	})
}

btnSearchRecipes.addEventListener('click', rec)
// btnSearchRecipes.addEventListener("click", getRecipes);
btnSearchBlock.addEventListener("click", getBlocks);
btnSearchItems.addEventListener("click", getItems);
