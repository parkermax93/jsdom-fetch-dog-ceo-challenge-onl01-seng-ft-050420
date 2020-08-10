console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImg() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json.message));
};

function renderImages(images) {
  const div = document.getElementById('dog-image-container');
  images.forEach(imgSource => {
    const img = document.createElement('img');
    img.src = imgSource;
    div.appendChild(img);
  });
};

function fetchBreed() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreed(Object.keys(json.message)))
}

function renderBreed(breeds) {
  const ul = document.getElementById('dog-breeds');
  const select = document.getElementById('breed-dropdown');

  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);

    li.addEventListener('click', function() {
      li.style.color = 'firebrick';
    })
  })

  select.addEventListener('change', function() {
    const letter = select.value;
    const lis = ul.getElementsByTagName('li');
    Array.from(lis).forEach(li => {
      const firstLetter = li.innerText[0];
      if (firstLetter == letter) {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    })
  });
};

document.addEventListener('DOMContentLoaded', function() {
  fetchImg();
  fetchBreed();
});