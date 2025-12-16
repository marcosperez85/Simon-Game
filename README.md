# Simon Game PWA

This is a Simon Game implemented as a Progressive Web Application (PWA). The game challenges your memory by showing a sequence of colored panels that light up, which you must repeat in the same order.

## Features

- Classic Simon gameplay with four colored panels
- Round counter to track your progress
- Installable as a PWA for offline play
- Mobile-friendly design

## How to Play

1. Press the "Play" button in the center to start the game
2. Watch the sequence of panels that light up
3. Repeat the sequence by clicking on the panels in the same order
4. Each round adds one more step to the sequence
5. The game continues until you make a mistake

## Installing on iPhone (Safari)

To install this Simon Game PWA on your iPhone:

1. Open the game website in Safari
2. Tap the Share button at the bottom of the screen (the square with an up arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name your app (or keep the default name) and tap "Add"
5. The Simon Game icon will appear on your home screen, and you can launch it like any other app

## Updating the PWA

When a new version is released:

1. The PWA will automatically update when you visit it again if the `CACHE_NAME` value in the service-worker.js file has been changed
2. If you're developing this app, increment the `CACHE_NAME` variable (e.g., from "simon-game-v1" to "simon-game-v2") to ensure users receive the updated files