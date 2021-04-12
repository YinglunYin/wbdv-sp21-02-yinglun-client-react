
const QUIZZES_URL = 'https://wbdv-server-node.herokuapp.com/api/quizzes';
// const QUIZZES_URL = 'http://localhost:3002/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}
export default api
