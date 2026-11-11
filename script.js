const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
<!DOCTYPE html>
<html>
<head>
    <title>Grofers Checkout</title>
</head>
<body>

    <table border="1" id="grocery-table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="item">Apple</td>
                <td class="prices">100</td>
            </tr>

            <tr>
                <td class="item">Banana</td>
                <td class="prices">50</td>
            </tr>

            <tr>
                <td class="item">Milk</td>
                <td class="prices">60</td>
            </tr>

            <tr>
                <td class="item">Rice</td>
                <td class="prices">200</td>
            </tr>
        </tbody>
    </table>

    <script>

        let prices = document.querySelectorAll(".prices");

        // Step 2: Calculate the total
        let total = 0;

        prices.forEach(function(price) {
            total = total + Number(price.textContent);
        });

        // Step 3: Create a new table row
        let newRow = document.createElement("tr");

        // Step 4: Create a new table cell
        let newCell = document.createElement("td");

        // Step 5: Add total to the cell
        newCell.colSpan = 2;
        newCell.textContent = "Total Price: ₹" + total;

        // Step 6: Add cell to the row
        newRow.appendChild(newCell);

        // Step 7: Add the row to the table
        document.querySelector("#grocery-table tbody").appendChild(newRow);

    </script>

</body>
</html>

  
};

getSumBtn.addEventListener("click", getSum);

