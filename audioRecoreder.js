import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native"
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { request, PERMISSIONS } from "react-native-permissions";

function AudioRecorder({ onRecordComplte}) {
    const [isRecording, setIsRecording] = useState(false)
    const [recordingTime, setRecordingTime] = useState(0)
    const [audioFile, setAudioFile] =useState(null)
    const audioRecoerderPlayer = new AudioRecorderPlayer()

    useEffect(() => {
        request(PERMISSIONS.ANDROID.RECORD_AUDIO).then((result) => {
            if (result !== "granted") {
                Alert.alert("Permisson Denied", "You need to grant microphone permission")
            }
        })
    }, [])

    const startRecording = async () => {
        setIsRecording(true)
        const path = "audio" + Date.now() + ".mp4"
        const result = await audioRecoerderPlayer.startRecorder(path)
        audioRecoerderPlayer.addPlayBackListener((e) => {
            setRecordingTime(e.currentPosition)
        })
        setAudioFile(result)
    }

    const stopRecording = async () => {
        setIsRecording(false)
        await audioRecoerderPlayer.stopRecorder()
        audioRecoerderPlayer.removePlayBackListener()
        if (onRecordComplte) {
            onRecordComplte(audioFile)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.recordingText}>
                {isRecording ? `Recording...${Math.floor(recordingTime)}s`: "Press to Record"}
            </Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={isRecording ? stopRecording : startRecording}
            >
              <Text style={styles.buttonText}>{isRecording ? "Stop Recording":"Start Recording"}</Text>  
            </TouchableOpacity>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
    },
    recordingText: {
      fontSize: 18,
      marginBottom: 20,
    },
    button: {
      padding: 15,
      backgroundColor: '#6200EE',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  })


