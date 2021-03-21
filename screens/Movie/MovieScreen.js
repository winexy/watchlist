import React from 'react';
import { Image, Text, View, SafeAreaView } from 'react-native';
import { fetchMovie } from '../../api/omdb';

export function MovieScreen({ route, navigation }) {
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    navigation.setOptions({
      title: route.params.title
    });

    fetchMovie(route.params.movieId).then(setMovie);
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: movie.Poster,
          height: 400
        }}
      />
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          {movie.Title}
        </Text>
        <Text style={{ marginTop: 12 }}>{movie.Plot}</Text>
      </View>
    </SafeAreaView>
  );
}
