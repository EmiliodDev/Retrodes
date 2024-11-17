import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useTheme } from "../utils/ThemeContext";
import { FiMoon, FiSun, FiUserPlus } from "react-icons/fi";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Lastname is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    department: yup.string().required("Department is required"),
    position: yup.string().required("Position is required"),
    password: yup.string().min(3, "The password has to be 3 characters minimum").required("Password is required"),
});



const Register = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/register", data);
            toast.success("Employee registered successfully!");
        } catch(err) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
            <ToastContainer />
            <Row className="w-100">
                <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                    <div className="p-4 border rounded bg-light text-dark shadow">
                        <h2 className="text-center mb-4">
                            <FiUserPlus className="me-2" />
                            Registro
                        </h2>
                        <Button
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
                            </Button>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Insert your name"
                                    {...register("name")}
                                />
                                {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Insert your lastname"
                                    {...register("lastName")}
                                />
                                {errors.lastName && <Form.Text className="text-danger">{errors.lastName.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="department">
                                <Form.Label>Department</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Insert your department"
                                    {...register("department")}
                                />
                                {errors.department && <Form.Text className="text-danger">{errors.department.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Insert your position"
                                    {...register("position")}
                                />
                                {errors.position && <Form.Text className="text-danger">{errors.position.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Insert your email"
                                    {...register("email")}
                                />
                                {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Insert a secure password"
                                    {...register("password")}
                                />
                                {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 d-flex align-items-center justify-content-center"
                            >
                                <FiUserPlus className="me-2" />
                                Register
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;