import React, { useState, useEffect } from 'react';
import { 
  Film, Heart, Zap, Smile, Frown, Coffee, Sparkles, 
  Star, Clock, TrendingUp, Search, BookmarkPlus, X,
  Play, Info, Calendar, Users, Award, ExternalLink
} from 'lucide-react';

const FilmVibe = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('moods');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const moods = [
    {
      id: 'happy',
      name: 'Happy & Uplifting',
      icon: Smile,
      color: 'from-yellow-400 to-orange-400',
      genres: [35, 10751, 16], // Comedy, Family, Animation
      description: 'Feel-good movies to boost your spirits'
    },
    {
      id: 'sad',
      name: 'Melancholic',
      icon: Frown,
      color: 'from-blue-400 to-indigo-400',
      genres: [18, 10749], // Drama, Romance
      description: 'Emotional and touching stories'
    },
    {
      id: 'excited',
      name: 'Excited & Energetic',
      icon: Zap,
      color: 'from-red-400 to-pink-400',
      genres: [28, 12, 878], // Action, Adventure, Sci-Fi
      description: 'High-energy action and adventure'
    },
    {
      id: 'romantic',
      name: 'Romantic',
      icon: Heart,
      color: 'from-pink-400 to-rose-400',
      genres: [10749, 35], // Romance, Comedy
      description: 'Love stories and romantic tales'
    },
    {
      id: 'relaxed',
      name: 'Relaxed & Chill',
      icon: Coffee,
      color: 'from-teal-400 to-cyan-400',
      genres: [10402, 99], // Music, Documentary
      description: 'Easy-watching, calming content'
    },
    {
      id: 'mysterious',
      name: 'Mysterious',
      icon: Sparkles,
      color: 'from-purple-400 to-indigo-400',
      genres: [9648, 53, 27], // Mystery, Thriller, Horror
      description: 'Suspenseful and intriguing plots'
    }
  ];

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const result = await window.storage.list('fav:');
      if (result && result.keys) {
        const loaded = await Promise.all(
          result.keys.map(async (key) => {
            try {
              const data = await window.storage.get(key);
              return data ? JSON.parse(data.value) : null;
            } catch (err) {
              return null;
            }
          })
        );
        setFavorites(loaded.filter(f => f));
      }
    } catch (error) {
      setFavorites([]);
    }
  };

  const selectMood = async (mood) => {
    setSelectedMood(mood);
    setView('movies');
    setLoading(true);
    setMovies([]);

    try {
      // Using TMDB API - you can replace with your own API key
      const apiKey = ''; // Add your TMDB API key here for production
      
      // For demo purposes, we'll use a mock API call simulation
      // In production, uncomment the real API call below
      
      // Real API call (uncomment and add your API key):
      // const genreIds = mood.genres.join(',');
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreIds}&sort_by=popularity.desc&vote_average.gte=6`
      // );
      // const data = await response.json();
      // setMovies(data.results.slice(0, 12));
      
      // Demo simulation with sample data
      setTimeout(() => {
        const sampleMovies = generateSampleMovies(mood);
        setMovies(sampleMovies);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const generateSampleMovies = (mood) => {
    const titles = {
      happy: ['The Grand Budapest Hotel', 'Amélie', 'Paddington 2', 'School of Rock', 'La La Land', 'Little Miss Sunshine'],
      sad: ['The Shawshank Redemption', 'Eternal Sunshine', 'A Beautiful Mind', 'Life is Beautiful', 'The Pursuit of Happyness', 'Schindler\'s List'],
      excited: ['Mad Max: Fury Road', 'The Dark Knight', 'Inception', 'Interstellar', 'The Matrix', 'Guardians of the Galaxy'],
      romantic: ['The Notebook', 'Pride and Prejudice', 'Before Sunrise', 'Crazy Rich Asians', 'La La Land', 'Call Me by Your Name'],
      relaxed: ['Chef', 'The Secret Life of Walter Mitty', 'My Neighbor Totoro', 'Julie & Julia', 'Soul', 'The Grand Budapest Hotel'],
      mysterious: ['Gone Girl', 'Shutter Island', 'The Prestige', 'Zodiac', 'Prisoners', 'The Sixth Sense']
    };

    const movieTitles = titles[mood.id] || titles.happy;
    
    return movieTitles.map((title, index) => ({
      id: Date.now() + index,
      title: title,
      overview: `A captivating ${mood.name.toLowerCase()} film that perfectly matches your current mood. Highly rated and beloved by audiences worldwide.`,
      poster_path: `/sample-poster-${index + 1}`,
      vote_average: (7 + Math.random() * 2).toFixed(1),
      release_date: `${2015 + Math.floor(Math.random() * 9)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-01`,
      genre_ids: mood.genres
    }));
  };

  const searchMovies = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setView('search');
    
    try {
      // Real API call (uncomment with your API key):
      // const apiKey = 'YOUR_TMDB_API_KEY';
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}`
      // );
      // const data = await response.json();
      // setSearchResults(data.results.slice(0, 12));
      
      // Demo simulation
      setTimeout(() => {
        const results = generateSearchResults(searchQuery);
        setSearchResults(results);
        setLoading(false);
      }, 800);
      
    } catch (error) {
      console.error('Search error:', error);
      setLoading(false);
    }
  };

  const generateSearchResults = (query) => {
    const sampleTitles = [
      'The Shawshank Redemption',
      'The Dark Knight',
      'Pulp Fiction',
      'Forrest Gump',
      'Inception',
      'The Matrix'
    ];
    
    return sampleTitles
      .filter(title => title.toLowerCase().includes(query.toLowerCase()))
      .map((title, index) => ({
        id: Date.now() + index,
        title: title,
        overview: `Search result for "${query}". An acclaimed film with exceptional ratings and reviews.`,
        poster_path: `/search-${index + 1}`,
        vote_average: (7.5 + Math.random() * 2).toFixed(1),
        release_date: `${2010 + Math.floor(Math.random() * 14)}-06-15`,
        genre_ids: [18, 28]
      }));
  };

  const toggleFavorite = async (movie) => {
    const isFavorite = favorites.some(f => f.id === movie.id);
    
    if (isFavorite) {
      try {
        await window.storage.delete(`fav:${movie.id}`);
        setFavorites(favorites.filter(f => f.id !== movie.id));
      } catch (error) {
        console.error('Remove favorite error:', error);
      }
    } else {
      try {
        const favorite = {
          ...movie,
          addedAt: Date.now()
        };
        await window.storage.set(`fav:${movie.id}`, JSON.stringify(favorite));
        setFavorites([...favorites, favorite]);
      } catch (error) {
        console.error('Add favorite error:', error);
      }
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some(f => f.id === movieId);
  };

  const MovieCard = ({ movie }) => {
    const favorite = isFavorite(movie.id);
    
    return (
      <div className="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <Film className="w-16 h-16 text-gray-600" />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(movie);
              }}
              className={`p-2 rounded-full backdrop-blur transition-all ${
                favorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">
              <Star className="w-4 h-4 fill-current" />
              {movie.vote_average}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{movie.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-3 mb-3">{movie.overview}</p>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(movie.release_date).getFullYear()}
            </div>
            <button
              onClick={() => setSelectedMovie(movie)}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;
    
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <Film className="w-24 h-24 text-gray-600" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-5 h-5" />
                    {new Date(movie.release_date).getFullYear()}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    {movie.vote_average}/10
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(movie)}
                className={`p-3 rounded-full transition-all ${
                  isFavorite(movie.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                <Heart className={`w-6 h-6 ${isFavorite(movie.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Runtime</span>
                  </div>
                  <p className="text-white font-semibold">120 min</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">Popularity</span>
                  </div>
                  <p className="text-white font-semibold">High</p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Film className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white">FilmVibe</h1>
                <p className="text-purple-200">Movies that match your mood</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchMovies()}
                placeholder="Search for movies..."
                className="w-full bg-gray-800/50 text-white px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={searchMovies}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Search
            </button>
          </div>

          <nav className="flex gap-2 bg-gray-800/50 backdrop-blur rounded-xl p-2">
            <button
              onClick={() => setView('moods')}
              className={`flex-1 py-3 px-4 rounded-lg transition-all font-medium ${
                view === 'moods'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-5 h-5 inline mr-2" />
              Moods
            </button>
            <button
              onClick={() => setView('favorites')}
              className={`flex-1 py-3 px-4 rounded-lg transition-all font-medium ${
                view === 'favorites'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Heart className="w-5 h-5 inline mr-2" />
              Favorites ({favorites.length})
            </button>
          </nav>
        </header>

        {view === 'moods' && !selectedMood && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">How are you feeling today?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moods.map((mood) => {
                const Icon = mood.icon;
                return (
                  <button
                    key={mood.id}
                    onClick={() => selectMood(mood)}
                    className="group bg-gray-800/50 backdrop-blur rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 text-left"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${mood.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{mood.name}</h3>
                    <p className="text-gray-400">{mood.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {view === 'movies' && selectedMood && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedMood.name} Movies</h2>
                <p className="text-gray-400">{selectedMood.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedMood(null);
                  setView('moods');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse">
                    <div className="aspect-[2/3] bg-gray-700"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </div>
        )}

        {view === 'search' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Search Results for "{searchQuery}"</h2>
              <button
                onClick={() => {
                  setView('moods');
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse">
                    <div className="aspect-[2/3] bg-gray-700"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-20 h-20 mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try searching for something else</p>
              </div>
            )}
          </div>
        )}

        {view === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Favorite Movies</h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12 bg-gray-800/50 rounded-2xl">
                <Heart className="w-20 h-20 mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No favorites yet</h3>
                <p className="text-gray-400 mb-6">Start adding movies you love!</p>
                <button
                  onClick={() => setView('moods')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Discover Movies
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favorites.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </div>
        )}

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>
    </div>
  );
};

export default FilmVibe;