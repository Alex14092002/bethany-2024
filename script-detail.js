var button = document.querySelector(".ham-button");
var slide = document.querySelector(".nav-items");

button.addEventListener("click", () => {
	slide.classList.toggle("display");
	button.children[0].classList.toggle("toggle1");
	button.children[1].classList.toggle("toggle2");
	button.children[2].classList.toggle("toggle3");
});

// Render giao diện trang chủ
fetch(
	"https://bethany-eb426-default-rtdb.firebaseio.com/-O73mEgCROJzGUG5iDaC.json"
)
	.then((response) => response.json())
	.then((data) => {
		// Get id from URL parameters
		const currentUrl = window.location.href;
		const urlParams = new URLSearchParams(new URL(currentUrl).search);
		const id = urlParams.get("id");
		let brandDetails = {};

		// Loop through the data to find the matching brand
		for (const key in data.brands) {
			let arr = Object.values(data.brands[key]);

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
		document.title = brandDetails.name || "Trang chủ";
		// Render data to UI
		const brandDetailElement = document.createElement("div");
		let contentBrand = "";
		console.log(brandDetails);
		if (brandDetails) {
			contentBrand = `<div class="img-home-project">`;

			// Check if the first image URL ends with .mp4 to use video tag
			if (arrImage[0].url.endsWith(".mp4")) {
				contentBrand += `
                    <video width="100%" muted controls autoplay loop>
                        <source src="${arrImage[0].url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
			} else {
				contentBrand += `
                    <img src="${arrImage[0].url}" alt="${arrImage[0].alt}" width="100%" />`;
			}

			contentBrand += `</div>
     
            <div class="row py-5">
                <div class="col-12 col-xl-6">
                     <div class="name-project">
                        <h3>${brandDetails.name}</h3>
                    </div>
                    <div class="content-detail">
                        <table>
                            <tr>
                                <td class='title-detail'>Year</td>
                                <td class="value-detail">${
																	brandDetails.year
																}</td>
                            </tr>
                            <tr>
                                <td class='title-detail'>Studio:</td>
                                <td class="value-detail">${
																	brandDetails.studio
																}</td>
                            </tr>
                            <tr>
                                <td class='title-detail'>Role:</td>
                                <td class="value-detail">${
																	brandDetails.role
																}</td>
                            </tr>
                            <tr>
                                <td class='title-detail'>Responsibilities:</td>
                                <td class="value-detail">${
																	brandDetails.Responsibilities
																}</td>
                            </tr>
                              <tr class='${
																brandDetails.Credits ? "" : "d-none"
															}'>
                                <td class='title-detail'>Credits:</td>
                                <td class="value-detail">${
																	brandDetails.Credits
																}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-12 col-xl-6 ">
                    <p class='des'>${brandDetails.describe}</p>
                </div>
            </div>`;
		}

		for (let i = 1; i < arrImage.length; i++) {
			if (arrImage[i].url.endsWith(".mp4")) {
				contentBrand += `
					<div class="img-item">
						<video muted width="100%" controls autoplay loop>
							<source src="${arrImage[i].url}" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>`;
			} else {
				contentBrand += `
					<div class="img-item">
						<img src="${arrImage[i].url}" alt="${arrImage[i].alt}" width="100%" />
					</div>`;
			}
		}

		brandDetailElement.innerHTML = contentBrand;
		document
			.getElementById("brand-detail-container")
			.appendChild(brandDetailElement);
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});
