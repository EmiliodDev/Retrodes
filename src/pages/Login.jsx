import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiMoon, FiSun, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { BackgroundContainer, CardWrapper, CardTitle, StyledButton, SecondaryButton, FormGroup } from './StyledComponents'; // Importar componentes estilizados
import { useTheme } from '../utils/ThemeContext';

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    // const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/login", data);
            toast.success("Login successful!");

            const { token, isHR } = response.data;
            localStorage.setItem("token", token);

            if (isHR) {
                navigate("/hrdashboard");
            } else {
                navigate("/complaint-form");
            }
        } catch (err) {
            toast.error("Invalid credentials or server error.");
        }
    };

    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <BackgroundContainer>
            <ToastContainer />
            <CardWrapper>
                <CardTitle>
                    <FiLogIn className="me-2" />
                    Login
                </CardTitle>
                {/* <StyledButton
                    variant={isDarkMode ? "light" : "dark"}
                    onClick={toggleTheme}
                    className="w-100 d-flex align-items-center justify-content-center mb-3"
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
                </StyledButton> */}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Insert your email"
                            {...register("email")}
                        />
                        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Insert your password"
                            {...register("password")}
                        />
                        {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
                    </FormGroup>
                    <StyledButton
                        variant="primary"
                        type="submit"
                        className="w-100 d-flex align-items-center justify-content-center mb-3"
                    >
                        <FiLogIn className="me-2" />
                        Login
                    </StyledButton>
                </Form>
                <SecondaryButton
                    variant="secondary"
                    onClick={goToRegister}
                    className="w-100 d-flex align-items-center justify-content-center"
                >
                    <FiUserPlus className="me-2" />
                    Go to Register
                </SecondaryButton>
            </CardWrapper>
        </BackgroundContainer>
    );
};

export default Login;