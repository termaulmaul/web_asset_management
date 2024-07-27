// script.js

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-group input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const placeholder = input.nextElementSibling;
            placeholder.style.visibility = 'hidden';
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                const placeholder = input.nextElementSibling;
                placeholder.style.visibility = 'visible';
            }
        });
    });
});
