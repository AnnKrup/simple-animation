import React, {useEffect} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {getPosts} from './thunk';
import {useAppDispatch, useTypedSelector} from '../../store/configureStore';
import styles from './styles';
import {getLoading, getPostsList} from './selectors';

function PostsScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useTypedSelector(getPostsList);
  const loading = useTypedSelector(getLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      contentContainerStyle={styles.container}
      renderItem={({item}) => (
        <View style={styles.itemWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
}

export default PostsScreen;
