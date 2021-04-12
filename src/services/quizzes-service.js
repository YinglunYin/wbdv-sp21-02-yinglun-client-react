const QUIZZES_URL = 'https://wbdv-server-node.herokuapp.com/api/quizzes';
// const QUIZZES_URL = 'http://localhost:3002/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (quizId, questions, index) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const getAttempts = (quizId) => {
    // Must return fetch or will report "undefined"
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`).then(response => response.json())
}

const api = {
    findAllQuizzes, findQuizById, submitQuiz, getAttempts
}
export default api