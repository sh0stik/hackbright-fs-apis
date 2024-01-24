const residentsBtn = document.querySelector("#residentsButton");

const getAlderaanResidents = (evt) => {
    evt.preventDefault();
    console.log("Button clicked")
    axios.get("https://swapi.dev/api/planets/", { params: { search: "Alderaan" } })
        .then(response => {
            const residents = response.data.results[0].residents;
            for(const resident of residents){
                axios.get(resident).then(response => {
                    const h2 = document.createElement('h2')
                    h2.textContent = response.data.name
                    document.body.appendChild(h2)
                })
            }
        })
}
residentsBtn.addEventListener("click", getAlderaanResidents);