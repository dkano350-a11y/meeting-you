Meeting You — a Hinglish romance visual novel (Chapter 1 + 2) by Rutvik Dangar, with Google login and cloud saves.
Live: https://dkano350-a11y.github.io/meeting-you/
Firebase setup: fill firebase-config.js, enable Google sign-in in Authentication, add dkano350-a11y.github.io to Authorized domains, create Firestore with rule `match /saves/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }`.
