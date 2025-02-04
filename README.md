<img src="https://socialify.git.ci/zibusisojnduna/Task-27-Enhancing-the-Audio-Recording-App/image?language=1&name=1&owner=1&stargazers=1&theme=Dark" alt="Task-27-Enhancing-the-Audio-Recording-App" width="640" height="320" />

<h1>Task 27-Enchancing The Recording App</h1>

<p>A simple mobile app to record, play, and delete voice notes using React Native. This app allows users to create digital journal entries in the form of audio recordings, view a list of recorded notes, and manage recordings easily.</p>

<h2>Features</h2>

<p>Record Audio: Record voice notes using the device’s microphone.</p>
<p>Playback: Play back recorded voice notes.</p>
<p>Delete: Delete unwanted voice notes.</p>
<p>Create New Note: Start a new audio recording with a simple button press.</p>
<p>Permissions: Handles microphone and storage permissions for iOS and Android.</p>
<p>List of Voice Notes: Displays all recorded voice notes with details (date and time).</p>
<p>Local Storage: Voice notes are stored and retrieved using AsyncStorage.</p>

<h2>Prerequisites</h2>

<p>To run this app locally, ensure you have the following installed:</p>

<p>Node.js</p>

<p>React Native CLI</p>

<p>Android Studio or Xcode</p>

<h1>Setup Insructions</h1>

<h1>1. Clone repository</h1>

<p>Clone this repository onto your local machine:</p>

```
git clone https://github.com/zibusisojnduna/Task-26-Audio-Recording-App
```

<h2>2. Install Dependencies</h2>

<p>Navigate to the project directory and install the required packages:</p>

```
cd Task-26-Audio-Recording-App
npm install
```

<p>or if you're using yarn:</p>

```
yarn install
```

<h2>3. Set Up Permissions</h2>

<p>Ensure you have the necessary permissions to access the microphone and storage.</p>

<h2>iOS</h2>

<p>Open the ios/YourProjectName/Info.plist file.</p>

<p>Add the following permission descriptions:</p>

```
<key>NSMicrophoneUsageDescription</key>
<string>We need access to your microphone to record voice notes.</string>
<key>NSAppleMusicUsageDescription</key>
<string>We need access to your music library for playback.</string>
```

<h2>Android</h2>

<p>Open android/app/src/main/AndroidManifest.xml and add the following permissions</p>

```
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

<h1>4. Run The App</h1>

<h2>For iOS:</h2>

```
npx react-native run-ios
```

<h2>For Android:</h2>

```
npx react-native run-android
```

<h1>5. Use The App</h1>

<h2>Once the app is running:</h2>

<p>Start a New Recording: Tap the "Start Recording" button to begin recording.</p>
<p>Stop Recording: Tap "Stop Recording" to finish the audio note.</p>
<p>View List of Voice Notes: Recorded notes will appear with the date and time.</p>
<p>Play Voice Notes: Tap "Play" to listen to a recording.</p>
<p>Delete Voice Notes: Tap "Delete" to remove a voice note from the list.</p>

