import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getQuestionById} from "../../utils/Api";
import {Loader, ErrorMessage, QuestionView} from "../presentations";

const QuestionPage = () => {
    const {id} = useParams();
    const [state, setState] = useState({loading: true, error: null, item: null});


    useEffect(() => {
        function fetchData() {
            getQuestionById(id)
                .then(data => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            loading: false,
                            error: null,
                            item: data
                        };
                    });
                }).catch(error => {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                        error: error.message,
                        item: null
                    };
                });
            });
        }

        fetchData();
    }, [id]);

    return (
        <div>
            {state.loading && <Loader/>}
            {state.error && !state.loading && <ErrorMessage>{state.error}</ErrorMessage>}
            {!state.error && !state.loading && state.item && <QuestionView title={state.item.title}
                                                                           date={new Date(state.item.creation_date).toLocaleDateString("en-US")}/>}
        </div>
    )
}

export default QuestionPage;
