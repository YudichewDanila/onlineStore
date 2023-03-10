import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8082/";

export async function getRequest(url:string){
const data = await axios.get(baseUrl+url);
return data.data; 
}

