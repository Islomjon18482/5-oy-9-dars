const block = document.querySelector(".block")

function creat(data){
    return `
    <div class="card">
    <div class="img">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg>
    </div>
    <h2>${data.name}</h2>
    <p>${data.description}</p>
    <p>${data.price}$</p>
    <button class="${data.id}" id="btn">More info</button>
</div>
    `
}

document.addEventListener("DOMContentLoaded", function(){
    fetch("https://auth-rg69.onrender.com/api/products/all")
    .then(res => res.json())
    .then(data=>{
        data.forEach(element => {
            let card = creat(element)
            block.innerHTML += card
        });

        const btn = document.querySelectorAll("#btn")
        btn.forEach(el =>{
            el.addEventListener("click", function(){
                let elId = el.getAttribute("class")
                window.location.href = `http://127.0.0.1:5500/pages/more.html?${elId}`;
            })
        })
    })
    .catch(err =>{
        console.log(err);
    })

})