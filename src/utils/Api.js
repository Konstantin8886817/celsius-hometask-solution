import axios from 'axios';


const api  = axios.create({
    baseURL:'https://api.stackexchange.com/'
});


export const getUserInfoById = userId => {
    return api.get(`/2.2/users/${userId}?site=stackoverflow`)
        .then(response => {
            if(response.data.items.length === 0){
                throw new Error(`User with id: ${userId} not found!`)
            }
            return response.data.items[0];
        });
}

export const getQuestions = (userId) => {
    return api(`/2.2/users/${userId}/questions?site=stackoverflow`)
        .then(response => {
            // if(response.data.items.length === 0){
            //     throw new Error(`User with id: ${userId} not found or have not a any questions!`)
            // }
            return response.data.items;
        });
}

export const getQuestionById = (questionId) => {
    return api.get(`/2.2/questions/${questionId}/?site=stackoverflow`)
        .then(response => {
            if(response.data.items.length === 0){
                throw new Error(`Question with id: ${questionId} not found!`)
            }
            return response.data.items[0];
        });
}
