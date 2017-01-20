require('../bootstrap')
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  items: [],
  cartItems: []
}

const mutations = {
  SET_MENU_ITEMS ( state, items ) {
    state.items = items
  },
  ADD_MENU_ITEM ( state, item ) {
    var itemFound = state.items.find( i => i.id === item.id )
    if ( itemFound ) {
      itemFound.name = item.name
      itemFound.description = item.description
      itemFound.amount = item.amount
    }
    else state.items.push(item);
  },
  ADD_TO_CART ( state, item_id ) {
    var item = state.cartItems.find( i => { return i.id === item_id } )
    if ( item ) {
       item.quantity++
       return true;
        console.log('shouldn\'t reach this point -- inside if item found')
    }
    var orderItem = {
      id: item_id,
      quantity: 1
    }
    console.log('orderItem ---')
    console.log(orderItem)
    state.cartItems.push(orderItem);
    console.log('cartItems after push of orderItem --- ')
    console.log(state.cartItems)
  }
}

const actions = {
  setMenuItems( { commit } ) {
    Vue.http.get('/items').then(
      ( response ) => {
        commit('SET_MENU_ITEMS', response.body)
      },
      ( response ) => {
        console.log(response.body)
      }
    ).catch()
  },
  submitMenuItemForm( {commit}, formData ) {
    if ( formData.id ) {
      Vue.http.post('/items/update', formData).then(
        (response) => { commit('ADD_MENU_ITEM', response.body) }, (response) => {console.log(response)}
      ).catch();
    } else {
      Vue.http.post('/items/create', formData).then(
        (response) => { commit('ADD_MENU_ITEM', response.body) }, (response) => { console.log(response) }
      ).catch();
    }
  },
  addToCart( {commit}, item_id ) {
    commit( 'ADD_TO_CART', item_id );
  }
}

const getters = {
  getMenuItems: state => {
    return state.items
  },
  getCartItems: state => {
    return state.cartItems
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
