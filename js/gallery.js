const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
// const { preview, original, description } = images;
function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const linkLargeImg = document.createElement("a");

  linkLargeImg.classList.add("gallery-link");
  linkLargeImg.href = original;

  const itemImg = document.createElement("img");
  itemImg.classList.add("gallery-img");
  itemImg.src = preview;
  itemImg.setAttribute("data-source", original);
  itemImg.alt = description;

  linkLargeImg.appendChild(itemImg);
  listItem.appendChild(linkLargeImg);
  return listItem;
}
function renderGallery(images) {
  const renderGalleryItem = images.map(createGalleryItem);
  gallery.append(...renderGalleryItem);
}
renderGallery(images);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const isImageClick = e.target;

  if (!e.target.classList.contains('gallery-img')) {
    return;
  }
  const largeImg = isImageClick.dataset.source;
  const altImages = isImageClick.description;
  const instance = basicLightbox.create(`
    <div class="modal">
     <img src=${largeImg} width=700 height=400 alt=${altImages} >
    </div>
`);
  instance.show();
  document.addEventListener("keydown", keyDownEscape)

  function keyDownEscape(event){
    if(event.key ==="Escape"){
      instance.close()
      document.removeEventListener('keydown', keyDownEscape)
    }
    

  }
});
