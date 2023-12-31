const searchFrom = document.getElementById('search-form');
const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-button');
const searchResult = document.querySelector('.search-result');
const showMore = document.getElementById('show-more');

const accessKey = "ENTER YOUR ACCESS KEY"
let keyword = "";
let page = 0;

async function searchImage(){
  keyword = inputBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const res = await fetch(url);
  const data = await res.json();

  if(page === 1){
    searchResult.innerHTML = "";
  }
  const results = data.results;
  results.map((result)=>{
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })
  showMore.style.display = "block";
}
searchFrom.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchImage();
});
showMore.addEventListener("click", ()=>{
  page++;
  searchImage();
})
