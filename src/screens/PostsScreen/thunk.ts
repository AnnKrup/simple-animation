import {AppDispatch} from '../../store/configureStore';
import {buttonsActions} from '../ButtonsScreen/slice';

export const getPosts: any = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(buttonsActions.postsLoading(true));

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    dispatch(buttonsActions.addPosts(data));
  } catch (err) {
    dispatch(buttonsActions.postsError(err));
  }
};
