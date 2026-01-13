// 1. Initialize Icons
lucide.createIcons();

// 2. Calculator Logic
function calculate() {
    // Get inputs
    const lengthInput = document.getElementById('wallLength').value;
    const heightInput = document.getElementById('wallHeight').value;
    
    const length = parseFloat(lengthInput);
    const height = parseFloat(heightInput);

    // Validation
    if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
        document.getElementById('totalBricksDisplay').innerText = "0";
        document.getElementById('priceSection').classList.add('hidden');
        return;
    }

    // Calculations
    const area = length * height;
    // NOTE: Using *2 as per your request, though standard is often 4.
    const totalBricks = Math.ceil(area * 2); 

    // Price Tier Logic
    let pricePerBrick = 40;
    if (totalBricks >= 2000) {
        pricePerBrick = 38;
    } else if (totalBricks >= 501) {
        pricePerBrick = 39;
    }

    const totalPrice = totalBricks * pricePerBrick;

    // Update UI
    document.getElementById('totalBricksDisplay').innerText = totalBricks.toLocaleString();
    document.getElementById('pricePerBrickDisplay').innerText = pricePerBrick;
    document.getElementById('totalPriceDisplay').innerText = totalPrice.toLocaleString();
    
    // Show price section
    document.getElementById('priceSection').classList.remove('hidden');
}