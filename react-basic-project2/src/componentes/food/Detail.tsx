import {useState,useEffect,Fragment} from "react";
import {useNavigate,useParams} from "react-router-dom";
import apiClient from "../commons/http-commons";
import KakaoMap from "../commons/KakaoMap";

interface FoodDetailData{
    no:number
    name:string
    type:number
    address:string
    phone:string
    theme:string
    price:string
    time:string
    parking:string
    poster:string
    score:number
    content:string
    hit:number
    likecount:number
    jjimcount:number
    replycount:number
}

function Detail(){
    const {no}=useParams<{no:string}>() // request.getParameter("no")
    const nav=useNavigate()
    const [detail,setDetail]=useState<FoodDetailData|null>(null)
    // const btnClick=nav(-1)
    useEffect(() => {
        const fetchDetail=async()=>{
            const res= await apiClient.get(`/food/detail_react/${no}`)
            console.log(res)
            setDetail(res.data)
            return res.data
        }
        fetchDetail()
    }, []);
    return(
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td width={"30%"} rowSpan={8} className={"text-center"}>
                                <img src={detail?.poster} style={{"width":"320px","height":"320px"}}/>
                            </td>
                            <td colSpan={2}>
                                <h3>{detail?.name}&nbsp;<span style={{"color":"orange"}}>{detail?.score}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>주소</td>
                            <td width={"60%"}>{detail?.address}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>연락처</td>
                            <td width={"60%"}>{detail?.phone}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>종류</td>
                            <td width={"60%"}>{detail?.type}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>주차</td>
                            <td width={"60%"}>{detail?.parking}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>영업시간</td>
                            <td width={"60%"}>{detail?.time}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>가격대</td>
                            <td width={"60%"}>{detail?.price}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>테마</td>
                            <td width={"60%"}>{detail?.theme}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                {detail?.content}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className={"text-right"}>
                                <button className={"btn btn-danger"} onClick={()=>nav(-1)}>목록</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                {   detail &&
                                    <KakaoMap address={detail?.address} name={detail?.name}/>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Detail