angular.module('chat.controllers', [])

.controller('AppCtrl', function ($scope) {
    // global stuff can go here, but keep it light
})

.controller('SpeakersCtrl', function ($scope, Speakers) {
    $scope.speakers = Speakers.all();
})

.controller('SpeakerCtrl', function ($scope, $stateParams, Speakers) {
    $scope.speaker = Speakers.get($stateParams.speakerId);
})

.controller('SessionsCtrl', function ($scope, Sessions) {
    $scope.sessions = Sessions.all();
})

.controller('DriftersCtrl', function ($scope, Drifters) {
    $scope.drifters = Drifters.all();
})

.controller('DrifterCtrl', function ($scope, $stateParams, Drifters) {
    $scope.drifter = Drifters.get($stateParams.drifterId);
})

.controller('ChatCtrl', function ($scope, ChatManager, $cordovaCamera, FakeCamera, $ionicActionSheet, $ionicModal, $ionicModal, $ionicScrollDelegate) {
    $scope.handle = localStorage.handle || 'Anonymous';
    $scope.posts = ChatManager.posts();

    function addPost(message, img) {
        ChatManager.posts().$add({
            message: message ? message : null,
            img: img ? img : null,
            timestamp: new Date().getTime(),
            user: $scope.handle
        });
    }

    function scrollBottom() {
        $ionicScrollDelegate.$getByHandle('chat').scrollBottom();
    }
    $scope.posts.$watch(scrollBottom);

    $scope.add = function (message) {
        addPost(message);
        $scope.message = null; // pretty things up
    };

    $scope.takePicture = function () {
        $ionicActionSheet.show({
            buttons: [
                {
                    text: 'Picture'
                }, {
                    text: 'Selfie'
                }, {
                    text: 'Saved Photo'
                }
            ],
            titleText: 'Take a...',
            cancelText: 'Cancel',
            buttonClicked: function (index) {
                ionic.Platform.isWebView() ? takeARealPicture(index) : takeAFakePicture();
                return true;
            }
        });

        function takeARealPicture(cameraIndex) {
            var options = {
                quality: 50,
                sourceType: cameraIndex === 2 ? 2 : 1,
                cameraDirection: cameraIndex,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 600,
                saveToPhotoAlbum: false
            };
            $cordovaCamera.getPicture(options).then(function (imageData) {
                var photo = "data:image/jpeg;base64," + imageData;
                addPost(null, photo);
            }, function (err) {
                // error
                console.error(err);
                takeAFakePicture();
            });
        }

        function takeAFakePicture() {
            addPost(null, FakeCamera.getPicture());
        }
    };

    $scope.save = function (handle) {
        localStorage.handle = $scope.handle = handle;
        $scope.modal.hide();
    }

    $ionicModal.fromTemplateUrl('templates/account.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
    };
});