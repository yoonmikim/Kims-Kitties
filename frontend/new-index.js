document.addEventListener("DOMContentLoaded", function(){
  const ul = document.querySelector("ul.list")
  // const like = document.querySelector("button.like")
  // const adopt = document.querySelector("button.adopt")


  function slap(data){
    const name = document.querySelector("input").value
    ul.innerHTML += `<li>
      <p>${name}</p>
      <img src="${data.file}" <br>
      <button class='like'>Likes: <span data-like-id="${data.id}">0</span></button>
      <button class='adopt'>Adopt</button>
                    </li>`
    // img.src = data.file
    // <button class='edit'>Edit</button>
  }


const submit = document.querySelector("button.js-button")
  submit.addEventListener("click", fetchCats)

  function fetchCats(){
    fetch("http://aws.random.cat/meow")
      .then(res => res.json())
      .then(data => slap(data))
  }

  ul.addEventListener("click", function(event){
    if (event.target.className === "like") {
      event.target.querySelector("span").innerText = parseInt(event.target.querySelector("span").innerText) + 1;
    }
    // const like = document.querySelector("button.like")
    console.log(event.target)

    //event.target.querySelector("span").dataset.likeId
    // const span = document.querySelector(`[data-like-id='${event.target.dataset.id}']`)
    // parseInt(event.target.querySelector("span").innerText) + 1

    // if (event.target === like) {
    //   const span = document.querySelector('button.like').querySelector("span")
    //   span.innerText = parseInt(span.innerText) + 1
    //
    // }

    //  event.target.classList.contains("adopt")
    //event.target.className === "adopt"
    if (event.target.className === "adopt") {
      event.target.parentElement.remove()
    }

    if (event.target.className === "edit") {

      const name = document.querySelector("input").value
      event.target.parentElement.innerHTML = `
        <p>${name}</p>
        <img src="${data.file}" <br>
        <button class='like'>Likes: <span data-like-id="${data.id}">0</span></button>
        <button class='adopt'>Adopt</button>
        <button class='edit'>Edit</button>
                      `
    }
  })

})
