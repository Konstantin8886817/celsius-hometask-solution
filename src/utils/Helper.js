
const questionsSortPredicates = {
    date: (a,b) => b.creation_date - a.creation_date,
    answers: (a,b) => b.answer_count - a.answer_count,
    views: (a,b) => b.view_count - a.view_count
}
export const getQuestionsSortPredicate = (sortType) => {
    if(!questionsSortPredicates.hasOwnProperty(sortType)){
        return questionsSortPredicates.date;
    }
    return questionsSortPredicates[sortType];
}
