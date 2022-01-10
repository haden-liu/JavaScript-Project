let searchText = document.querySelector("#searchText");
let findNow = document.querySelector("#findNow");
let searchResult = document.querySelector("#results");

findNow.addEventListener("click", () => {
  if (searchText.value !== "") {
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        searchResult.innerHTML = ``;
        data.query.search.forEach((items) => {
          let resultURL = `https://en.wikipedia.org/?curid=${items.pageid}`;
          searchResult.innerHTML += `<div class="resultItem">
            <a href="${resultURL}" target="_blank" class="resultTitle">${items.title}</a><br>
            
            <p>${items.snippet}</p>
        </div>`;
        });
      });
  }
});
