export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
	type: MAKE_GUESS,
	guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	correctAnswer: Math.round(Math.random() * 100)
});

export const INFO_MODAL = 'INFO_MODAL';
export const infoModal = () => ({
	type: INFO_MODAL
});

