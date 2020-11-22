import styled from 'styled-components';


const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover{
  background-color: #ccc;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  flex-grow: 1;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
`;

const Date = styled.h3`
  font-size: .8rem;
  font-weight: bold;
  color: grey;
  flex-shrink: 0;
  margin-left: 20px;
`;

const Tags = styled.ul`
display: flex;
padding: 10px 0;
`

const Tag = styled.li`
  margin-right: 10px;
  font-size: 1.0rem;
  font-weight: bold;
  color: darkgray;
`;


const SubContent = styled.div`
  display:flex;
  align-items: center;
  border-top: 1px solid grey;
  padding-top: 10px;
`;

const SubItem = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-right: 15px;
  font-weight: bold;
`;

const QuestionRow = ({title, date, tags, viewCount, answerCount, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <Header>
                <Title>{title}</Title>
                <Date>Date: {date}</Date>
            </Header>
            <Tags>
                {tags.map((tag, index) => <Tag key={index}>#{tag}</Tag>)}
            </Tags>
            <SubContent>
                <SubItem>View Count: {viewCount}</SubItem>
                <SubItem>Answer Count: {answerCount}</SubItem>
            </SubContent>
        </Wrapper>
    );
}

export default QuestionRow;
