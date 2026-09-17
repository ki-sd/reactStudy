import {useState,useEffect,Fragment} from "react";
import {Link} from "react-router-dom";
import apiClient from "../commons/http-commons";

interface Food{
    no:number
    name:string
    poster:string
    address:string
}
interface FoodProps{
    list:Food[]
    curpage:number
    totalpage:number
    startPage:number
    endPage:number
}

function Home(){
    const[curpage,setCurpage]=useState<number>(1)
    const[foodData,setFoodData]=useState<FoodProps>()
    useEffect(() => {
        const fetchList=async ()=>{
            const res=await apiClient.get(`/food/list/${curpage}`)
            console.log(res.data)
            setFoodData(res.data)
            return res.data
        }
        fetchList()
    }, [curpage]);
    const html=foodData?.list.map((food:Food)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <Link to="#">
                    <img src={food.poster} alt={food.address} style={{"width":"250%","height":"150px","objectFit":"cover"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
    return(
        <div className={"container"}>
            <div className={"row"}>
                {html}
            </div>
        </div>
    )
}

export default Home