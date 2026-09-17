import {Link} from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">MiniReact</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/food/detail">맛집</Link></li>
                    <li><Link to="/recipe">레시피</Link></li>
                    <li><Link to="/food/find">레시피 검색</Link></li>
                    <li><Link to="#">쉐프</Link></li>
                    <li><Link to="#">커뮤니티</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header