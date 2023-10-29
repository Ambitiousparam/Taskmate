import axios from "axios";
export default async function(req, res) {
  if(req.method == "GET"){


    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();

     return res.send(data);
  }
  if(req.method == "POST"){
    console.log(req.body);
    const { title,description,link,priority,timeToFinish} = req.body;
    if(!title || !description || !link || !priority || !timeToFinish){
     return res.status(422).send("Data is missing");
    }
    axios.post("http://localhost:3001/api/resources",req.body);
    res.send("Data has been recieved");

  }
}