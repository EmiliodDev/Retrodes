import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { FiLogOut, FiSend } from 'react-icons/fi';

export const BackgroundContainer = styled.div`
  background: linear-gradient(135deg, #1a1a2e, #4a3c65, #000000);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
  @media (max-width: 576px) {
    padding: 30px 20px;
    max-width: 90%;
  }
`;

export const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    font-weight: 500;
    color: #333;
  }
`;

export const CardTitle = styled.h2`
  color: #5A5A5A;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-align: center;
`;

export const LogoutButton = styled(Button)`
  background-color: #7f5aff;
  border: 2px solid #7f5aff;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;

  &:hover {
    background-color: #5c3dff;
    border-color: #5c3dff;
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #6c4ab6; // Morado suave
  border-color: #6c4ab6;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  box-shadow: none;
  position: relative;

  &:hover {
    background-color: #5a3f9e; // Tono morado más oscuro
    border-color: #5a3f9e;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); // Sombra más sutil
    opacity: 0.9;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      animation: glow 0.5s ease-in-out infinite;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    }
  }

  &:focus {
    outline: none;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #8e67e4; // Morado suave
  border-color: #8e67e4;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  box-shadow: none;
  position: relative;

  &:hover {
    background-color: #7a56cc; // Tono más oscuro
    border-color: #7a56cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); // Sombra más sutil
    opacity: 0.9;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      animation: glow 0.5s ease-in-out infinite;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    }
  }

  &:focus {
    outline: none;
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 1.2rem;
  margin-right: 10px;
  transition: color 0.3s ease;

  ${LogoutButton}:hover & {
    color: #ffffff;
  }
`;

export const SendIcon = styled(FiSend)`
  font-size: 1.2rem;
  margin-right: 8px;
  transition: color 0.3s ease;

  ${StyledButton}:hover & {
    color: #ffffff;
  }
`;