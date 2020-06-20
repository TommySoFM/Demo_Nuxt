export const state = () => ({
  isModalOpened: false,
  isFilterExpanded: false,
  modalData: {},
  selectedFilter: 'All'
})

export const getters = {
  getIsModalOpened: (state) => {
    return state.isModalOpened
  },
  getIsFilterExpanded: (state) => {
    return state.isFilterExpanded
  },
  getModalData: (state) => {
    return state.modalData
  },
  getSelectedFilter: (state) => {
    return state.selectedFilter
  }
}

export const mutations = {
  toggleModal(state, payload) {
    state.isModalOpened = !state.isModalOpened
  },
  syncExpand(state, payload) {
    state.isFilterExpanded = payload
  },
  openModal(state, payload) {
    state.isModalOpened = true
    state.modalData = payload
  },
  selectFilter(state, payload) {
    state.selectedFilter === payload ? state.selectedFilter = 'All' : state.selectedFilter = payload
  }
}

export const actions = {
  toggleModal({ state, commit }, payload) {
    commit('toggleModal')
  },
  syncExpand({ state, commit }, payload) {
    commit('syncExpand', payload)
  },
  openModal({ state, commit }, payload) {
    commit('openModal', payload)
  },
  selectFilter({ state, commit }, payload) {
    commit('selectFilter', payload)
  },
}
