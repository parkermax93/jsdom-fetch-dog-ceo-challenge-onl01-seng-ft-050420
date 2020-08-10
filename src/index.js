console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImg() { 
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json.message));
}

function renderImages(images) {
  const div = document.getElementByID('dog-image-contrainer');
  images.forEach(imgSource => { 
    const img = document.createElement('img');
    img.src = imgSource;
    div.appendChild(img);
  });
}