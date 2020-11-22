import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    width: 50%;
    margin-bottom: 15px;
    border: 1px solid black;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 0 6px 20px 0 rgba(10, 33, 56, 0.04);
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 1.2rem;
  opacity: 0.5;
  cursor: pointer;
`;

const Icon = styled.i`
  text-align: center;
  align-self: center;
`;
const SearchInput = (props) => {
    return <InputContainer>
        <Icon className='material-icons'>search</Icon>
        <StyledInput {...props}/>
    </InputContainer>
}

export default SearchInput;
