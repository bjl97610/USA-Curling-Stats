# USA Curling Shot Tracker

A Progressive Web App (PWA) for tracking curling shots during games. Works offline and can be installed on any device.

## Features

### Game Setup
- Support for **4 Person**, **3 Person**, and **Mixed Doubles** game formats
- Configurable game length (8 or 10 ends)
- Team and opponent naming
- Competition and round tracking
- First end hammer selection
- Customizable lineup from player roster

### Shot Tracking
- Track every shot with detailed attributes:
  - Ice conditions
  - Turn (In-Turn / Out-Turn)
  - Shot type (Draw, Takeout, Hit and Roll, Freeze, Guard, Raise, Peel, Throw Through)
  - Outcome (0-4 scale)
  - Miss type (Wide, Narrow, Heavy, Light, Burnt, Picked, Released Late, Released Early, Broke Wrong Way)
  - Shot weight
  - Key shot designation
  - Power Play tracking (Mixed Doubles only)
  - Comments
- Automatic position assignment based on shot number
- End-by-end score tracking
- Hammer tracking with automatic updates

### Analytics
- **Score by End Table**: Visual game progression with hammer indicators and cumulative scores
- **WCF Shot Success Analysis**: Player statistics broken down by:
  - Draw shots (In-Turn, Out-Turn, Total)
  - Takeout shots (In-Turn, Out-Turn, Total)
  - Overall totals
- **Miss Matrix**: Frequency analysis of miss types for Draws and Takeouts
- Game outcome tracking (Win/Loss with final score)

### Editor
- Modify game settings mid-game (with confirmation for lineup changes)
- Edit scores for any end
- Change hammer assignments
- Adjust first end hammer setting (locked after game starts)

### Export Options
- **CSV Export**: Complete shot-by-shot data with all fields including:
  - Player name and User ID
  - Date (DD/MM/YYYY format)
  - Competition details
  - Shot details and outcomes
  - Score differential
  - End outcome (Scored, Stole, Forced, Blank, etc.)
  - Game outcome
  - Power Play (Mixed Doubles)
- **PDF Export**: Professional game report including:
  - Game summary header
  - Score by End table
  - Shot Success Analysis table
  - Miss matrices (Draws and Takeouts side-by-side)

### Progressive Web App
- **Works Offline**: Full functionality without internet connection
- **Installable**: Add to home screen on any device
- **Responsive**: Works on phones, tablets, and desktops
- **Data Persistence**: Games saved locally in browser storage

## Installation

### As a Web App
Simply visit the hosted URL in any modern browser.

### Install on Device
1. Open the app in your browser
2. **iOS**: Tap Share → "Add to Home Screen"
3. **Android**: Tap the menu → "Install app" or "Add to Home Screen"
4. **Desktop**: Click the install icon in the address bar

## Browser Support

- Chrome 80+
- Safari 14+
- Firefox 75+
- Edge 80+

## Offline Functionality

The service worker caches all necessary assets for full offline operation:
- Application files (HTML, manifest, icons)
- External libraries (React, Babel, PapaParse, jsPDF)
- Google Fonts

Data is stored in the browser's localStorage, ensuring games persist between sessions.

## License

All rights reserved. The USA Curling logo and branding are trademarks of USA Curling.

## Support

For issues or feature requests, please contact USA Curling or open an issue in the repository.
