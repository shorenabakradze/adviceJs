const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const { slip: { advice } } = await response.json();
        return advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
        return 'Please try again later.';
    }
};
const displayRandomAdvice = async () => {
    const adviceElement = document.getElementById('advice');
    adviceElement.textContent = 'Fetching advice...';
    adviceElement.textContent = await getAdvice();
};
document.getElementById('button').addEventListener('click', displayRandomAdvice);
displayRandomAdvice();
