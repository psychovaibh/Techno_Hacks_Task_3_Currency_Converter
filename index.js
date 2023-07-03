function Converter() {

    // ----------constant define for amount and from or to data-----------

    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    // ------------API calling start--------------------

    const api = 'https://v6.exchangerate-api.com/v6/70271574d6dc58903371fc6c/latest/USD';

    fetch(api)
        .then((response) => response.json()) //response taking and converted to data
        .then((data) => {
            if (data.result === 'success') {
                const fromRate = data.conversion_rates[from]; //taking conversion rate
                const toRate = data.conversion_rates[to];     // taking conversion rate

                const convertedAmount = (amount / fromRate) * toRate; //converting amount

                document.getElementById("result").value = convertedAmount.toFixed(3); //passing value to result column

            } else {
                document.getElementById("result").value = "Unable to fetch conversion rates."; //handling if rate not available
            }
        })
        .catch((error) => {
            document.getElementById("result").value = "An error occurred during the conversion."; //api error handling
        });
}
