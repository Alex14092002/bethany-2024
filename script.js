var button = document.querySelector(".ham-button");
var slide = document.querySelector(".nav-items");

button.addEventListener("click", () => {
  slide.classList.toggle("display");
  button.children[0].classList.toggle("toggle1");
  button.children[1].classList.toggle("toggle2");
  button.children[2].classList.toggle("toggle3");
});

//render giao dien trang chu
fetch("https://bethany-eb426-default-rtdb.firebaseio.com/.json")
  .then((response) => response.json())
  .then((data) => {
    //add title
    const titleBrand = document.createElement("span");
    titleBrand.innerText = data.title.content;

    document.getElementById("title-brand").appendChild(titleBrand);

    for (const key in data.brands) {
      let brand = [];

      brand = Object.values(data.brands[key]);
      console.log(brand);
      const quantityCol = brand[0].numberCol;

      const quantityBrand = brand.length;

      //option 2 col

      if (quantityCol === 2) {
        const brand2Div = document.createElement("div");
        if (quantityBrand === 1) {
          const locationBrand = brand[0].location;

          if (locationBrand === 1) {
            brand2Div.innerHTML = `
            <div class="content-main row">
              <div id="${brand[0].id}" class="box-item col-12 col-sm-6">
                <a href="detail.html?id=${brand[0].id}"
                  ><img src="${brand[0].image}" alt="${brand[0].alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${brand[0].year}</p>
                    <p class="uppercase">${brand[0].brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${brand[0].type}</p>
                    <p class="uppercase">${brand[0].name}</p>
                  </div>
                </div>
                </div>
              `;
          } else {
            brand2Div.innerHTML = `
            <div class="content-main row">
              <div id="${brand[0].id}" class="box-item col-12 col-md-6 offset-md-6">
                <a href="detail.html?id=${brand[0].id}"
                  ><img src="${brand[0].image}" alt="${brand[0].alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${brand[0].year}</p>
                    <p class="uppercase">${brand[0].brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${brand[0].type}</p>
                    <p class="uppercase">${brand[0].name}</p>
                  </div>
                </div>
                </div>
              `;
          }
        } else if (quantityBrand === 2) {
          let objectBrand1 = {};
          let objectBrand2 = {};
          brand.forEach((e) => {
            if (e.location === 1) {
              objectBrand1 = e;
            } else if (e.location === 2) {
              objectBrand2 = e;
            }
          });
          brand2Div.innerHTML = `
            <div class="content-main row">
              <div id="${objectBrand1.id}" class="box-item col-12 col-md-6">
                <a href="detail.html?id=${objectBrand1.id}"
                  ><img src="${objectBrand1.image}" alt="${objectBrand1.alt}" width="100%"
                />
                </a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand1.year}</p>
                    <p class="uppercase">${objectBrand1.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand1.type}</p>
                    <p class="uppercase">${objectBrand1.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand2.id}" class="box-item col-12 col-md-6">
                <a href="detail.html?id=${objectBrand2.id}"
                  ><img src="${objectBrand2.image}" alt="${objectBrand2.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand2.year}</p>
                    <p class="uppercase">${objectBrand2.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand2.type}</p>
                    <p class="uppercase">${objectBrand2.name}</p>                  
                  </div>
                </div>
              </div>
          </div>
              `;
        }
        document.getElementById("brand-content").appendChild(brand2Div);
      }
      //option 3 col
      if (quantityCol === 3) {
        const brand3Div = document.createElement("div");
        if (quantityBrand === 1) {
          const locationBrand = brand[0].location;
          if (locationBrand === 1) {
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${brand[0].id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${brand[0].id}">
                  <img src="${brand[0].image}" alt="${brand[0].alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${brand[0].year}</p>
                    <p class="uppercase">${brand[0].brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right">${brand[0].type}</p>
                    <p class="uppercase">${brand[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          } else if (locationBrand === 2) {
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${brand[0].id}" class="box-item col-12 col-md-4 offset-md-4">
                <a href="detail.html?id=${brand[0].id}">
                  <img src="${brand[0].image}" alt="${brand[0].alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${brand[0].year}</p>
                    <p class="uppercase">${brand[0].brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${brand[0].type}</p>
                    <p class="uppercase">${brand[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          } else if (locationBrand === 3) {
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${brand[0].id}" class="box-item col-12 col-md-4 offset-md-8">
                <a href="detail.html?id=${brand[0].id}">
                  <img src="${brand[0].image}" alt="${brand[0].alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${brand[0].year}</p>
                    <p class="uppercase">${brand[0].brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase class="uppercase"">${brand[0].type}</p>
                    <p class="uppercase">${brand[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          }
        } else if (quantityBrand === 2) {
          const locationBrand0 = brand[0].location;
          const locationBrand1 = brand[1].location;
          if (
            (locationBrand0 === 1 && locationBrand1 === 2) ||
            (locationBrand0 === 2 && locationBrand1 === 1)
          ) {
            let objectBrand1 = {};
            let objectBrand2 = {};
            brand.forEach((e) => {
              if (e.location === 1) {
                objectBrand1 = e;
              } else if (e.location === 2) {
                objectBrand2 = e;
              }
            });
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${objectBrand1.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand1.id}">
                  <img src="${objectBrand1.image}" alt="${objectBrand1.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand1.year}</p>
                    <p class="uppercase">${objectBrand1.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand1.type}</p>
                    <p class="uppercase">${objectBrand1.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand2.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand2.id}">
                  <img src="${objectBrand2.image}" alt="${objectBrand2.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand2.year}</p>
                    <p class="uppercase">${objectBrand2.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand2.type}</p>
                    <p class="uppercase">${objectBrand2.name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          }
          if (
            (locationBrand0 === 1 && locationBrand1 === 3) ||
            (locationBrand0 === 3 && locationBrand1 === 1)
          ) {
            let objectBrand1 = {};
            let objectBrand3 = {};
            brand.forEach((e) => {
              if (e.location === 1) {
                objectBrand1 = e;
              } else if (e.location === 3) {
                objectBrand3 = e;
              }
            });
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${objectBrand1.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand1.id}">
                  <img src="${objectBrand1.image}" alt="${objectBrand1.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand1.year}</p>
                    <p class="uppercase">${objectBrand1.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand1.type}</p>
                    <p class="uppercase">${objectBrand1.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand3.id}" class="box-item col-12 col-md-4 offset-md-4">
                <a href="detail.html?id=${objectBrand3.id}">
                  <img src="${objectBrand3.image}" alt="${objectBrand3.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand3.year}</p>
                    <p class="uppercase">${objectBrand3.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand3.type}</p>
                    <p class="uppercase">${objectBrand3.name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          }
          if (
            (locationBrand0 === 2 && locationBrand1 === 3) ||
            (locationBrand0 === 3 && locationBrand1 === 2)
          ) {
            let objectBrand2 = {};
            let objectBrand3 = {};
            brand.forEach((e) => {
              if (e.location === 2) {
                objectBrand2 = e;
              } else if (e.location === 3) {
                objectBrand3 = e;
              }
            });
            brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${objectBrand2.id}" class="box-item col-12 col-md-4 offset-md-4">
                <a href="detail.html?id=${objectBrand2.id}">
                  <img src="${objectBrand2.image}" alt="${objectBrand2.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand2.year}</p>
                    <p class="uppercase">${objectBrand2.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand2.type}</p>
                    <p class="uppercase">${objectBrand2.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand3.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand3.id}">
                  <img src="${objectBrand3.image}" alt="${objectBrand3.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand3.year}</p>
                    <p class="uppercase">${objectBrand3.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand3.type}</p>
                    <p class="uppercase">${objectBrand3.name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
          }
        } else if (quantityBrand === 3) {
          let objectBrand1 = {};
          let objectBrand2 = {};
          let objectBrand3 = {};
          brand.forEach((e) => {
            if (e.location === 1) {
              objectBrand1 = e;
            } else if (e.location === 2) {
              objectBrand2 = e;
            } else if (e.location === 3) {
              objectBrand3 = e;
            }
          });
          brand3Div.innerHTML = `
            <div class="content-main row t" id="artwork">
              <div id="${objectBrand1.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand1.id}">
                  <img src="${objectBrand1.image}" alt="${objectBrand1.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand1.year}</p>
                    <p class="uppercase">${objectBrand1.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand1.type}</p>
                    <p class="uppercase">${objectBrand1.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand2.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand2.id}">
                  <img src="${objectBrand2.image}" alt="${objectBrand2.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand2.year}</p>
                    <p class="uppercase">${objectBrand2.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand2.type}</p>
                    <p class="uppercase">${objectBrand2.name}</p>
                  </div>
                </div>
              </div>
              <div id="${objectBrand3.id}" class="box-item col-12 col-md-4">
                <a href="detail.html?id=${objectBrand3.id}">
                  <img src="${objectBrand3.image}" alt="${objectBrand3.alt}" width="100%"
                /></a>

                <div class="text">
                  <div class="text-item">
                    <p class="uppercase">${objectBrand3.year}</p>
                    <p class="uppercase">${objectBrand3.brandName}</p>
                  </div>
                  <div class="text-item">
                    <p class="right uppercase">${objectBrand3.type}</p>
                    <p class="uppercase">${objectBrand3.name}</p>
                  </div>
                </div>
              </div>
            </div>
              `;
        }

        document.getElementById("brand-content").appendChild(brand3Div);
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
