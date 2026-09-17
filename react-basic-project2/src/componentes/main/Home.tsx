import {useState,useEffect,Fragment} from "react";
import {Link} from "react-router-dom";
import apiClient from "../commons/http-commons";

function Home(){
    return(
        <h1 className={"text-center"}>Home</h1>
    )
}
export default Home