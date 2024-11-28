import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Row, Col } from "react-bootstrap";
// import { useTheme } from "../utils/ThemeContext";
import { BackgroundContainer, FormGroup, LogoutButton, LogoutIcon, SendIcon, StyledButton } from "./StyledComponents";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    type: yup
        .string()
        .required("Type is required")
        .oneOf(["anonymous", "not anonymous"], "Type must be 'anonymous' or 'not anonymous'"),
    content: yup.string().required("Content is required").min(10, "Content must be at least 10 characters"),
});

const ComplaintForm = () => {
    // const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:8080/api/v1/complaints", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Complaint submitted successfully!");
            reset();
        } catch (err) {
            toast.error("Failed to submit the complaint. Please try again.");
        }
    };

    return (
        <BackgroundContainer>
            <ToastContainer />
            <Row className="w-100">
                <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                    <div className="p-4 border rounded bg-light text-dark shadow">
                        <h2 className="text-center mb-4">Submit a Complaint</h2>
                        {/* <Button
                            variant={isDarkMode ? "light" : "dark"}
                            onClick={toggleTheme}
                            className="mb-3 w-100 d-flex align-items-center justify-content-center"
                        >
                            {isDarkMode ? (
                                <>
                                    <FiSun className="me-2" />
                                    Change to light
                                </>
                            ) : (
                                <>
                                    <FiMoon className="me-2" />
                                    Change to dark
                                </>
                            )}
                        </Button> */}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup className="mb-3" controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Select {...register("type")}>
                                    <option value="">Select a type</option>
                                    <option value="anonymous">Anonymous</option>
                                    <option value="not anonymous">Not Anonymous</option>
                                </Form.Select>
                                {errors.type && <Form.Text className="text-danger">{errors.type.message}</Form.Text>}
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="content">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Describe your complaint..."
                                    {...register("content")}
                                />
                                {errors.content && (
                                    <Form.Text className="text-danger">{errors.content.message}</Form.Text>
                                )}
                            </FormGroup>
                            <StyledButton
                                variant="primary"
                                type="submit"
                                className="w-100 d-flex align-items-center justify-content-center"
                            >
                                <SendIcon/>
                                Submit Complaint
                            </StyledButton>
                        </Form>
                    </div>
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

export default ComplaintForm;