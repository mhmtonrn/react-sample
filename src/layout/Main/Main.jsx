import Footer from "../footer/Footer";
import Header from "../Header/Header";
import SideBar from "../sidebar/SideBar";
import "./main.css"
import React, {Suspense} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CounterPage} from "../../components/students/CounterPage";
//import {StudentPage} from "../../components/students/StudentPage";
import {HomePage} from "../../components/students/HomePage";

const StudentPage = React.lazy(() => import("../../components/students/StudentPage"));


const Main = () => {

    return <Router>
        <div className="container-fluid">

            {/* header secion */}
            <div className="row">
                <div className="col-12 header">
                    <Header/>
                </div>
            </div>

            {/* for menu and content */}
            <div className="row">

                <div className="col-sm-12 col-md-3 col-lg-2 sidebar">
                    <SideBar/>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-10 content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/counter" element={<CounterPage time={1000}/>}/>
                            <Route path="/students" element={<StudentPage/>}/>
                            <Route path="/" element={<HomePage/>}/>
                        </Routes>
                    </Suspense>

                    {/*showcounter : {showCounter ? "true" : "false"}*/}
                    {/*<hr/>*/}
                    {/*<Button onClick={() => {*/}
                    {/*    setShowCounter(!showCounter)*/}
                    {/*}}>Toogle</Button>*/}

                    {/*<Counter time={1000} className={showCounter ? "show" : "hide"}></Counter>*/}
                    {/*<hr/>*/}
                    {/*<StudentList/>*/}
                </div>
            </div>

            {/* for footer */}
            <div className="row">
                <div className="col-12 footer">
                    <Footer/>
                    <ToastContainer/>
                </div>
            </div>

        </div>
    </Router>
}

export default Main;
