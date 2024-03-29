import axios from 'axios';
import { SET_USER_POSTS } from './types';
import { USER_PROSPECTOS_ENDPOINT } from '../helpers/endpoints';

export const getUserPosts = () => dispatch => {
    return new Promise((resolve, reject) => {
        axios.get(USER_PROSPECTOS_ENDPOINT)
            .then(response => {
                dispatch({
                    type: SET_USER_POSTS,
                    payload: { fetched: true, posts: response.data }
                })

                resolve(response)
            })
            .catch(err => {
                reject(err)
            })
    });
}