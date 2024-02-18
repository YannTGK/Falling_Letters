setTimeout(function() {
    let textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li'); // Select text-containing elements
    textElements.forEach(element => {
        element.classList.add('fall');
    });
}, 1000);
