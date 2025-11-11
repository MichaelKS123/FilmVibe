# FilmVibe 🎬

**Mood-Based Movie Recommendations**

*Developed by Michael Semera*

---

## 🎬 Overview

FilmVibe is an innovative movie recommendation application that suggests films based on your current mood. By selecting how you're feeling, the app curates a personalized list of movies from TMDB (The Movie Database) API that perfectly match your emotional state. With a beautiful, modern interface and intelligent mood-to-genre mapping, FilmVibe makes movie discovery an intuitive and enjoyable experience.

Whether you're feeling happy, melancholic, excited, romantic, relaxed, or mysterious, FilmVibe has the perfect movie waiting for you.

---

## ✨ Key Features

### Mood-Based Discovery
- **6 Distinct Moods**: Happy, Melancholic, Excited, Romantic, Relaxed, Mysterious
- **Smart Genre Mapping**: Each mood mapped to relevant movie genres
- **Curated Recommendations**: Highly-rated films matching your emotional state
- **Visual Mood Cards**: Beautiful gradient designs for each mood

### Movie Management
- **Detailed Movie Cards**: Poster, title, rating, year, and description
- **Favorites System**: Save movies you love for later
- **Movie Details Modal**: Expanded information with overview and stats
- **Quick Actions**: Add to favorites directly from cards

### Search & Browse
- **Movie Search**: Find specific films by title
- **Real-time Search**: Instant results as you type
- **Search History**: Previously searched terms saved
- **Filtered Results**: High-quality recommendations only

### User Experience
- **Modern Dark Theme**: Purple/pink gradients on dark background
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Skeleton screens during data fetching
- **Persistent Favorites**: Saved across sessions

---

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern component-based architecture
- **React Hooks**: useState, useEffect for state management
- **Lucide React**: Professional icon library
- **Tailwind CSS**: Utility-first styling with custom gradients

### API Integration
- **TMDB API**: The Movie Database for real movie data
- **RESTful Endpoints**: Movie discovery, search, and details
- **Async/Await**: Modern promise-based API calls
- **Error Handling**: Graceful fallbacks for API failures

### Data Management
- **Browser Storage API**: Persistent favorites storage
- **JSON Serialization**: Structured data storage
- **Async Operations**: Non-blocking storage operations
- **Local-First**: Works offline with cached data

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed
- TMDB API Key (free account at themoviedb.org)
- Modern web browser

### Quick Start

1. **Create React Application**
```bash
npx create-react-app filmvibe
cd filmvibe
```

2. **Install Dependencies**
```bash
npm install lucide-react
```

3. **Setup Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Get TMDB API Key**
- Visit https://www.themoviedb.org/
- Create free account
- Go to Settings → API → Request API Key
- Copy your API key

5. **Add API Key to Code**
- Open the FilmVibe component
- Find the `apiKey` variable (line ~117)
- Replace empty string with your API key:
```javascript
const apiKey = 'YOUR_TMDB_API_KEY_HERE';
```

6. **Enable Real API Calls**
- Uncomment the real API call sections (marked in comments)
- Comment out the demo simulation sections

7. **Start Development Server**
```bash
npm start
```

8. **Access Application**
- Open `http://localhost:3000`

### Production Build
```bash
npm run build
```

---

## 💡 User Guide

### Selecting a Mood

1. **Choose Your Mood**
   - View the 6 mood cards on the home screen
   - Each mood has a unique color and icon
   - Read the description to find your match

2. **Explore Recommendations**
   - Click on any mood card
   - App loads movies matching that mood
   - Browse through curated recommendations

3. **Switch Moods**
   - Click the X button to return to mood selection
   - Try different moods to discover new films

### Mood-to-Genre Mapping

**Happy & Uplifting** 😊
- Genres: Comedy, Family, Animation
- Examples: Feel-good comedies, family adventures
- Perfect for: Boosting spirits, lighthearted fun

**Melancholic** 😢
- Genres: Drama, Romance
- Examples: Emotional dramas, touching love stories
- Perfect for: Emotional catharsis, deep reflection

**Excited & Energetic** ⚡
- Genres: Action, Adventure, Sci-Fi
- Examples: High-octane action, epic adventures
- Perfect for: Adrenaline rush, thrilling experiences

**Romantic** ❤️
- Genres: Romance, Romantic Comedy
- Examples: Love stories, rom-coms
- Perfect for: Date nights, warm feelings

**Relaxed & Chill** ☕
- Genres: Music, Documentary
- Examples: Easy-watching docs, music films
- Perfect for: Winding down, background viewing

**Mysterious** ✨
- Genres: Mystery, Thriller, Horror
- Examples: Suspenseful thrillers, puzzling mysteries
- Perfect for: Edge-of-seat viewing, brain teasers

### Managing Favorites

**Adding to Favorites**
1. Click the heart icon on any movie card
2. Heart turns red indicating it's favorited
3. Movie saved to your favorites list

**Viewing Favorites**
1. Click "Favorites" tab in navigation
2. See all your saved movies
3. Access anytime, even offline

**Removing from Favorites**
1. Click the filled red heart icon
2. Heart becomes outlined
3. Movie removed from favorites

### Searching for Movies

1. **Enter Search Term**
   - Type movie title in search bar
   - Press Enter or click Search button

2. **View Results**
   - Results displayed in grid layout
   - Same card format as mood recommendations

3. **Clear Search**
   - Click X button to return to moods
   - Search query cleared automatically

### Viewing Movie Details

1. **Open Details Modal**
   - Click "Details" button on any movie card
   - Modal appears with expanded information

2. **Explore Information**
   - Read full overview
   - See runtime, popularity, rating
   - View release year

3. **Quick Actions**
   - Add/remove from favorites
   - Watch trailer (links to trailer)
   - Close modal with X button

---

## 🏗️ Architecture

### Component Structure

```
FilmVibe (Main Component)
├── State Management
│   ├── selectedMood: Currently selected mood
│   ├── movies: Movie list for selected mood
│   ├── favorites: User's favorite movies
│   ├── loading: Loading state
│   ├── view: Current view (moods/movies/search/favorites)
│   ├── selectedMovie: Movie for detail modal
│   ├── searchQuery: Current search term
│   └── searchResults: Search result movies
├── Mood System
│   ├── Mood Cards: Visual mood selection
│   ├── Genre Mapping: Mood to TMDB genre IDs
│   └── Color Themes: Gradient styling per mood
├── Movie Display
│   ├── MovieCard: Reusable movie card component
│   ├── MovieModal: Detailed movie information
│   └── Grid Layouts: Responsive movie grids
├── API Integration
│   ├── selectMood(): Fetch mood-based movies
│   ├── searchMovies(): Search TMDB
│   └── Error Handling: Graceful API failures
└── Favorites System
    ├── toggleFavorite(): Add/remove favorites
    ├── loadFavorites(): Load from storage
    └── Persistence: Browser storage API
```

### Data Models

```typescript
// Mood Configuration
interface Mood {
  id: string;                    // Unique identifier
  name: string;                  // Display name
  icon: LucideIcon;              // Icon component
  color: string;                 // Tailwind gradient classes
  genres: number[];              // TMDB genre IDs
  description: string;           // Mood description
}

// Movie Object (from TMDB API)
interface Movie {
  id: number;                    // TMDB movie ID
  title: string;                 // Movie title
  overview: string;              // Plot synopsis
  poster_path: string;           // Poster image path
  vote_average: number;          // Rating (0-10)
  release_date: string;          // Release date (YYYY-MM-DD)
  genre_ids: number[];           // Array of genre IDs
}

// Favorite (Extended Movie)
interface Favorite extends Movie {
  addedAt: number;               // Timestamp when favorited
}
```

### Storage Schema

**Favorites Storage**
```
Key: fav:{movieId}
Value: JSON string of Favorite object

Example:
fav:12345 -> {
  "id": 12345,
  "title": "Inception",
  "overview": "A thief who steals...",
  "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  "vote_average": 8.4,
  "release_date": "2010-07-16",
  "genre_ids": [28, 878, 53],
  "addedAt": 1699564800000
}
```

---

## 🎨 TMDB API Integration

### API Endpoints Used

**Discover Movies by Genre**
```javascript
// Endpoint
GET https://api.themoviedb.org/3/discover/movie

// Parameters
?api_key={YOUR_API_KEY}
&with_genres={GENRE_IDS}
&sort_by=popularity.desc
&vote_average.gte=6
&vote_count.gte=100

// Example
https://api.themoviedb.org/3/discover/movie?api_key=xxx&with_genres=35,10751&sort_by=popularity.desc
```

**Search Movies**
```javascript
// Endpoint
GET https://api.themoviedb.org/3/search/movie

// Parameters
?api_key={YOUR_API_KEY}
&query={SEARCH_TERM}
&page=1

// Example
https://api.themoviedb.org/3/search/movie?api_key=xxx&query=inception
```

**Get Movie Details**
```javascript
// Endpoint
GET https://api.themoviedb.org/3/movie/{MOVIE_ID}

// Parameters
?api_key={YOUR_API_KEY}

// Example
https://api.themoviedb.org/3/movie/27205?api_key=xxx
```

### Genre IDs Reference

```javascript
// TMDB Genre IDs
const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};
```

### Image URLs

TMDB provides images at different sizes:
```javascript
// Base URL
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

// Poster sizes
const posterSizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];

// Backdrop sizes
const backdropSizes = ['w300', 'w780', 'w1280', 'original'];

// Full URL example
const posterUrl = `${imageBaseUrl}w500${movie.poster_path}`;
```

### Rate Limiting

TMDB API limits:
- **Free Tier**: 40 requests per 10 seconds
- **Total**: Unlimited daily requests
- **Best Practice**: Cache results, debounce searches

---

## 🎯 Mood Algorithm

### How Mood Mapping Works

FilmVibe uses a sophisticated mood-to-genre mapping system:

**1. Mood Selection**
- User selects emotional state
- System retrieves associated genres

**2. Genre Combination**
- Multiple genres mapped per mood
- Allows for diverse recommendations
- Captures mood nuances

**3. Quality Filtering**
- Minimum rating threshold (6.0+)
- Popularity-based sorting
- Vote count requirements

**4. Result Curation**
- Top 12 movies returned
- Balanced genre distribution
- Fresh recommendations each time

### Example: Happy Mood

```javascript
{
  id: 'happy',
  name: 'Happy & Uplifting',
  genres: [35, 10751, 16], // Comedy, Family, Animation
  
  // API Query
  with_genres: '35,10751,16',
  sort_by: 'popularity.desc',
  vote_average.gte: 6,
  
  // Results include:
  - Feel-good comedies
  - Uplifting family films
  - Joyful animations
}
```

---

## 🎨 Design Philosophy

### Visual Identity
- **Color Palette**: Purple/pink gradients on dark backgrounds
- **Mood Colors**: Unique gradient per mood
- **Typography**: Bold headings, readable descriptions
- **Iconography**: Lucide icons for consistency

### User Experience Principles

**1. Simplicity**
- Clear mood selection
- Obvious navigation
- Minimal clicks to discovery

**2. Visual Feedback**
- Hover effects on cards
- Loading states
- Success animations

**3. Personalization**
- Mood-based curation
- Favorites system
- Personal movie library

**4. Performance**
- Fast load times
- Smooth animations
- Responsive interactions

### Accessibility
- **High Contrast**: White text on dark backgrounds
- **Large Touch Targets**: Easy clicking/tapping
- **Keyboard Navigation**: Full keyboard support
- **Semantic HTML**: Proper heading hierarchy

---

## 🔄 Future Enhancements

### v2.0 Features
- **User Accounts**: Login and sync across devices
- **Watch Lists**: Multiple curated lists
- **Movie Ratings**: Rate movies you've watched
- **Recommendations**: AI-based personalized suggestions
- **Social Sharing**: Share favorites with friends

### v3.0 Features
- **Streaming Links**: Direct links to watch on platforms
- **Trailer Integration**: Watch trailers in-app
- **Advanced Filters**: Year, rating, runtime filters
- **Similar Movies**: Discover related films
- **Movie Collections**: Curated themed collections

### v4.0 Features
- **Mood Journal**: Track mood and viewing history
- **Statistics**: Personal viewing analytics
- **Group Mode**: Watch parties and shared lists
- **Mobile Apps**: iOS and Android native apps
- **Offline Mode**: Full offline functionality

---

## 🐛 Troubleshooting

### API Issues

**Movies Not Loading**
- Verify API key is correct
- Check TMDB API status
- Ensure internet connection
- Check browser console for errors

**Images Not Displaying**
- TMDB image URLs might be blocked
- Check Content Security Policy
- Verify poster_path is valid
- Fallback to placeholder icon

**Rate Limit Errors**
- Wait 10 seconds before retrying
- Implement request caching
- Debounce search inputs

### Storage Issues

**Favorites Not Persisting**
- Check browser storage permissions
- Verify storage quota not exceeded
- Clear browser cache
- Try different browser

**Storage Quota Exceeded**
- Remove old favorites
- Clear browser data
- Increase quota if possible

### Performance Issues

**Slow Loading**
- Reduce number of results
- Implement pagination
- Cache API responses
- Optimize images

**Laggy Animations**
- Reduce animation complexity
- Use CSS transforms
- Minimize re-renders
- Check browser performance

---

## 📚 API Usage Examples

### Fetching Mood-Based Movies

```javascript
async function fetchMoodMovies(mood) {
  const apiKey = 'YOUR_API_KEY';
  const genreIds = mood.genres.join(',');
  
  const url = `https://api.themoviedb.org/3/discover/movie?` +
    `api_key=${apiKey}&` +
    `with_genres=${genreIds}&` +
    `sort_by=popularity.desc&` +
    `vote_average.gte=6&` +
    `vote_count.gte=100&` +
    `page=1`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.slice(0, 12);
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}
```

### Searching Movies

```javascript
async function searchMovies(query) {
  const apiKey = 'YOUR_API_KEY';
  
  const url = `https://api.themoviedb.org/3/search/movie?` +
    `api_key=${apiKey}&` +
    `query=${encodeURIComponent(query)}&` +
    `page=1`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Search Error:', error);
    return [];
  }
}
```

### Building Image URLs

```javascript
function getImageUrl(path, size = 'w500') {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// Usage
const posterUrl = getImageUrl(movie.poster_path, 'w500');
const backdropUrl = getImageUrl(movie.backdrop_path, 'w1280');
```

---

## 🔐 Security & Privacy

### API Key Security

**Development**
- Store API key in environment variables
- Never commit keys to version control
- Use `.env` files with `.gitignore`

**Production**
```javascript
// Use environment variables
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

// .env file
REACT_APP_TMDB_API_KEY=your_api_key_here

// .gitignore
.env
.env.local
```

### Data Privacy
- No personal data collected
- Favorites stored locally only
- No user tracking
- No third-party analytics (optional)

### Best Practices
- Implement rate limiting
- Cache API responses
- Validate user input
- Sanitize search queries
- Handle errors gracefully

---

## 📊 Performance Optimization

### Current Optimizations
- **Lazy Loading**: Load movies on demand
- **Image Placeholders**: Icon fallbacks for missing posters
- **Debounced Search**: Prevent excessive API calls
- **Result Limiting**: Max 12 movies per request
- **Conditional Rendering**: Only render active view

### Production Optimizations

**Caching Strategy**
```javascript
// Implement API response caching
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  
  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  
  return data;
}
```

**Image Optimization**
```javascript
// Use appropriate image sizes
const sizes = {
  card: 'w342',      // Movie cards
  modal: 'w500',     // Detail modal
  backdrop: 'w1280'  // Backgrounds
};
```

**Code Splitting**
```javascript
// Lazy load modal component
const MovieModal = React.lazy(() => import('./MovieModal'));
```

---

## 🧪 Testing

### Manual Testing Checklist

**Mood Selection**
- [ ] All mood cards clickable
- [ ] Movies load for each mood
- [ ] Correct genres for each mood
- [ ] Loading states display

**Favorites**
- [ ] Add to favorites works
- [ ] Remove from favorites works
- [ ] Favorites persist on reload
- [ ] Favorites tab displays correctly

**Search**
- [ ] Search finds movies
- [ ] Results display correctly
- [ ] Clear search works
- [ ] No results message shows

**Movie Details**
- [ ] Modal opens on click
- [ ] All information displays
- [ ] Close button works
- [ ] Favorite toggle in modal works

**Responsive Design**
- [ ] Works on mobile
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] All breakpoints functional

### Automated Testing

```javascript
// Example test suite
describe('FilmVibe', () => {
  describe('Mood Selection', () => {
    it('should display all mood cards', () => {});
    it('should load movies for selected mood', () => {});
    it('should show loading state', () => {});
  });
  
  describe('Favorites', () => {
    it('should add movie to favorites', () => {});
    it('should remove movie from favorites', () => {});
    it('should persist favorites', () => {});
  });
  
  describe('Search', () => {
    it('should search and display results', () => {});
    it('should handle empty results', () => {});
  });
});
```

---

## 🤝 Contributing

This is a portfolio project by Michael Semera. Feedback and suggestions are welcome!

---

## 📄 License

This project is created for portfolio purposes. All rights reserved by Michael Semera.

---

## 👨‍💻 About the Developer

**Michael Semera**
- Portfolio Project: FilmVibe
- Specialization: Frontend development with API integration
- Focus: Building intuitive, mood-driven discovery experiences

### Skills Demonstrated
- React component architecture
- RESTful API integration
- State management
- Responsive design
- User experience design
- Data persistence

---

## 🙏 Acknowledgments

- **TMDB**: The Movie Database for comprehensive movie data
- **Lucide Icons**: Beautiful, consistent iconography
- **Tailwind CSS**: Rapid UI development
- **React Team**: Excellent framework and documentation

---

## 📞 Support

For questions about this project, please contact Michael Semera.

- 💼 LinkedIn: [Michael Semera](https://www.linkedin.com/in/michael-semera-586737295/)
- 🐙 GitHub: [@MichaelKS123](https://github.com/MichaelKS123)
- 📧 Email: michaelsemera15@gmail.com

### Useful Links
- TMDB API Documentation: https://developers.themoviedb.org/3
- TMDB Sign Up: https://www.themoviedb.org/signup
- React Documentation: https://react.dev

---

**Discover Movies That Match Your Mood. 🎬**

*Built with passion by Michael Semera*

*Last Updated: November 2025*