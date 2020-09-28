// FUNCTIONS

function addNewStock(stockItem) {
    stockInfo = [stockItem, stockCountry.value]
    localStorage.setItem(localStorage.length, JSON.stringify(stockInfo));
}

searchButton.addEventListener("click", function(e) {
    e.preventDefault();

    if (stockSearch.value.length > 0) {
        addNewStock(stockSearch.value);
        stockSearch.value = "";
    }
    else {
        alert("코드를 정확히 입력해주세요.");
    }
    let bookmarkedItems = {...localStorage};

    const title = JSON.parse(bookmarkedItems[bookmarkedItems.length-1])[0];
    const country = JSON.parse(bookmarkedItems[bookmarkedItems.length-1])[1];
    stockDisplay(title, country);
})

// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=%255EKOSPI&region=KR", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });