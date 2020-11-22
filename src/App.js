import {Switch, Route, Redirect} from 'react-router-dom';
import {MainWrapper} from "./components/presentations";
import HomePage from "./components/containers/HomePage";
import QuestionPage from "./components/containers/QuestionPage";

function App() {
  return (
    <MainWrapper>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/question/:id" component={QuestionPage}/>
            <Redirect push to="/" />
        </Switch>
    </MainWrapper>
  );
}

export default App;
