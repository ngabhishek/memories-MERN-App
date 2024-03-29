import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:actionTypes.FETCH_ALL,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const data = await api.createPost(post);
        dispatch({type:actionTypes.CREATE, payload:post});    
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type:actionTypes.UPDATE, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.deletePost(id);
        dispatch({type:actionTypes.DELETE, payload:id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type:actionTypes.LIKE, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}