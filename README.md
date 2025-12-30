# USA Curling Shot Tracker

A comprehensive Progressive Web App (PWA) for tracking curling shots, analyzing performance, and managing competition history. Built for coaches, players, and teams to improve their game through detailed statistics and visual analytics.

![USA Curling](usa_curling_logo.png)

## Features

### 🥌 Shot Tracking
- **Multiple Game Types**: Support for 4-person teams and Mixed Doubles
- **Detailed Shot Recording**: Track shot type, turn direction, outcome (0-4 scale), weight, and target location
- **Miss Analysis**: Record primary and secondary miss reasons for each shot
- **LSD Tracking**: Record Last Stone Draw measurements
- **Power Play Support**: Track power play usage in Mixed Doubles games
- **Real-time Score Tracking**: End-by-end score management with hammer tracking

### 📊 Analytics
- **Shooting Percentages**: Overall, by player, by shot type (draws/takeouts), by turn (clockwise/counter-clockwise)
- **Efficiency Stats**: Hammer efficiency, force efficiency, steal efficiency, steal defense
- **Target Heat Maps**: Visual representation of shooting percentage by target location
- **Miss Analysis**: Detailed breakdowns of misses by type, turn, shot type, and miss reason
- **Player Filtering**: Filter all analytics by individual player

### 📁 Competition Management
- **Competition History**: Archive games to competitions stored in IndexedDB
- **Season Overview**: Aggregate stats across all competitions with trend graphs
- **Team Filtering**: Filter season stats by team (useful for coaches tracking multiple teams)
- **Competition Stats**: Per-competition statistics with game-by-game breakdowns

### 📤 Export Options
- **CSV Exports**: 
  - Shot-by-shot data with all details
  - Team stats with shooting percentages and efficiency metrics
- **PDF Reports**: 
  - Game analytics with player tables, miss analysis, and heat maps
  - Competition summary reports
- **Backup/Restore**: JSON backup of competition data for safekeeping

### 📱 Progressive Web App
- **Offline Support**: Works without internet connection after initial load
- **Installable**: Add to home screen on mobile devices
- **Responsive Design**: Optimized for phones, tablets, and desktops

## Getting Started

### Online Access
Visit the hosted version at your GitHub Pages URL.

### Local Development
1. Clone the repository
2. Open `index.html` in a modern web browser
3. For full PWA features, serve via HTTPS (use a local server like `npx serve`)

### Installation on Mobile
1. Open the app in your mobile browser
2. Tap "Add to Home Screen" (iOS Safari) or install prompt (Android Chrome)
3. The app will work offline once installed

## Usage Guide

### Starting a New Game
1. Select game type (4-Person or Mixed Doubles)
2. Choose your team and opponent
3. Select or create a competition
4. Set the competition round and game date
5. Configure stat tracking options (Quick Stats or Advanced Stats)
6. Set first end hammer
7. Click "Start Game"

### Recording Shots
1. Navigate to the Tracking tab
2. Select the player throwing
3. Choose turn direction (Clockwise/Counter-Clockwise)
4. Select shot type
5. Record outcome (0-4)
6. Optionally record miss reasons, weight, and target location
7. Click "Log Shot"

### Viewing Analytics
- **During Game**: Switch to Analytics tab to see real-time stats
- **After Game**: Archive the game to a competition for permanent storage
- **Season Stats**: View Season Stats tab for aggregate data across competitions

### Managing Competitions
1. Go to Season Stats → Competitions tab
2. Select a competition from the dropdown
3. View cumulative stats, filter by game, or export reports
4. Use backup/restore to safeguard your data

## Data Storage

- **Current Game**: Stored in localStorage (persists until new game started)
- **Competition History**: Stored in IndexedDB (permanent until manually deleted)
- **Settings**: Stored in localStorage

## Stat Definitions

### Shooting Percentage
Points scored divided by maximum possible points (shots × 4), expressed as percentage.

### Efficiency Stats
- **Hammer Efficiency**: Percentage of ends with hammer where team scored 2+ (excluding blanks)
- **Force Efficiency**: Percentage of ends opponent had hammer where they scored exactly 1
- **Steal Efficiency**: Percentage of ends without hammer where team stole 1+
- **Steal Defense**: Percentage of ends with hammer where opponent stole (lower is better)

### Shot Categories
- **Draws**: Draw, Tap, Center Guard, Corner Guard, Freeze, Trick Shot
- **Takeouts**: Dig, Peel, Double Peel, Takeout, Double Takeout, Hit and Roll, Runback

## Browser Support

- Chrome (recommended)
- Safari
- Firefox
- Edge

## Technical Details

- **Frontend**: React 18 (via CDN)
- **Styling**: Inline styles with CSS custom properties
- **Data Storage**: localStorage + IndexedDB
- **PDF Generation**: jsPDF with autoTable plugin
- **CSV Parsing**: PapaParse
- **Service Worker**: Custom caching strategy for offline support

## Version History

### v51 (Current)
- Added Team Competition Stats section in Competitions tab
- Moved Target Heat Maps above Miss Analysis in Competitions tab
- Fixed efficiency stats calculations (per-end scoring)
- Added success notification for competition creation
- Sorted competition graphs by game date

### v50
- Competition creation success notifications
- Season Overview graphs sorted by earliest game date

### v49
- Fixed efficiency stats bug (was treating per-end scores as cumulative)
- Corrected Hammer Eff, Steal Eff, and Steal Def calculations

### v48
- Moved Target Heat Maps above Miss Analysis in Analytics tab
- Flipped heat map Y-axis in PDF exports
- Fixed Competition Summary PDF export (added autoTable plugin)

### Previous Versions
- Season Stats with Overview and Competitions sub-tabs
- Team filtering for multi-team tracking
- Trend graphs for efficiency, shooting percentage, and misses
- Heat maps with target location analysis
- CSV and PDF export functionality
- Competition archiving with IndexedDB
- Backup and restore functionality

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is designed for use by USA Curling teams and coaches.

## Acknowledgments

- USA Curling for inspiration and requirements
- The curling community for feedback and testing
