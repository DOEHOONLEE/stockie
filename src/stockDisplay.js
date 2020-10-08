// 즐겨찾기 된 주식종목들 리스트에 보여주기
async function stockDisplay(title, country) {
    if (title === "KOSPI") {
        title = "^KOSPI";
    }
    if (title === "KOSDAQ") {
        title = "^KOSDAQ";
    }
    const targetURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=${title}&region=${country}`;
    
    const response = await fetch(targetURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a",
            "Content-Type": "application/json"
    	}
    });

    const data = await response.json();
    
    title = (data.quoteResponse.result[0].longName || data.quoteResponse.result[0].symbol);
    price = data.quoteResponse.result[0].regularMarketPrice;
    diff = `${data.quoteResponse.result[0].regularMarketChange.toFixed(2)} (${data.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)}%)`;
    
    console.log(`${title}`)
    console.log(data.quoteResponse.result[0]);

    if (title == "^KOSPI") {
        console.log("HI");
        kospiANDkosdaq(title, price, diff);
    }
    else if (title == "^KOSDAQ") {
        kospiANDkosdaq(title, price, diff);
    }
    else {
        (data.quoteResponse.result[0].regularMarketChange > 0) ? rise = true : rise = false;
        stockItemAdder(title, price, diff);
    }
}

const bookmarkedItems = {...localStorage};

for (let elem in bookmarkedItems) {
    const title = JSON.parse(bookmarkedItems[elem])[0];
    const country = JSON.parse(bookmarkedItems[elem])[1];
    stockDisplay(title, country);
}

setInterval(function() {
    window.location.reload();
}, 100000);

searchButton.addEventListener("click", function() {
    window.location.reload();
})