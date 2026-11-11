
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Select all prices
    const prices = document.querySelectorAll(".prices");

    // Calculate total
    let total = 0;

    prices.forEach(function(price) {
        total = total + Number(price.textContent);
    });

    // Create a new row
    const newRow = document.createElement("tr");

    // Create a new cell
    const newCell = document.createElement("td");

    // Add total to the cell
    newCell.colSpan = 2;
    newCell.textContent = "Total Price: ₹" + total;

    // Add cell to row
    newRow.appendChild(newCell);

    // Add row to table
    document.querySelector("#grocery-table tbody").appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);
