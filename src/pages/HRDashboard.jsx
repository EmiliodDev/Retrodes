import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Card, Table } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { BackgroundContainer, CardTitle, LogoutButton, LogoutIcon, StyledButton } from "./StyledComponents";
import { useNavigate } from "react-router-dom";

const HRDashboard = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchComplaints = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/v1/complaints", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setComplaints(response.data.complaints);
        } catch (err) {
            toast.error("Failed to fetch complaints. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, []);

    return (
        <BackgroundContainer>
            <ToastContainer />
            <Row className="justify-content-center mb-4" style={{ width: '1400px' }}>
                <Col md={8} lg={6}>
                    <Card className="w-100">
                        <Card.Body className="p-0">
                        <CardTitle className="p-3">Complaints Dashboard</CardTitle>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Content</th>
                                    <th>Date</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.map((complaint) => (
                                    <tr key={complaint.id}>
                                        <td>{complaint.type}</td>
                                        <td>{complaint.content}</td>
                                        <td>{new Date(complaint.date).toLocaleString()}</td>
                                        <td>
                                            <StyledButton>
                                                <FiEye /> View
                                            </StyledButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <LogoutButton 
                onClick={() => navigate("/")}
            >
                <LogoutIcon/>
                Logout
            </LogoutButton>
        </BackgroundContainer>
    );
};

export default HRDashboard;