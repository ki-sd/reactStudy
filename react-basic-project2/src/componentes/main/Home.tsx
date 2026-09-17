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
                <Link to={`/food/detail/${food.no}`}>
                    <img src={food.poster} alt={food.address} style={{"width":"250%","height":"150px","objectFit":"cover"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
    // 이벤트
    const prev=()=>foodData && setCurpage(foodData.startPage-1)
    const pageChange=(page:number)=>foodData && setCurpage(page)
    const next=()=>foodData && setCurpage(foodData.endPage+1)
    // 페이지
    const pageArr=[]
    if(foodData && foodData?.startPage>1){
        pageArr.push(
            <li><a className={"nav-link"} onClick={prev}>&laquo;</a></li>
        )
    }
    if(foodData){
        for(let i:number=foodData.startPage;i<=foodData.endPage;i++){
            pageArr.push(
                <li className={i===curpage?"active":""}><a className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li>
            )
        }
    }
    if(foodData && foodData?.endPage<foodData.totalpage){
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }
    return(
        <div className={"container"}>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <ul className={"pagination"}>
                {pageArr}
                </ul>
            </div>
        </div>
    )
}

export default Home