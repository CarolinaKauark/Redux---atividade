const initialStateProfessional = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = initialStateProfessional, action) => {
  switch (action.type) {
  case 'SUBMIT_PROFESSIONAL':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default professionalReducer;
