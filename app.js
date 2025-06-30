const factDisplay = document.getElementById('facts');
const button = document.querySelector('.btn');
const loader = document.getElementById('loader');
const catImg = document.getElementById('cat-img');

button.addEventListener('click', getCatContent);

async function getCatContent() {
  try {
    // Show loader and clear previous content
    loader.hidden = false;
    factDisplay.textContent = '';
    catImg.src = '';

    // Fetch cat fact
    const factRes = await fetch('https://catfact.ninja/fact');
    const factData = await factRes.json();

    // Fetch random cat image
    const imgRes = await fetch('https://api.thecatapi.com/v1/images/search');
    const imgData = await imgRes.json();

    // Update UI
    factDisplay.textContent = factData.fact;
    catImg.src = imgData[0].url;
  } catch (error) {
    factDisplay.textContent = "😿 Couldn't load cat content. Please try again.";
    console.error(error);
  } finally {
    loader.hidden = true;
  }
}
