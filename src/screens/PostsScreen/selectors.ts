import {RootState} from '../../store/reducers';

export const getPostsList = (state: RootState) => state.buttons.posts;
export const getLoading = (state: RootState) => state.buttons.loading;
