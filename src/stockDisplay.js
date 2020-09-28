async function stockDisplay(title, country) {
    if (title === "KOSPI") {
        title = "^KOSPI";
    }
    if (title === "KOSDAQ") {
        title = "^KOSDAQ";
    }
    const targetURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=${title}&region=${country}`
    const response = await fetch(targetURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "441f41698cmsheee535d933b00e0p1b09ffjsn257927ff9a9a",
            "Content-Type": "application/json"
    	}
    });

    const data = await response.json();

    console.log(data.quoteResponse.result[0]);
    title = (data.quoteResponse.result[0].longName || data.quoteResponse.result[0].symbol).split(" ")[0];
    price = data.quoteResponse.result[0].regularMarketPrice;
    diff = `${data.quoteResponse.result[0].regularMarketChange.toFixed(2)} (${data.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)}%)`;
    
    (data.quoteResponse.result[0].regularMarketChange > 0) ? rise = true : rise = false;
    stockItemAdder(title, price, diff);
}

const bookmarkedItems = {...localStorage};

for (let elem in bookmarkedItems) {
    const title = JSON.parse(bookmarkedItems[elem])[0];
    const country = JSON.parse(bookmarkedItems[elem])[1];
    stockDisplay(title, country);
}