const spinButton = document.getElementById("spin-button");
function cycleImages(reel) {
   let cycleCount = 0;
   const maxCycles = 10; // Number of image changes
   const interval = setInterval(() => {
       reel.src = `Slot Machine Images/icon_${Math.floor(Math.random() * 4) + 1}_${Math.floor(Math.random() * 3) + 1}.png`;
       cycleCount++;
       if (cycleCount >= maxCycles) {
           clearInterval(interval);
       }
   }, 300);
}
spinButton.addEventListener("click", () => {
    //Disable spin button
    spinButton.disabled = true;
    // Get reel image elements
    const reel1 = document.getElementById("reel1").querySelector("img");
    const reel2 = document.getElementById("reel2").querySelector("img");
    const reel3 = document.getElementById("reel3").querySelector("img");

    // Add spinning animation class
    reel1.classList.add("spinning");
    reel2.classList.add("spinning");
    reel3.classList.add("spinning");

    // Start cycling images
    const interval1 = cycleImages(reel1);
    const interval2 = cycleImages(reel2);
    const interval3 = cycleImages(reel3);

    // Wait for animation to complete
    setTimeout(() => {
        // Clear any remaining intervals
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);

        // Remove spinning class
        reel1.classList.remove("spinning");
        reel2.classList.remove("spinning");
        reel3.classList.remove("spinning");

    // Update the images for each reel
    reel1.src = `Slot Machine Images/icon_${Math.floor(Math.random() * 4) + 1}_${Math.floor(Math.random() * 3) + 1}.png`;
    reel2.src = `Slot Machine Images/icon_${Math.floor(Math.random() * 4) + 1}_${Math.floor(Math.random() * 3) + 1}.png`;
    reel3.src = `Slot Machine Images/icon_${Math.floor(Math.random() * 4) + 1}_${Math.floor(Math.random() * 3) + 1}.png`;

    // Compare just the filename part of the paths
    const getFilename = (path) => path.split('/').pop();
    
    //Check for winning combinations
    if (getFilename(reel1.src) === getFilename(reel2.src) && 
        getFilename(reel2.src) === getFilename(reel3.src)) {
        document.getElementById("result").innerText = "Congratulations! You win!";
    } else {
        document.getElementById("result").innerText = "Sorry, you lose. Try again!";
    }
    // Re-enable button
        spinButton.disabled = false;
    }, 3000); // Match this to animation duration
});