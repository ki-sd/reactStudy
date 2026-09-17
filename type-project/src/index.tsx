import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
       => 변수
          let name (x) => name은 전역변수(예약어)로 사용중

       TypeScript : 가독성
       ------------------ 유지보수가 편리
       1) 동작 순서
       2) 데이터형
       3) 핵심 용어
       4) React 연동
       정의 : JavaScript에 데이터형(Type) 문법을 추가한 언어
             => 데이터형 정의
                let a=10
                let a:number=10
                      -----------
       동작 순서
          JavaScript
              |
          TypeScript
              |
          데이터형 검사
              |
          JavaScript 변환
              |
          브라우저 실행

       목적
         => 실행 전 오류 발견 => 오류방지 / 가독성

         => TypeScript 작성
            => ts / tsx
                    | HTML 소스 첨부 (화면/UI)
               | 일반
               |
             컴파일
               |
             타입검사
               |
             JavaScript 변환
               |
             .js / .jsx
               |
             브라우저 실행

        중요한 점
          => TypeScript => 최종 JavaScript 실행시 대부분 제거
          => JSP (Java) => HTML

        TypeScript에서 지원하는 데이터형
         string / number / boolean
         array / object / tuple
         any / void / null / undefined / never
         => enum , unknown (X)
         => interface : VO
         => 제네릭 사용 방법
         => ? . , |




 */
// string : 문자열
// => 코틀린 var s:string , val s:string
//          let            const
let userName:string="홍길동"
console.log(userName)
// 데이터형 변경이 안된다
// userName=3
// number => 정수 , 실수
let age: number=20
let price: number=15000
let score: number=80.5

// boolean : true / false
let isLogin: boolean=false
let isAdmin: boolean=true

// Array = 배열
let names1: string[]=[
    "홍길동",
    "심청이",
    "박문수"
]
let names2: Array<string>=[
    "홍길동",
    "심청이",
    "박문수"
]
let numbers1: number[]=[
    1,2,3,4,5
]
let numbers2: Array<number>=[
    1,2,3,4,5
]
let booleans1: boolean[]=[
    true,false,true
]
let booleans2: Array<boolean>=[
    true,false,true
]

// Object (객체형) => JSON
let user:{
    name:string,
    age:number
}={
    name:"홍길동",
    age:25
}
console.log(user.name)
console.log(user.age)

// Interface => 설계/규경 => 목록, 상세보기

interface User{
    name: string
    age: number
}
const user1: User={
    name: "홍길동",
    age: 25
}
// 서버 => 데이터 읽기
console.log(user1.name)
console.log(user1.age)

// Optional = ?
interface User1{
    no: number,
    name: string,
    email?: string
}
const user2: User1={
    no:1,
    name:"심청이"
}
const user3: User1={
    no:2,
    name:"박문수",
    email:"abc@example.com"
}
console.log(user2)
console.log(user3)

// type => interface 비슷
type User5={
    no: number,
    name: string,
    email?: string
}
const user5: User5={
    no:1,
    name:"홍길동"
}
/*
      # 객체구조 => {}
               interface       type
      객체구조       O            O
      확장(상속)     O            O
      Union       제한적          O
                 ------- React 구조
      type Status="READY" | "RUNNING" | "END"
 */
//  Union => |
let value: string | number | boolean
value="홍길동"
value=1000
// Type 사용법 => 특정값 지정 => Literal Type (자바의 Enum, DB의 CHECK)
type Sex="남자" | "여자"
let s: Sex="남자"
// 변수 => 2개 사용 name: , age: => Tuple
// 오라클 => Row
let user6: [string,number]=[
    "홍길동",25
]
// => string, number, boolean, ?, interface, [] Array<string>
// any => 데이터형을 모르는 경우 (일반 자바 스크립트)
let data: any
data=10
data="aaa"
data=true

let data1: unknown
data1=10
data1="aaa"
data1=true

// null / undefined
let val1: null=null
let val2: undefined=undefined
let val3: User|null=null // null값 방지
// const [detail,setDetail]=useState<Food|null>(null)
// 화면 오류 발생

// void : return 값이 없는 경우
function detail(): void{
    console.log("Hello TypeScript")
}
detail()
function add(a: number,b: number):number{
    return a+b
}
let c=add(10,30)
console.log(c)

const add1=(a:number,b:number):number => {return a+b}
c=add1(100,200)
console.log(c)
/*
        function func():number{} 선언적 함수
        const func=():number=>{} 익명의 함수 = 데이터형처럼 사용
        const func=function():number{}
 */
// Generic => 중요 : 데이터형을 나중에 결정
function getData<T>(data:T):T{
    return data
}
const res1=getData<string>("Hello")
console.log(res1)
const res2=getData<number>(100)
console.log(res2)
/*
        ArrayList<String>
        ArrayList => T : Object
        ArrayList<FoodVO>
*/

        // 정리
        // string /number / boolean
        // 배열  let names:string[], let names:Array<string>
        // Tuple => let user:[string,number]
        // Object
        /*
                let s: {
                    name:string,
                    sex:string,
                    age:number
                }
         */
        // string / number / boolean (로그인)
        // string[] / number[]
        // object / 구조 정의 : interface
        // ? : 선택 속성, | 여러개중 하나
        // any / unknown => 데이터형을 모르는 경우
        // void : 반환값이 없는 경우
        // <T> : Generic
/*
        --------------------------------------------
        string = number = boolean = array = object
        = interface = ?,|
        = function = generic
        데이터형 관련 => 기능을 갖고있는건 아님
 */
        // interface => ?
/*
        jackson => List<FoodVO>
           SELECT no,poster,name,address
           => no:1 poster:'' ...
              price:null
 */


let b=10 // 자동 추론
let a:number|string=10
a="aaa"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
