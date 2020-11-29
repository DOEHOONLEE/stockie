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
    
    stockDisplay(title, country);
});

stockDisplay('KOSPI.KS', 'KR');
stockDisplay('^KQ11', 'KR');

// const kospiURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=KOSPI.KS&region=KR`;
// const kosdaqURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=KOSDAQ.KS&region=KR`;

// const kospiResponse = await fetch(kospiURL, {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a",
//         "Content-Type": "application/json"
//     }
// });

// const kosdaqResponse = await fetch(kosdaqURL, {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a",
//         "Content-Type": "application/json"
//     }
// });

// const kospiData = await kospiResponse.json();
// const kosdaqData = await kosdaqResponse.json();

// kospiIndex.innerHTML = kospiData.quoteResponse.result[0].regularMarketPrice;
// kospiDiff.innerHTML = `${kospiData.quoteResponse.result[0].regularMarketChange.toFixed(2)} (${kospiData.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)}%)`;

// kosdaqIndex.innerHTML = kosdaqData.quoteResponse.result[0].regularMarketPrice;
// kosdaqDiff.innerHTML = `${kosdaqData.quoteResponse.result[0].regularMarketChange.toFixed(2)} (${kosdaqData.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)}%)`;



// async function stockDisplay(title, country) {
//     const targetURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=${title}&region=${country}`;

//     const response = await fetch(targetURL, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//             "x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a",
//             "Content-Type": "application/json"
//     	}
//     });

//     const data = await response.json();

//     title = (data.quoteResponse.result[0].longName || data.quoteResponse.result[0].symbol);
//     price = data.quoteResponse.result[0].regularMarketPrice;
//     diff = `${data.quoteResponse.result[0].regularMarketChange.toFixed(2)} (${data.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)}%)`;

//     (data.quoteResponse.result[0].regularMarketChange > 0) ? rise = true : rise = false;
//     stockItemAdder(title, price, diff);
// }