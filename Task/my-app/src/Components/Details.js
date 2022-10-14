import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const [logindata, setLoginData] = useState([]);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const todayDate = new Date().toISOString().slice(0, 10);

    const birthday = () => {
        const getUser = localStorage.getItem("user_login");

        if (getUser && getUser.length) {
            const user = JSON.parse(getUser);
            //console.log(user);
            setLoginData(user);

            const date = logindata.map((ele, index) => {
                return ele.date === todayDate;
            });

            if (date) {
                setTimeout(() => {
                    handleShow();
                }, 3000)
            }
        }
    }

    const userLogOut = () => {
        localStorage.removeItem("user_login");
        alert("LogOut Successfully")
        navigate("/");
    }

    useEffect(() => {
        birthday();
    }, []);

    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <h1>Details Page</h1>
                        <h1> {logindata[0].name} </h1>
                        <Button onClick={userLogOut}>LogOut</Button>
                        {
                            logindata[0].date === todayDate ? 

                            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Happy BirthDay {logindata[0].name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish You Many Happy Returns Day</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal> : ""
                        }
                    </>
            }
        </>
    )
}

export default Details