
(async () => {
  let imgSrc = "";
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const answer = await res.json();
  imgSrc = answer.message;
  console.log("imgSrc: ", imgSrc);

  if (imgSrc !== "") {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.width = 500;
    document.body.appendChild(img);
  }
})()
