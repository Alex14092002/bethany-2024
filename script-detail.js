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
		//get id to param url
		const currentUrl = window.location.href;

		const urlParams = new URLSearchParams(new URL(currentUrl).search);

		const id = urlParams.get("id");
		let brandDetails = {};

		for (const key in data.brands) {
			let arr = [];
			arr = Object.values(data.brands[key]);

			for (let j = 0; j < arr.length; j++) {
				if (arr[j].id === id) {
					brandDetails = arr[j].detail;
					break;
				}
			}

			if (Object.keys(brandDetails).length !== 0) {
				break;
			}
		}

		const arrImage = Object.values(brandDetails.images);
		console.log(arrImage);

		//reder data ra ui
		const brandDetailElement = document.createElement("div");
		let contentBrand = "";
		console.log(brandDetails);
		if (brandDetails) {
			contentBrand = `
      <div class="img-home-project">
        <img src="${arrImage[0].url}" alt="${arrImage[0].alt}" width="100%" />
      </div>
     <div class="row ">
      <div class="col-12 col-xl-6">
      <div class="name-project">
      <h3>${brandDetails.name}</h3>
    </div>
    <div class="content-detail">
    <table >
      <tr>
        <td class='title-detail'>Year</td>
        <td class="value-detail">${brandDetails.year}</td>
      </tr>
      <tr>
        <td class='title-detail'>Studio: </td>
        <td class="value-detail">${brandDetails.studio}</td>
      </tr>
      <tr>
        <td class='title-detail'>Role: </td>
        <td class="value-detail">${brandDetails.role}</td>
      </tr>
      <tr>
        <td class='title-detail'>Responsibilities: </td>
        <td class="value-detail">${brandDetails.Responsibilities}</td>
      </tr>
    </table>
    </div>
      </div>
      <div class="col-12 col-xl-6 mt-5 ">
      <p class='des'>${brandDetails.describe}</p>
    </div>
    
     </div>
    `;
		} else {
			contentBrand = "";
		}

		for (let i = 1; i < arrImage.length; i++) {
			contentBrand += `
      <div class="img-item">
        <img src="${arrImage[i].url}" alt="${arrImage[i].url}" width="100%" />
      </div>`;
		}

		brandDetailElement.innerHTML = contentBrand;

		document
			.getElementById("brand-detail-container")
			.appendChild(brandDetailElement);
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});
