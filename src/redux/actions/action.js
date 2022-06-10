const actionPersonal = (payload) => ({
  type: 'SUBMIT_PERSONAL',
  payload,
});

const actionProfessional = (payload) => ({
  type: 'SUBMIT_PROFESSIONAL',
  payload,
});

export { actionPersonal, actionProfessional };
