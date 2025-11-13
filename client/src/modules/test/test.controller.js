const TestController = {};
const ENV = import.meta.env;

const API_URL = `${ENV.VITE_API_PROTOCOL}://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToApi = async () => {
    await fetch(`${API_URL}/test`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then((response) => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.log);
}

export default TestController;