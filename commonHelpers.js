import"./assets/styles-86c5b403.js";import{S as c}from"./assets/vendor-870f0eb5.js";const n=[{id:1,preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{id:2,preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{id:3,preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{id:4,preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{id:5,preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{id:6,preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{id:7,preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{id:8,preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{id:9,preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=document.querySelector(".gallery");function r({id:t,preview:a,original:i,description:o}){return`
    <li data-id="${t}" class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img
          class="gallery-image"
          src="${a}"
          data-source="${i}"
          alt="${o}"
width="360"
height="200"
        />
      </a>
    </li>
  `}function s(t){return t.map(r).join("")}e.insertAdjacentHTML("beforeend",s(n));e.addEventListener("click",l);function l(t){t.preventDefault();const a=t.target;if(a.nodeName!=="IMG")return;const o=t.target.closest(".gallery-item").dataset.id;console.log(o);const p=a.dataset.source;basicLightbox.create(`
  <img src="${p}" alt="${a.alt}" width="800" height="600">
`).show()}new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map