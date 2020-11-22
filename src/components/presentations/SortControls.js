import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-right: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: white;
  font-size: .8rem;
  font-weight: bold;
  padding: 0.2rem .8rem;
  border: 1px solid black;
  outline: none;
  text-transform: uppercase;
  
  ${({active}) =>
    active && css`
    background-color: black;
    color: white;
  `}
  
  &:hover{
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const SortControls = ({sort, onChangeSort}) => {
    return (
        <Wrapper>
            <Title>Questions: </Title>
            <Button active={sort === 'date'} onClick={() => onChangeSort('date')}>Date</Button>
            <Button active={sort === 'answers'} onClick={() => onChangeSort('answers')}>Answers</Button>
            <Button active={sort === 'views'} onClick={() => onChangeSort('views')}>Views</Button>
        </Wrapper>
    )
}

export default SortControls;
