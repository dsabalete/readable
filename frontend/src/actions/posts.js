import { api } from '../utils/api'

export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS'


export const fetchPosts = () => dispatch => {
  api.get('/posts')
    .then(res => dispatch(loadPosts(res.data)))
}
export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
})

export const fetchCategoryPosts = (category) => dispatch => {
  return api.get(`/${category}/posts`)
    .then(res => dispatch(loadCategoryPosts(res.data)))
}
export const loadCategoryPosts = (posts) => ({
  type: LOAD_CATEGORY_POSTS,
  posts
})
