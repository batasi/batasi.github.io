
        let display = document.getElementById('display');
        let currentInput = '';

        function appendToDisplay(value) {
            currentInput += value;
            display.innerText = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            display.innerText = '0';
        }

        function calculateResult() {
            try {
                const result = eval(currentInput);
                if (!isNaN(result)) {
                    display.innerText = result;
                } else {
                    alert('Invalid input');
                    clearDisplay();
                }
            } catch (error) {
                alert('Invalid input');
                clearDisplay();
            }
        }
    