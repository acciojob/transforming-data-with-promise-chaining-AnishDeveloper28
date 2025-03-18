document.getElementById("btn").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
    }

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num * 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
        }, 2000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num - 3;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num / 2;
            outputDiv.textContent = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num + 10;
            outputDiv.textContent = `Final Result: ${result}`;
            resolve(result);
        }, 1000);
    }));
});
