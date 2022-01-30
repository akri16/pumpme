[![API](https://img.shields.io/badge/Backend-Project-orange)](https://github.com/akri16/pumpme-backend)

### BACKEND Project: https://github.com/akri16/pumpme-backend 

# Title

### Pumpme - A website to instantly build apk from Android Projects on GitHub

# Synopsis

Android apps are very common these days. A lot of developers across the world are building innovative open sources Android applications. Some of the top Android apps you can find on GitHub are [Telegram](https://github.com/Telegram-FOSS-Team/Telegram-FOSS), [CoCoin](https://github.com/Nightonke/CoCoin), [Signal](https://github.com/signalapp). In order to build Android projects and get the .apk file that you can install on your phone, you need to clone the project, install Gradle on your computer, set up Android SDK, and then run Gradle on the project. For someone who’s not an android dev, this would be a cumbersome process. 

**Pumpme** aims to solve this problem build performing these tasks in the cloud and providing you with the final .apk file. All you have got to do is type in the GitHub URL of the Android Project and wait for the apk to be built. 

This is particularly useful for the judges in Hackathons. In Hackathons, judges have to evaluate a lot of projects in a very short time. In such a situation **Pumpme** will prove very useful to them as they can easily build the project and get the apk that they can then install on their phone to test and evaluate the app. 

# Architecture

![Azure Cloud.png](https://user-images.githubusercontent.com/54491362/151706650-6bca8912-81c4-4a5a-afa7-24df6449c8b6.png)

- The web app communicates with a FastAPI backend running on an Azure VM.
- The VM has Gradle and the Android SDK setup
- I used Certbot to generate LetsEncrypt certificates that are served by Uvicorn
- The backend runs a script that kicks off a set of tasks that build the apk.

# Steps to setup
- Create an Ubuntu VM
- Install HTTPS Certificates on it using Certbot
- Install Java JDK 8 and 11 using `sudo apt install openjdk-8-jdk openjdk-8-jre openjdk-11-jdk openjdk-11-jre`
- Install Android SDK using https://developer.android.com/studio/command-line
- Set ANDROID_HOME, ANDROID_SDK_ROOT, JAVA_HOME
- Copy backend files onto your home directory
- Run `uvicorn app.app:app --host 0.0.0.0 --port 443 --keyfile=./key.pem --certfile=./cert.pem`

# Issues

Some of the builds are failing because of:

- Path issues
- Gradle version issues

# Tested URLs

1. [https://github.com/imShakil/BloodBank](https://github.com/imShakil/BloodBank)
2. [https://github.com/shubhamvernekar/SlideToGlitch](https://github.com/shubhamvernekar/SlideToGlitch)
3. [https://github.com/swapnilsparsh/Covid-App](https://github.com/swapnilsparsh/Covid-App)
4. [https://github.com/ritik2410/My_Companion](https://github.com/ritik2410/My_Companion)
5. [https://github.com/fari-zma/MyCamera](https://github.com/fari-zma/MyCamera)
6. [https://github.com/fari-zma/MagnumFarizma](https://github.com/fari-zma/MagnumFarizma)
7. [https://github.com/vishwasganatra/voxRec](https://github.com/vishwasganatra/voxRec)
8. [https://github.com/ritik2410/My_Companion](https://github.com/ritik2410/My_Companion)
9. [https://github.com/fari-zma/KoreanNumber](https://github.com/fari-zma/KoreanNumber)
10. [https://github.com/blitz-cmd/Blood-Point-App](https://github.com/blitz-cmd/Blood-Point-App)
