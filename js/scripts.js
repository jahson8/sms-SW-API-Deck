document.addEventListener("DOMContentLoaded", () => {
  const api = "https://swapi.dev/api";

  // ------------------------------------------
  //  FETCH FUNCTIONS
  // ------------------------------------------

  function fetchData(url) {
    return fetch(url).then((res) => res.json());
  }

  // ------------------------------------------
  //  Render Cards
  // ------------------------------------------

  /**
   * Renders html to DOM
   * @param HTML - data to be rendered (string)
   * @param nodeId-  location to insert HTML (string)
   *@param position- where in side the node to insert html (optional)
   */

  function render(HTML, nodeId, position = "afterbegin") {
    let node = document.getElementById(nodeId);
    // Insert to DOM
    node.insertAdjacentHTML(position, HTML);
  }

  function generateCards(data) {
    let HTML = data
      .map((card) => {
        let {
          gender,
          homeworld,
          name,
          starships,
          vehicles,
          birth_year,
          species,
        } = card;

        return `
      <li class="card">
      <a href="card-details.html">
        <div class="card-header">
          <div class="card-container">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12V9.5C10 9.10218 9.84196 8.72064 9.56066 8.43934C9.27936 8.15804 8.89782 8 8.5 8V8C8.10218 8 7.72064 8.15804 7.43934 8.43934C7.15804 8.72064 7 9.10218 7 9.5V13C7.05225 13.501 7.21362 13.9844 7.47277 14.4163C7.73192 14.8483 8.08255 15.2181 8.5 15.5H12L13.348 11.008C13.4473 10.6749 13.4587 10.3218 13.381 9.983L12.181 4.774C12.0663 4.27665 11.7658 3.84198 11.341 3.559L10.5 3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 6.5V0.5H2.5V11.5H4.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>


         
            <h2>${name}</h2>
          </div>
        </div>
        <div class="card-body">
          <div class="card-container">
            <div class="card-body-top">
              <img
                src=${
                  gender === "female"
                    ? "images/Interview-Assets/Gender-Female.svg"
                    : "images/Interview-Assets/Gender-Male.svg"
                }
               
                alt="gender icon"
              />
              <p>${birth_year}</p>
              <p>Species</p>
            </div>
            <div class="card-body-end">
              <ul>
                <li class="card-info">
                  <img
                    src="images/Interview-Assets/Homeworld.svg"
                    alt="home world icon"
                  />
                  <p>HomeWorld</p>
                  <p>Planet</p>
                </li>
                <li class="card-info">
                  <img
                    src="images/Interview-Assets/Vehicle.svg"
                    alt="vehicle icon"
                  />
                  <p>Vehicles</p>
                  <p>${vehicles.length}</p>
                </li>
                <li class="card-info">
                  <img
                    src="images/Interview-Assets/Starship.svg"
                    alt="starship icon"
                  />
                  <p>Starships</p>
                  <p>${starships.length}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </li>     
      `;
      })
      .join("");

    render(HTML, "gallery");
  }

  //   fetch peoples resource
  fetchData(`${api}/people/`).then((data) => generateCards(data.results));
});
