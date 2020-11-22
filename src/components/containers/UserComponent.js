import {useState, useEffect} from 'react';
import {
    ErrorMessage,
    TotalQuestionCount,
    Loader,
    UserProfile,
    SortControls,
    QuestionRow,
    ItemList
} from "../presentations";
import {getQuestions} from "../../utils/Api";
import {getQuestionsSortPredicate} from '../../utils/Helper';

const UserComponent = ({userId, displayName, avatarUrl, reputation, acceptRate}) => {

    const [state, setState] = useState({loading: true, error: null, questions: [], sort: 'date'})

    useEffect(() => {
        function fetchData() {
            getQuestions(userId)
                .then(questions => setState(s => {
                    return {...s, loading: false, error: null, questions}
                }))
                .catch(error => setState(s => {
                    return {
                        ...s,
                        loading: false,
                        error: error.message,
                        questions: []
                    }
                }));
        }
        fetchData();
    }, [userId]);

    const handleChangeSort = sortType => {
        if (sortType !== state.sort) {
            const questions = state.questions.sort(getQuestionsSortPredicate(sortType));
            setState({...state, questions: questions, sort: sortType});
        }
    }

    const handleRowClick = id => {
        window.open(`/question/${id}`, "_blank")
    }

    return (
        <>
            <UserProfile
                avatarUrl={avatarUrl}
                displayName={displayName}
                reputation={reputation}
                acceptRate={acceptRate}
            />

            {state.loading && <Loader/>}
            {state.error && <ErrorMessage>{state.error}</ErrorMessage>}

            {
                !state.loading && !state.error &&
                <>
                    <SortControls sort={state.sort} onChangeSort={handleChangeSort}/>
                    <ItemList>
                        {
                            state.questions.map(q => <QuestionRow
                                key={q.question_id}
                                viewCount={q.view_count}
                                answerCount={q.answer_count}
                                date={new Date(q.creation_date).toLocaleDateString("en-US")}
                                tags={q.tags}
                                title={q.title}
                                onClick={() => handleRowClick(q.question_id)}
                            />)
                        }
                    </ItemList>

                    <TotalQuestionCount>{`Total of ${state.questions.length} questions fount`}</TotalQuestionCount>
                </>
            }
        </>
    )
}

export default UserComponent;

