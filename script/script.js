let requeset = new XMLHttpRequest();

requeset.addEventListener("load",()=>{
        let parser = JSON.parse(requeset.responseText);
        let tbody = $("table tbody");

       parser.forEach(element => {
               let tr = $("<tr>").append([
                       $("<td>").html(element.id),
                       $("<td>").html(element.title),
                       $("<td>").html(element.author)
               ])
               let td = $("<td>").html([
                       $("<button>").addClass("btn editBtn mx-1").html("Edit"),
                       $("<button>").addClass("btn delBtn mx-1").html("Delete")
               ])
               tr.append(td);
               tbody.append(tr);
       });
})
requeset.open("GET","http://localhost:3000/posts");
requeset.send();

$("#new-post").on("click",()=>{
      $("#post-form").toggle();
})