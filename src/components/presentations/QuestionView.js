import styled from 'styled-components';

const Wrapper = styled.div`
  padding:30px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 0;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
`;

const Date = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
`;

const QuestionView = ({title, date}) => {
    return (
      <Wrapper>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <p>Any other content!</p>
      </Wrapper>
    );
}

export default QuestionView;
