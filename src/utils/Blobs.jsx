import styled, { keyframes } from 'styled-components';

// Animación de los blobs
const blobAnimation = keyframes`
  0% {
    transform: translate(-20%, -20%);
  }
  50% {
    transform: translate(20%, 10%);
  }
  100% {
    transform: translate(-10%, 30%);
  }
`;

// Blob base para reutilización
const BlobBase = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  z-index: -1;
  animation: ${blobAnimation} infinite;
`;

export const Blob = styled(BlobBase)`
  background: #D1A7FF; /* Lila pastel */
  width: 300px;
  height: 300px;
  animation-duration: 8s;
  top: 10%;
  left: 30%;
`;

export const Blob2 = styled(BlobBase)`
  background: #A1E9C5; /* Menta pastel */
  width: 250px;
  height: 250px;
  animation-duration: 9s;
  top: 60%;
  left: 20%;
`;

export const Blob3 = styled(BlobBase)`
  background: #FFB8B8; /* Durazno pastel */
  width: 200px;
  height: 200px;
  animation-duration: 10s;
  top: 40%;
  left: 70%;
`;

// Fondo principal con gradiente pastel
export const BackgroundContainer = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #D1A7FF, #A1E9C5); /* Gradiente de lila a menta pastel */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Contenedor con fondo blanco semi-transparente y sin apachurrar el contenido
export const ComponentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;