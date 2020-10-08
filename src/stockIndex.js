// FUNCTIONS

// 검색창을 이용해 새로운 종목 로컬 스토리지에 추가하기
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
    console.log(`${title}..//..${country}`)
    stockDisplay(title, country);
});