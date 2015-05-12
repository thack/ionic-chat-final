# Ionic Chat

### Setup

* Install Ionic, Cordova, & Bower
    * ``npm install -g ionic``
    * ``npm install -g cordova``
    * ``npm install -g bower``

### Step By Step

* https://github.com/thack/ionic-chat-final/releases

### Step 1

* Create new project
    * ``ionic start chat sidemenu``
    * ``cd chat``
    * ``ionic serve -c``

### Step 2

* Add project files
* Replace index.html
* Replace js/app.js, js/controllers.js, and js/services.js
* Remove all templates and replace

### Step 3

* Add libraries
    * ``ionic add firebase``
    * ``ionic add angularfire``
    * ``ionic add moment``
    * ``ionic add ngCordova``
* Add libraries to index.html

### Step 4

* Add modal

### Step 5

* Add scroll delegate

### Step 6

* Add action sheet

### Step 7

* Add picture functions

### Last

* Native app tools
    * Install Xcode
    * Install Android Studio

* Add platform and plugin
    * ``ionic platform add ios``
    * ``ionic plugin add org.apache.cordova.camera``

* Run on device with live reload
    * ``ionic emulate ios --l --c``

* Useful commands
    * ``ionic emulate ios``
    * ``ionic build ios``
    * ``ionic run ios``
    * ``ionic platform add android``
    * ``ionic build android``

### Error?

* Did you get this error?

    ``[$injector:modulerr] Failed to instantiate module chat due to:``
    ``[$injector:modulerr] Failed to instantiate module chat.services due to:``
    ``[$injector:modulerr] Failed to instantiate module firebase due to:``
    ``[$injector:nomod] Module 'firebase' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.``
    
* Make sure you added the libraries:
    * ``ionic add firebase``
    * ``ionic add angularfire``
    * ``ionic add moment``
    * ``ionic add ngCordova``

### Debugging
* Safari - Dev Tools
* Chrome - Dev Tools

### Homework

* Add Gulp tasks
    * ``npm install -g gulp``
    * ``npm install -g gulp-utils``
    * ``npm install``

* Add Session details
