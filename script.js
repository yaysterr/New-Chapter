document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const dollImage = document.getElementById('dollImage');
    const jerseyImage = document.getElementById('jerseyImage');
    const nameInput = document.getElementById('nameInput');
    const classNameInput = document.getElementById('classNameInput');
    const sizeInput = document.getElementById('sizeInput');
    const reserveButton = document.getElementById('reserveButton');

    // Initial image sources
    let dollSrcFront = "asset/doll-front.webp";
    let dollSrcBack = "asset/doll-back.webp";
    let jerseySrcFront = "asset/jersey-front.png";
    let jerseySrcBack = "asset/jersey-back.png";

    // --- Doll Image Hover Effect ---
    dollImage.addEventListener('mouseenter', () => {
        dollImage.src = dollSrcBack;
    });
    dollImage.addEventListener('mouseleave', () => {
        dollImage.src = dollSrcFront;
    });

    // --- Jersey Image Hover Effect ---
    jerseyImage.addEventListener('mouseenter', () => {
        jerseyImage.src = jerseySrcBack;
    });
    jerseyImage.addEventListener('mouseleave', () => {
        jerseyImage.src = jerseySrcFront;
    });

    // --- Input Field Placeholder Logic (Svelte's on:focus/on:blur equivalent) ---

    // Function to handle focus and blur for input placeholders
    function setupPlaceholderLogic(inputElement, defaultPlaceholder) {
        inputElement.addEventListener('focus', () => {
            if (inputElement.value === '') {
                inputElement.placeholder = '';
            }
        });
        inputElement.addEventListener('blur', () => {
            if (inputElement.value === '') {
                inputElement.placeholder = defaultPlaceholder;
            }
        });
    }

    setupPlaceholderLogic(nameInput, 'Enter your name');
    setupPlaceholderLogic(classNameInput, 'Enter your class');
    setupPlaceholderLogic(sizeInput, 'Enter your size(s,m,l,xl)');

    // --- Reserve Button Logic (Example: log values to console) ---
    reserveButton.addEventListener('click', () => {
        const name = nameInput.value;
        const className = classNameInput.value;
        const size = sizeInput.value;

        // You can add validation here before logging/sending data
        if (name && className && size) {
            console.log("Reservation Details:");
            console.log("Name:", name);
            console.log("Class:", className);
            console.log("Size:", size);
            alert(`Reservation for ${name} from ${className}, size ${size} submitted! (Check console for details)`);
            // Here you would typically send this data to a server
            // e.g., using fetch() API
        } else {
            alert("Please fill in all reservation details.");
        }
    });
});