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

const fieldOne = document.querySelector(".field-one");
const fieldTwo = document.querySelector(".field-two");
const fieldThree = document.querySelector(".field-three");
const fieldFour = document.querySelector(".field-four");
const fieldFive = document.querySelector(".field-five");
const fieldSix = document.querySelector(".field-six");
const fieldSeven = document.querySelector(".field-seven");
const fieldEight = document.querySelector(".field-eight");
const fieldNine = document.querySelector(".field-nine");

const cardDescriptionItem = document.querySelector('.card-description-item')
const cardDescriptionBlock = document.querySelector('.card-description-block')

const errorItem = document.querySelector('.error-item')
const errorBlock = document.querySelector('.error-block')
const errorRecipe = document.querySelector('.error-recipe')

const itemListBox = document.querySelector('.item-list-box')

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
				cardDescriptionItem.textContent = searchedItem.description;
			} else {
				console.log("Nie znaleziono przedmiotu");
				errorItem.textContent = 'The item does not exist'
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
				cardDescriptionBlock.textContent = searchedBlock.description
			} else {
				console.log("Nie znaleziono przedmiotu");
				errorBlock.textContent = 'The block does not exist'
			}
		})
		.catch((error) => {
			console.error("Błąd podczas pobierania danych:", error);
		});
};
// const getRecipes = () => {
// 	const recipes = inputSearchRecipes.value;
// 	const URL_RECIPES = API_URL + API_RECIPES;
// 	fetch(URL_RECIPES, options)
// 		.then((res) => res.json())
// 		.then((data) => {

// 			const searchedRecipes = data.find(
// 				(recipe) => recipe.item.toLowerCase() === recipes.toLowerCase()
// 			);

// 			if (searchedRecipes) {
// 				textMcRecipes.textContent = searchedRecipes.item;
// 			} else {
// 				console.log("Nie znaleziono przedmiotu");
// 			}
// 		})
// 		.catch((error) => {
// 			console.error("Błąd podczas pobierania danych:", error);
// 		});
// };
const rec = () => {
	const recipes2 = inputSearchRecipes.value;
	const URL_RECIPES2 = API_URL + API_RECIPES;
	fetch(URL_RECIPES2, options)
		.then((res) => res.json())
		.then((data) => {
			const searchedRecipes = data.find(
				(recipe) => recipe.item.toLowerCase() === recipes2.toLowerCase()
			);
			//console.log(crafting[1]);
			if (searchedRecipes) {

				const re = searchedRecipes.recipe;

				for (let i = 0; i <= 9; i++) {
					//console.log(re[i]);
					if (i == 0) {
						// crafting[0].textContent = re[0].textContent
						if (re[0] !== null) {
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[0].toLowerCase()) {
											console.log(element.image);
											fieldOne.setAttribute("src", element.image);
											console.log(fieldOne);
										}
									});
									// console.log(craftingItem);
									// if(craftingItem){
									// 	fieldOne.setAttribute('src', craftingItem.image)
									// }
									// console.log(craftingItem);
								});

							//crafting[0].textContent = re[0]
						} else if(re[0]==null){
							fieldOne.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 1) {
						if (re[1] !== null) {
							//crafting[1].textContent = re[1]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[1].toLowerCase()) {
											console.log(element.image);
											fieldTwo.setAttribute("src", element.image);
											console.log(fieldTwo);
										}
									});
								});
						} else if(re[1]==null) {
							fieldTwo.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 2) {
						if (re[2] !== null) {
							//crafting[2].textContent = re[2]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[2].toLowerCase()) {
											console.log(element.image);
											fieldThree.setAttribute("src", element.image);
											console.log(fieldThree);
										}
									});
								});
						} else if(re[2]==null){
							fieldThree.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 3) {
						if (re[3] !== null) {
							//crafting[3].textContent = re[3]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[3].toLowerCase()) {
											console.log(element.image);
											fieldFour.setAttribute("src", element.image);
											console.log(fieldFour);
										}
									});
								});
						} else if(re[3]==null){
							fieldFour.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 4) {
						if (re[4] !== null) {
							//crafting[4].textContent = re[4]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[4].toLowerCase()) {
											console.log(element.image);
											fieldFive.setAttribute("src", element.image);
											console.log(fieldFive);
										}
									});
								});
						} else if(re[4]==null){
							fieldFive.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 5) {
						if (re[5] !== null) {
							//crafting[5].textContent = re[5]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[5].toLowerCase()) {
											console.log(element.image);
											fieldSix.setAttribute("src", element.image);
											console.log(fieldSix);
										}
									});
								});
						} else if(re[5]==null){
							fieldSix.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 6) {
						if (re[6] !== null) {
							//crafting[6].textContent = re[6]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[6].toLowerCase()) {
											console.log(element.image);
											fieldSeven.setAttribute("src", element.image);
											console.log(fieldSeven);
										}
									});
								});
						} else if(re[6]==null){
							fieldSeven.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 7) {
						if (re[7] !== null) {
							//crafting[7].textContent = re[7]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[7].toLowerCase()) {
											console.log(element.image);
											fieldEight.setAttribute("src", element.image);
											console.log(fieldEight);
										}
									});
								});
						} else if(re[7]==null){
							fieldEight.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					} else if (i == 8) {
						if (re[8] !== null) {
							//crafting[8].textContent = re[8]
							fetch(API_URL + API_ITEMS)
								.then((res) => res.json())
								.then((data) => {
									const craftingItem = data.forEach((element) => {
										if (element.name.toLowerCase() === re[2].toLowerCase()) {
											console.log(element.image);
											fieldNine.setAttribute("src", element.image);
											console.log(fieldNine);
										}
									});
								});
						} else if(re[8]==null){
							fieldNine.setAttribute("src", " ")
							console.log("Błąd, wartość pola to null!");
						}
					}
				}
			}else{
				errorRecipe.textContent='The recipe does not exist'
			}
			// data.forEach(element => {
			// 	const elem = element.recipe

			// 	elem.forEach(el =>{
			// 		console.log(el);
			// 	})
			// });
		});
};

const showItem = () =>{
	const URL_ITEMS = API_URL + API_ITEMS;
	fetch(URL_ITEMS, options)
		.then((res) => res.json())
		.then((data) =>{
			data.forEach((el)=>{
				console.log(el.length);

					const itListField = document.createElement('div')
					itListField.classList.add('item-list-field')
					

					const pListName = document.createElement('p')
					pListName.classList.add('item-list-name')
					
					pListName.textContent = el.name;
					

					const imgListName = document.createElement('img')
					imgListName.classList.add('item-list-img')
					
					imgListName.src = el.image;
		            imgListName.alt = el.name;

					itListField.append(pListName)
					itListField.append(imgListName)
					itemListBox.append(itListField)
				
			})
			
		}).catch((error) => {
            console.error("Błąd podczas pobierania danych:", error);
        });
	
}
showItem()
btnSearchRecipes.addEventListener("click", rec);
// btnSearchRecipes.addEventListener("click", getRecipes);
btnSearchBlock.addEventListener("click", getBlocks);
btnSearchItems.addEventListener("click", getItems);
