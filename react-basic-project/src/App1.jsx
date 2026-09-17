import App from "./App";
/*
    React : facebook => 검색 => 반복이 많음 (반복 제거)
            | 인스타그램, 항공사
            | 기본이 되는 front
    1) 장점
       = 서버와 화면이 분리
         React
           | API => axios / fetch
         Spring-Boot => 거의 대부분 서버로만 사용 / 화면제어 X
           |
         DataBase

       = React는 화면만 담당 (MSA => NodeJS / SpringBoot / FastAPI)
       = 페이지 전체 새로고침이 적다
         React => 요청 => JSON => React 상태 변경 => 화면 갱신
                                 -------------- State
       = 컴포넌트 재사용
       = 비동기 처기 가능 (서버 통신 / 화면 UI 분리 가능)
       = 가상DOM을 이용한다
         Vue와 동일
       = Vue보다 Update Document가 빠르게 갱신됨
    2) 단점
       = 코드가 복잡함
       = CORS 문제 => Cross Domain => 3000
         => 서버 연결시 세션 및 Cookie 문제
         => 자체에서 세션/Cookie 지원 => JS
         => React 자체에 Cookie/Session 라이브러리 존재
       = API URL 관리
         서버 URL / 자체 화면이동 (router) URL이 같으면 안됨
       = 단방향 통신 (***) => 공유데이터 이용 => store => Redux
    3) 코딩방식
       = class 형식
         class App1 extends Component{
            state:{},
            componentDidMount(){}
            componentDidUpdate(){}
         }
         호출 => <App1>
       = function 형식
         호출 => <App>
 */
function App1(){
    return (
        <h1>Hello React</h1>
    );
}
export default App1;