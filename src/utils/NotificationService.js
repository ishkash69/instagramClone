import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import notifee, { AndroidImportance } from '@notifee/react-native';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}
const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken")
    console.log(fcmToken, "old Token")
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken, "new token generated")
                await AsyncStorage.setItem("fcmToken", fcmToken)
            }
        } catch (error) {
            console.log(error, "error raised in the fcm token")
            alert("errrr error")
        }
    }
}

export const notificationListener = async () => {
    // background
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log("notification caused app to open from background state", remoteMessage.notification)
    })

    // foreground
    messaging().onMessage(async (remoteMessege) => {
        console.log("recieved in foreground", remoteMessege)
        onMessageRcieved(remoteMessege)
        // onDisplayNotification(remoteMessege)
    })

    // quit state
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log("notification caused app to open from quit state", remoteMessage.notification)
            }
        })
}
async function onMessageRcieved(message) {

    const { title, body } = message.notification
    // console.log("title", title)
    // console.log("foreground message", message.notification)
    await notifee.displayNotification({
        title: title,
        body: body,
        android: {
            channelId: "default",
            importance:AndroidImportance.HIGH
        }
    });
}


// async function onDisplayNotification(remoteMessage) {
//     // Request permissions (required for iOS)
//     // await notifee.requestPermission()
//     console.log("onDisplayNotification called")
//     // Create a channel (required for Android)
//     const channelId = await notifee.createChannel({
//         id: 'default',
//         name: 'Default Channel',
//         importance: AndroidImportance.HIGH
//     });

//     // Display a notification
//     await notifee.displayNotification({
//         title: remoteMessage.notification.title,
//         body: remoteMessage.notification.body,
//         android: {
//             channelId,
//         },
//     });
    
// }   