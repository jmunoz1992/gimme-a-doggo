document.getElementById("doggo-btn").addEventListener("click", async () => {
  const currentImg = document.getElementById("doggo-img");
  const contentDiv = document.getElementById("button-and-img");

  if (currentImg) {
    contentDiv.removeChild(currentImg);
  }

  let imgSrc = "";
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const answer = await res.json();
  imgSrc = answer.message;

  if (imgSrc !== "") {
    const img = document.createElement('img');
    img.id = "doggo-img";
    img.src = imgSrc;
    img.width = 250;
    contentDiv.appendChild(img);
  }
});
