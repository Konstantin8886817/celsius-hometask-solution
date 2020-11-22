import styled from 'styled-components';
export {default as SearchInput} from "./SearchInput";
export {default as Loader} from './Loader';
export {default as UserProfile} from './UserProfile';
export {default as SortControls} from './SortControls';
export {default as QuestionRow} from './QuestionRow';
export {default as QuestionView} from './QuestionView';


export const MainWrapper = styled.div`
  width:900px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: hidden;
`;

export const HomePageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 15px 0 30px;
  text-transform: uppercase;
`;

export const ErrorMessage = styled.div`
    border: 1px solid red;
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: red;
`;


export const ItemList = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  margin-bottom: 15px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  padding: 10px 0;
`;

export const TotalQuestionCount = styled.div`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
`;
