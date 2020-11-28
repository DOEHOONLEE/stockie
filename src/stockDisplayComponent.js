// 코스피/ 코스닥 컴포넌트
function indexDisplay(title, price, diff) {
    if (title == 'KOSPI.KS') {
        kospiIndex.innerHTML = price;
        kospiDiff.innerHTML = diff;
    }
    else {
        kosdaqIndex.innerHTML = price;
        kosdaqDiff.innerHTML = diff;
    }
}

// 주식종목 즐겨찾기 컴포넌트
function stockItemAdder(itemTitle, itemPrice, itemDiff) {
    if (document.getElementById(itemTitle !== null)) {
        document.getElementById(itemTitle).childNodes[0].childNodes[1].innerHTML = itemPrice;
        document.getElementById(itemTitle).childNodes[0].childNodes[2].innerHTML = itemDiff;
    }
    else {
        const itemRow = document.createElement('DIV');
        itemRow.className = "row";
        itemRow.setAttribute("id", itemTitle);
        
        const itemCol = document.createElement('DIV');
        itemCol.className = "col stock-item";
        itemCol.style.backgroundColor = (rise) ? "rgb(255,153,204, 0.6)" : "rgb(135,206,235, 0.6)";
        
        const title = document.createElement('SPAN');
        title.className = "stock-item-title";

        const price = document.createElement('SPAN');
        price.className = "stock-item-price";

        const diff = document.createElement('SPAN');
        diff.className = "stock-item-difference";

        title.innerHTML = itemTitle.toUpperCase();
        price.innerHTML = itemPrice;
        diff.innerHTML = itemDiff;

        itemCol.appendChild(title);
        itemCol.appendChild(price);
        itemCol.appendChild(diff);
        itemRow.appendChild(itemCol);
        stockItemContainer.appendChild(itemRow);
    }
}