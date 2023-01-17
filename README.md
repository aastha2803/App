# App

## Download 

    git clone https://github.com/aastha2803/App.git

## Run 

    npm install
    npm start

## Bulid


### Generate Android and IOS 

    expo eject

### Create a New File (If Not Available)

create file index.android.bundle at android/app/src/main/assets/

#### Set SDK location 

##### Create local.properties File at ./android 

For Windows

    sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk

For Linux and Mac OSX

    sdk.dir = /Users/USERNAME/Library/Android/sdk


### Debug Build

#### Debug APK Generation
    
    npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    cd android && ./gradlew assembleDebug

#### Path of Debud apk

    android/app/build/outputs/apk/app-debug.apk
    
### Release Build

### Generate a keystore

    keytool -genkey -v -keystore am-demo.keystore -alias am-demo-alias -keyalg RSA -keysize 2048 -validity 10000

Enter your keystore password: Password

Re-enter new password: Password

What is your first and last name? [unknown]: Aastha Mujawdiya

What is the name of your organizational unit? [unknown]: AM Company

What is the name of your organization? [unknown]: AM

What is the name of your city or Locality? [unknown]: Indore

What is the name of your State or Province? [unknown]: MP

What is the two-letter country code for this unit? [unknown]: IN

#### Adding Keystore to your project

On Terminal
    
    mv am-demo.keystore ./android/app
    
open your android\app\build.gradle file and add the keystore configuration

    android {
    ....
      signingConfigs {
        release {
            storeFile file('am-demo.keystore')
            storePassword System.console() ? System.console().readLine("\nKeystore password:") ? ""
            keyAlias System.console() ? System.console().readLine("\nAlias: ") : ""
            keyPassword System.console() ? System.console().readLine("\nAlias password: ") : ""
        }
      }
      buildTypes {
        release {
          ....
          signingConfig signingConfigs.release
        }
      }
    }]

#### Release APK Generation

    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

    cd android

For Windows

    gradlew assembleRelease

For Linux and Mac OSX

    ./gradlew assembleRelease


#### Path of Debud apk

    android/app/build/outputs/apk/app-debug.apk
    
## Screen Shoot
<p>
  <img src="https://user-images.githubusercontent.com/103181989/212651319-c3736a08-8abe-42ee-98f9-289896b41f3b.png" width="200px"/>
  <img src="https://user-images.githubusercontent.com/103181989/212651394-d0d8b1b0-92c8-49dc-af07-75355dfe19b1.png" width="200px"/>  
  <img src="https://user-images.githubusercontent.com/103181989/212651397-7cf08863-dd2f-402b-94c2-9515996a0be0.png" width="200px"/>  
  <img src="https://user-images.githubusercontent.com/103181989/212651402-1db943f1-47be-48d5-b23d-0176ba757cc8.png" width="200px"/>
</p>
