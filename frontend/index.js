document.addEventListener("DOMContentLoaded", function(){
  const ul = document.querySelector("ul")
  // button = document.createElement("button")
  const button = document.querySelector(".js-button")
  // button.className = "button"
  // button.innerText = "Add a New Cat!"
  // document.body.appendChild(button);
  const like = document.createElement("button")
  // like.class = "like"
  like.innerText = "Like"
  const adopt = document.createElement("button")
  // adopt.className = "adopt"
  adopt.innerText = "Adopt"

  // const div = document.querySelector("div")
  const div = document.querySelector("div.form")

  button.addEventListener("click", fetchCats)

  ul.addEventListener("click", (event) => {
    const catId = event.target.dataset.id

    if (event.target.innerText === "adopt") {
      // const quoteId = event.target.dataset.id
      // const deleteMe = event.target.parentNode.parentNode.remove();
      const deleteMe = document.querySelector(`[data-card-id='${catId}']`)
      fetch(`http://localhost:3000/cats/${catId}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        deleteMe.remove();
      })
    } else if (event.target.innerText === 'like') {
      // event.target.classList.contains("likes-button")
      // const catId = event.target.dataset.id
      const likesSpan = event.target.querySelector('span')
      const newLike = parseInt(likesSpan.innerText) + 1;

      fetch(`http://localhost:3000/cats/${catId}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json",
        "Accept": "application/json"},
        body: JSON.stringify({
          likes: newLike
        })
      })
      .then(res => res.json())
      .then(data => {
        likesSpan.innerText = newLike
      })
    }
  })
  // function createButtons(event) {
  //   if (event.target.className === "button") {
  //     // fetchCats();
  //   }
  //   else if (event.target.className === "like") {
  //
  //   }
  //   else if (event.target.className === "like") {
  //
  //   } else {
  //
  //   }
  //
  // }


  function slapCatsInTheDom(data) {
    // const li = document.createElement("li")
    // li.innerText = document.getElementById('name').value
    // li.innerText = document.querySelector("input").value
    const name = document.querySelector("input").value
    ul.innerHTML += `<li class='cat'>
    <p>${name}</p>
    <img src="${data.file}"/>
    <br>
    <button class='like'>Likes: <span> 0 </span></button>
    <button class='adopt'>Adopt</button>
</li>`

// <li class='cat' data-card-id="${cat.id}">
// <blockquote class="blockquote">
// <p class="mb-0">${cat.name}</p>
// <p>${name}</p>
// <img src=${data.file}/>
// <br>
// <button class='like' data-id=${cat.id}>Likes: <span> ${cat.likes} </span></button>
// <button class='adopt' data-id=${cat.id}>Adopt</button>
// </blockquote>
// </li>

    // const img = document.createElement("img")
    // img.src = data.file

    // li.appendChild(img)
    // li.appendChild(like)
    // li.appendChild(adopt)
    // ul.appendChild(li)
  }

  function fetchCats() {
    fetch("http://aws.random.cat/meow")
      .then(res => res.json())
      .then(data => slapCatsInTheDom(data))
  }

  // fetchCats();
})
