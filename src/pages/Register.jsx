import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiMoon, FiSun, FiLogIn } from "react-icons/fi";
import { BackgroundContainer, CardWrapper, CardTitle, StyledButton, SecondaryButton, FormGroup } from './StyledComponents';
import { Form } from "react-bootstrap";

const departmentOptions = [
    "Software Development",
    "Design and User Experience (UX/UI)",
    "Product Management",
    "Quality Assurance (QA)",
    "Research and Development (R&D)",
    "Project Management",
    "Sales and Marketing",
    "Human Resources",
    "Administration and Finance",
    "Customer Support",
    "Data Science and Artificial Intelligence",
    "Consulting and Strategy",
];

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    department: yup.string().required("Department is required").oneOf(departmentOptions, "Invalid department"),
    position: yup.string().required("Position is required"),
});

const Register = () => {
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
            await axios.post("http://localhost:8080/api/v1/register", data);
            toast.success("Registration successful!");
            navigate("/");
        } catch (err) {
            toast.error("Failed to register. Please try again.");
        }
    };

    return (
        <BackgroundContainer>
            <ToastContainer />
            <CardWrapper>
                <CardTitle>
                    <FiUserPlus className="me-2" />
                    Register
                </CardTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your name"
                            {...register("name")}
                        />
                        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your last name"
                            {...register("lastName")}
                        />
                        {errors.lastName && <Form.Text className="text-danger">{errors.lastName.message}</Form.Text>}
                    </FormGroup>
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
                        {errors.password && (
                            <Form.Text className="text-danger">{errors.password.message}</Form.Text>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Select {...register("department")}>
                            <option value="">Select your department</option>
                            {departmentOptions.map((department) => (
                                <option key={department} value={department}>
                                    {department}
                                </option>
                            ))}
                        </Form.Select>
                        {errors.department && (
                            <Form.Text className="text-danger">{errors.department.message}</Form.Text>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your position"
                            {...register("position")}
                        />
                        {errors.position && (
                            <Form.Text className="text-danger">{errors.position.message}</Form.Text>
                        )}
                    </FormGroup>
                    <StyledButton
                        variant="primary"
                        type="submit"
                        className="w-100 d-flex align-items-center justify-content-center mb-3"
                    >
                        <FiUserPlus className="me-2" />
                        Register
                    </StyledButton>
                </Form>
                <SecondaryButton
                    variant="secondary"
                    onClick={() => navigate("/")}
                    className="w-100 d-flex align-items-center justify-content-center"
                >
                <FiLogIn className="me-2" />
                    Go to Login
                </SecondaryButton>
            </CardWrapper>
        </BackgroundContainer>
    );
};

export default Register;