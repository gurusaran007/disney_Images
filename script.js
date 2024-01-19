var container = document.createElement("div");
container.className="container";
container.className="main";

var row = document.createElement("div");
row.className="row";

async function get_data()
{
    var res = await fetch("https://api.disneyapi.dev/character");
    var final_res = await res.json();


    console.log(final_res);
   
   read_data(final_res);
}

get_data();

function read_data(final_res)
{   
        for(let i=0;i<final_res.data.length;i++)
        {
            try{
                    if(final_res.data[i].imageUrl==undefined)
                    {
                        throw new Error("Invalid");
                    }

                    console.log(final_res.data[i].name);
                    var col = document.createElement("div");
                    col.className="col-md-4";
                    col.innerHTML += 
                `
                    <div style = margin:20px>
                    <img src=${final_res.data[i].imageUrl} class="image-fluid"  width=200px height = 200px alt=${`disney`}>
                    <p ><b>name:<b>${final_res.data[i].name}</p>
                    </div>`
                
                    row.append(col);
                    container.append(row);
                    document.body.append(container);
           }
           catch(error)
           {
               console.log("data lost"+error.message);
           }

        }   
    
    }
   