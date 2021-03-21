import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { fetchMovies, SearchResponse } from '../../api/omdb';

export function HomeScreen({ navigation }) {
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState(() => SearchResponse.Search);

  React.useEffect(() => {
    if (query.length > 0) {
      fetchMovies(query).then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
    }
  }, [query]);

  return (
    <SafeAreaView>
      <View>
        <View style={{ padding: 16 }}>
          <TextInput
            placeholder="Введите название"
            value={query}
            style={{
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderColor: '#E5E7EB',
              borderWidth: 1,
              borderStyle: 'solid',
              fontSize: 20
            }}
            onChangeText={setQuery}
          />
        </View>

        <FlatList
          style={{ marginBottom: 160 }}
          data={movies}
          keyExtractor={movie => movie.imdbID}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('Movie', {
                  title: item.Title,
                  movieId: item.imdbID
                })
              }
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: index === 0 ? 0 : 16,
                  paddingHorizontal: 16
                }}
              >
                <View
                  style={{
                    flex: 2,
                    marginRight: 12
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 16
                    }}
                    source={{
                      uri: item.Poster,
                      height: 180
                    }}
                  />
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.Title}</Text>
                  <Text>{item.Year}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
