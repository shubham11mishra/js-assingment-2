var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};
var appBody = document.getElementById("app");

{
  /* <section id="product">
      <div class="left-div">
        <img
          id="productImg"
          src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
          alt=""
        />
      </div>
      <div class="right-div">


        <div class="product-description">
          <h1 id="name">Men Navy Blue Solid Sweatshirt</h1>
          <h4 id="brand">United Colors of Benetton</h4>
          <h3>Price: Rs <span id="price">2599</span></h3>
          <div class="description">
            <h3>Description</h3>
            <p id="description">
              Navy solid sweatshirt with patchwork, has a round neck, long
              sleeves, straight hem
            </p>
          </div>
          <div class="product-preview">
            <h3>Product Preview</h3>
            <div class="previewImg">
              <img
                id="img0"
                class="active"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
                alt=""
              />
              <img
                id="img1"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"
                alt=""
              />
              <img
                id="img2"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"
                alt=""
              />
              <img
                id="img3"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"
                alt=""
              />
              <img
                id="img4"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
                alt=""
              />
              <img id="img5" src="undefined" alt="" />
            </div>
          </div>
        </div>
        <div class="btn">
          <button id="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section> */
}

var productSection = document.createElement("section");
productSection.id = "product";
appBody.appendChild(productSection);

var leftDiv = document.createElement("div");
leftDiv.className = "left-div";
productSection.appendChild(leftDiv);

var rightDiv = document.createElement("div");
rightDiv.className = "right-div";
productSection.appendChild(rightDiv);

var cardImg = document.createElement("img");
cardImg.id = "productImg";
cardImg.setAttribute(
  "src",
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
);
leftDiv.appendChild(cardImg);

var productDes = document.createElement("div");
productDes.className = "product-description";
rightDiv.appendChild(productDes);

var productTitle = document.createElement("h1");
productTitle.id = "name";
productTitle.innerText = productData.name;
productDes.appendChild(productTitle);

var productBrand = document.createElement("h4");
productBrand.id = "brand";
productBrand.innerText = productData.brand;
productDes.appendChild(productBrand);

var productPrice = document.createElement("h3");
productPrice.innerText = "Price: Rs ";
productDes.appendChild(productPrice);

var priceAmount = document.createElement("span");
priceAmount.id = "price";
priceAmount.innerText = productData.price;
productPrice.appendChild(priceAmount);

var desWrapper = document.createElement("div");
desWrapper.className = "description";
productDes.appendChild(desWrapper);

desWrapper.innerHTML = ` <h3>Description</h3>
<p id="description">
  ${productData.description}
</p>`;

var productPreview = document.createElement("div");
productPreview.className = "product-preview";
productDes.appendChild(productPreview);

var privewtitle = document.createElement("h3");
privewtitle.innerText = "Product Preview";
productPreview.appendChild(privewtitle);

var previewImgWrapper = document.createElement("div");
previewImgWrapper.className = "previewImg";
productPreview.appendChild(previewImgWrapper);

var addtocart = document.createElement('div');
productDes.appendChild(addtocart);
var cartbutton = document.createElement('button');
cartbutton.id = 'add-to-cart';
cartbutton.innerText ='Add to Cart';
addtocart.appendChild(cartbutton);

var imgid = 1;
productData.photos.forEach(function (ptotoDetail) {
  var privewImg = document.createElement("img");
  privewImg.id = 'imgid'+imgid; 
  if(imgid == 1){
    privewImg.className = 'active';
  }
  privewImg.setAttribute("src", ptotoDetail);
  previewImgWrapper.appendChild(privewImg);
  imgid++;
});


var imgDisplay  = document.querySelector('.previewImg').addEventListener('click',function(e){
   var newImg = e.target.src;
   cardImg.setAttribute(
    "src",
    newImg
  );
 
  var allCards = document.querySelectorAll('.previewImg > img')
  for (i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove("active")
  }
  
  e.target.className = 'active';
})
