document.getElementById('check-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = sanitizedInput === sanitizedInput.split('').reverse().join('');

    resultElement.textContent = `${input} is ${isPalindrome ? '' : 'not '}a palindrome`;
});
