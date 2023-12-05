const res = fetch("https://cat-fact.herokuapp.com/facts");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      console.log(data1[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
      <div class="col">
        <div class="card">
        <div class="card-header">Cat Facts</div>
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="country-flag">

          <div class="card-body">
            <p class="card-text"><b><i>id:${data1[i]._id}</i></b></p>
            <p class="card-text"><b><i>User: ${data1[i].user}</b></p>
            <p class="card-text"><b><i>Text: ${data1[i].text}</i></b></p>
            <p class="card-text"><b><i>UpdateAt: ${data1[i].updatedAt}</i></b></p>
            <p class="card-text"><b><i>CreatedAt: ${data1[i].createdAt}</i></b></p>
           
            </div>
          </div>
        </div>
     </div>`;
      document.body.append(div);
    }
  });
