let facts = [];
let currentFactIndex = -1;

function generateFacts() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Please enter your name!');
        return;
    }

    const details = document.getElementById('details').value.trim();
    if (!details) {
        alert('Please enter some details about yourself!');
        return;
    }

    const lines = details.split('\n').filter(line => line.trim());
    facts = lines.map(detail => {
        return `${name} loves ${detail.charAt(0).toLowerCase() + detail.slice(1)}!`;
    });

    document.querySelector('.output-section').style.display = 'block';
    showNextFact();
}

function showNextFact() {
    if (facts.length === 0) return;
    
    currentFactIndex++;
    if (currentFactIndex >= facts.length) {
        currentFactIndex = 0;
    }
    
    document.getElementById('factDisplay').textContent = facts[currentFactIndex];
}
