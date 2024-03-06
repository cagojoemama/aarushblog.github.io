function myFunction() {
    setTimeout(function() {
        alert('Oh you actually wanted a prize, well here have it.');
        var leoDiv2 = document.getElementById('leoText');
        leoDiv2.innerHTML = '  <h1 style="color: aliceblue; font-size: 1.5em"; margin: 0; padding: 0;> Have a mango and mango juice as your prize ������ </h1>';
    }, 2000); 
}
function myHomework() {
    fetch('Hw.html')
        .then(response => response.text())
        .then(html => {
            const container = document.createElement('div');
            container.innerHTML = html;
            document.body.append(container);

            // Create a container for the hide button and center it
            const hideButtonContainer = document.createElement('div');
            hideButtonContainer.id = 'hideButtonContainer';
            container.append(hideButtonContainer);

            // Create the hide button and add it to the container
            const hideButton = document.createElement('button');
            hideButton.id = 'hideButton'; // Set the ID for the hide button
            hideButton.textContent = 'Hide';
            hideButtonContainer.append(hideButton);

            // Add event listener to toggle visibility
            hideButton.addEventListener('click', () => {
                container.style.display = container.style.display === 'none' ? 'block' : 'none';
                hideButton.textContent = container.style.display === 'none' ? 'Show' : 'Hide';
            });
        })
        .catch(error => {
            console.error('Error fetching homework:', error);
        });
}


