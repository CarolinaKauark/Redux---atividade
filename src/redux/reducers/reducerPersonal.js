const initialStatePersonal = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = initialStatePersonal, action) => {
  switch (action.type) {
  case 'SUBMIT_PERSONAL':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default personalReducer;
