# Text to speech & Recognizing speech and converting to emotion

Two Functionalities are included in this

1. Text to speech

   Accept input as text and converting it to mp3 file
   Works on 5000 port
  
   Run 'node index.js' from the root folder
   
   Access localhost:5000 in browser. Enter the text to convert and submit. The newly created audio would be saved to project root folder.
  
2. Speech to emotion

   Speech will be converted to emotion
   
   Works on 3000 port
   
   Run 'npm run server' from src/ folder.
   
   Access localhost:3000 in browser. Can be seen the emoji for listening. If we speak something like happy, sad etc corresponding emoji will be shown.
   
   If could not capture any voice within sometime it will be gone to idle emoji.
