export default {
  namespaced: true,
  state: {
    registerEmail: 'hello YOOO',
    registerPassword: 'world',
  },
  mutations: {
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
