const initialState = {
  preferiti: {
    content: [],
  },
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREFERITI":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: [...state.preferiti.content, action.payload],
        },
      };
    case "REMOVE_FROM_PREFERITI":
      const nuoviPreferiti = state.preferiti.content.filter(
        (element) => element != action.payload
      );
      return {
        ...state,
        preferiti: { ...state.preferiti, content: nuoviPreferiti },
      };
    default:
      return state;
  }
};

export default MainReducer;
