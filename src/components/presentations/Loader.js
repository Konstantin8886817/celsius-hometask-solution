import styled, {keyframes} from 'styled-components';


const LoaderAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StyledLoader = styled.div`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  &:after {
  content: " ";
  display: block;
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid black;
  border-color: black transparent black transparent;
  animation: ${LoaderAnim} 1.2s linear infinite;
}
`;

const Loader = () => {
    return <StyledLoader/>
}

export default Loader;
