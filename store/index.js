export const state = () => ({
  isModalOpened: false,
  modalData: {}
})

export const getters = {
  getIsModalOpened:(state) => {
    return state.isModalOpened
  },
  getModalData:(state) => {
    return state.modalData
  }
}

export const mutations = {
  toggleModal (state, payload) {
    state.isModalOpened = !state.isModalOpened
  },
  openModal (state, payload) {
    state.isModalOpened = true
    state.modalData = payload
  }
}

export const actions = {
  toggleModal({state, commit}, payload) {
    commit('toggleModal')
  },
  openModal({state, commit}, payload) {
    commit('openModal', payload)
  }
}
