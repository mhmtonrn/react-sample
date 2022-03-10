import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

const activeStyle = {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "black"}

const SideBar = () => {

    const studentState = useSelector(state => state.students);

    return (<div>
        <ListGroup>
            <ListGroup.Item variant="primary" >
                <Link style={activeStyle} to={"/"}>Home</Link>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
                <Link style={activeStyle}
                      to={"/students"}>Students [{studentState.count}]</Link>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
                <Link style={activeStyle}
                      to={"/counter"}>Counter</Link>
            </ListGroup.Item>
        </ListGroup>
    </div>)
}

export default SideBar;