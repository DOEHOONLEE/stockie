function stockItemAdder(itemTitle, itemPrice, itemDiff) {
    const itemRow = document.createElement('DIV');
    itemRow.className = "row";
    itemRow.setAttribute("id", itemTitle);
    
    const itemCol = document.createElement('DIV');
    itemCol.className = "col stock-item";
    itemCol.style.backgroundColor = (rise) ? "hotpink" : "skyblue";
    
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