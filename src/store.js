import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const usersList = [
    {
        name: 'Jhon Shepard',
        username: '@SPECTR',
        avatar: 'https://pbs.twimg.com/profile_images/2378360149/lj7al5ralm7vii9orwbz_400x400.jpeg'
    },
    {
        name: 'Jhonny Silverhand',
        username: '@Samurai',
        avatar: 'https://pbs.twimg.com/profile_images/1336170556886929408/xkvaOBA8_400x400.jpg'
    },
    {
        name: 'Kiki Vhyce',
        username: '@kikivhyce_',
        avatar: 'https://pbs.twimg.com/profile_images/1318522681717747712/UHUEEGXj.jpg'
    }
]

const initialState = {
    usersList: usersList
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_users":
            return {
                ...state,
                usersList: usersList
            };
        case "add_user":
            return {
                ...state,
                usersList: [
                    ...state.usersList,
                    action.payload
                ]
            }
        case "post_new_user":
            return {
                ...state,
                usersList: [
                    ...state.usersList,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

export const loadUsers = () => ({
    type: "load_users"
});

export const addUser = (userData) => ({
    type: "add_user",
    payload: userData
});

export const postNewUser = () => (dispatch, userData) => {
    dispatch({
        type: 'post_new_user'
    })
    axios({
        method: 'post',
        url: 'http://domer.tech:9999/users/',
        data: userData
    });
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;