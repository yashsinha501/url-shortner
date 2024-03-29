import axios from 'axios';

import { rootUrl } from '../utils/constant'

export const registerUserEmail = ({username, email, password}) => async (dispatch) => {

    try {

        dispatch({
            type: 'RegisterRequest'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: 'true'
        }


        const { data } = await axios.post(`${rootUrl}/auth-email/register`, {username, email, password}, config);

        dispatch({
            type: 'RegisterSuccess',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'RegisterFailure',
            payload: error.response.data.message
        })
    }
}

export const loginUserEmail = ({email, password}) => async (dispatch) => {
        try {
    
            dispatch({
                type: 'LoginRequest'
            })
    
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: 'true'
            }
    
            const { data } = await axios.post(`${rootUrl}/auth-email/login`, {email, password}, config);
    
            dispatch({
                type: 'LoginSuccess',
                payload: data
            })
            
        } catch (error) {
            dispatch({
                type: 'LoginFailure',
                payload: error.response.data.message
            })
        }
}

export const loagout = () => async (dispatch) => {
    try {

        dispatch({
            type: 'LogoutRequest'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: 'true'
        }

        const { data } = await axios.get(`${rootUrl}/auth/logout`, config);

        dispatch({
            type: 'LogoutSuccess',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'LogoutFailure',
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LoadUserRequest'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: 'true'
        }

        const { data } = await axios.get(`${rootUrl}/api/v1/user/profile`, config);

        dispatch({
            type: 'LoadUserSuccess',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'LoadUserFailure',
            // payload: error.response.data.message
        })
    }
}

export const deleteAccount = () => async (dispatch) => {
    try {
        dispatch({
            type: 'DeleteAccountRequest'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: 'true'
        }

        const { data } = await axios.delete(`${rootUrl}/api/v1/user/delete`, config);

        dispatch({
            type: 'DeleteAccountSuccess',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'DeleteAccountFailure',
            payload: error.response.data.message
        })
    }
}

export const urlsLimit = () => async (dispatch) => {
    try {
        dispatch({
            type: 'UrlsLimitRequest'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: 'true'
        }

        const { data } = await axios.get(`${rootUrl}/api/v1/user/urls-limit`, config);

        dispatch({
            type: 'UrlsLimitSuccess',
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: 'UrlsLimitFailure',
            payload: error.response.data.message
        })
    }
}