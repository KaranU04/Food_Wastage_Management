
const content = document.getElementById('content');

function navigateTo(section) {
    content.innerHTML = '';
    switch (section) {
        case 'addItem':
            content.innerHTML = '<h2>Add Food Item</h2><p>Form will go here...</p>';
            break;
        case 'inventory':
            content.innerHTML = '<h2>Inventory</h2><p>List of food items will go here...</p>';
            break;
        case 'recipes':
            content.innerHTML = '<h2>Recipe Suggestions</h2><p>Recipes based on your ingredients will go here...</p>';
            break;
        default:
            content.innerHTML = '<h2>Welcome!</h2><p>Manage your food inventory, track expiry dates, and reduce wastage.</p>';
    }
}
