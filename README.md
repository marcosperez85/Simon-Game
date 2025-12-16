# Simon Game PWA

This is a digital implementation of the classic Simon memory game as a Progressive Web Application (PWA), allowing it to be installed on mobile devices and played offline.

## Game Overview

Simon is a memory game where:
1. The computer creates a sequence of colored panels that light up
2. The player must repeat the sequence by clicking on the panels in the correct order
3. Each round adds one more step to the sequence
4. The game continues until the player makes a mistake

## Features

- Four colored panels (red, blue, green, yellow)
- Round counter tracking your progress
- Visual feedback when panels are pressed
- Progressive Web App (PWA) functionality for offline play
- Responsive design for both desktop and mobile devices

## How to Play

1. Press the "Play" button in the center to start the game
2. Watch the sequence of panels that light up during the computer's turn
3. Repeat the sequence by clicking on the panels in the same order during your turn
4. Each round adds one more random panel to the sequence
5. If you make a mistake, the game will end and you can restart by pressing "Play" again

## Installing on iPhone (Safari)

To install this Simon Game PWA on your iPhone:

1. Open the game website in Safari
2. Tap the Share button at the bottom of the screen (the square with an up arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name your app (or keep the default name "Simon Game") and tap "Add"
5. The Simon Game icon will appear on your home screen, and you can launch it like any other app

## Updating the PWA

When a new version is released:

1. The PWA will automatically update when you visit it again if the `CACHE_NAME` value in the service-worker.js file has been changed
2. If you're developing this app, increment the `CACHE_NAME` variable (e.g., from "simon-game-v1" to "simon-game-v2") to ensure users receive the updated files
3. Users will get the new version the next time they open the app after the service worker detects the change

## Removing the PWA from iPhone

To delete the Simon Game PWA from your iPhone:

1. Press and hold the app icon on your home screen until it starts wiggling
2. Tap the "X" in the corner of the app icon (or tap "Remove App" if using iOS 13+)
3. Confirm by tapping "Delete" in the popup dialog
4. This will remove the app from your home screen

## Technical Details

The game is built with:
- HTML for structure
- CSS for styling and layout
- JavaScript for game logic and interactivity
- Service Worker for offline functionality
```