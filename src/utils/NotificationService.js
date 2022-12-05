import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import notifee from '@notifee/react-native';

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
const getFcmToken = async ()=>{
    let fcmToken = await AsyncStorage.getItem("fcmToken")
    console.log(fcmToken,"old Token")
    if(!fcmToken){
        try {
            const fcmToken = await messaging().getToken();
            if(fcmToken){
                console.log(fcmToken,"new token generated")
                await AsyncStorage.setItem("fcmToken",fcmToken)
            }
        } catch (error) {
            console.log(error,"error raised in the fcm token")
            alert("errrr error")
        }
    }
}

export const notificationListener = async()=>{
    // background
    messaging().onNotificationOpenedApp(remoteMessage =>{
        console.log("notification caused app to open from background state",remoteMessage.notification)
    })

    // foreground
    // messaging().onMessage(async remoteMessege =>{
    //     console.log("recieved in foreground",remoteMessege)
    // })
     await notifee.displayNotification(remoteMessage=>{
        console.log("recieved in foreground",remoteMessage)
     })

    // quit state
    messaging()
    .getInitialNotification()
    .then(remoteMessage=>{
        if(remoteMessage){
            console.log("notification caused app to open from quit state",remoteMessage.notification)
        }
    })
}

// export async function onDisplayNotification() {
//     // Request permissions (required for iOS)
//     // await notifee.requestPermission()

//     // Create a channel (required for Android)
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//     });

//     // Display a notification
//     await notifee.displayNotification({
//       title: 'Notification Title',
//       body: 'Main body content of the notification',
//       android: {
//         channelId,
//         smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//         // pressAction is needed if you want the notification to open the app when pressed
//         pressAction: {
//           id: 'default',
//         },
//       },
//     });
//   }