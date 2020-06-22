export const state = () => ({
  isModalOpened: false,
  isFilterExpanded: false,
  modalData: {},
  selectedFilter: 'All',
  selectedCode: 0
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
  },
  getSelectedCode: (state) => {
    return state.selectedCode
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
  },
  selectedCode(state, payload) {
    state.selectedCode = payload
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
  selectedCode({ state, commit }, payload) {
    commit('selectedCode', payload)
  },
}
