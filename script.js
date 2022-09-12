
var div = document.createElement("div");
div.setAttribute("class","data");


async function foo(){
    try {
        var data = await fetch("https://api.chucknorris.io/jokes/random");
        var res = await data.json();
        console.log(res);
        return bar(res);
    } catch (error) {
        console.log("this is rejected");
    }
   
}


function bar(res){
    div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">DEMO API</div>
    <div class="card-body text-primary">
      <h5 class="card-title">DETAILS</h5>
      <div>
      <b>CREATED AT</b> : ${res.created_at}<br>
      <b>ICON URL</b> : ${res.icon_url}<br>
      <b>ID</b> : ${res.id}<br>
      <b>UPDATED AT</b> : ${res.updated_at}<br>
      <b>URL</b> : ${res.url}<br>
      <b>VALUE</b> : ${res.value}<br>
      </div>
    </div>
  </div>`
  document.body.append(div);
}


foo();