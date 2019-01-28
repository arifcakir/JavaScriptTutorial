

$(function() {










        var applicationServerPublicKey =
            'BMrQjF9gmTQPV9OeNANErMfbQ_zaxYoxB3ZJZFpapmww2C61I_i--spYYj7UL5guTs7uErCMlVIHSqSZmiT7qOg';

        var pushButton = $("#pushButton");


        var swRegistration="";

        var isSubscribed = false;



    function urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }




    function updateBtn() {
        if (Notification.permission === 'denied') {
            pushButton.textContent = 'Push Messaging Blocked.';
            pushButton.disabled = true;
            updateSubscriptionOnServer(null);
            return;
        }

        if (isSubscribed) {
            pushButton.textContent = 'Disable Push Messaging';
        } else {
            pushButton.textContent = 'Enable Push Messaging';
        }

        pushButton.disabled = false;
    }








    //make sure that Service Workers are supported.
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/Scripts/PushNotificationSW.js')
            .then(function (registration) {
                console.log(registration);

                swRegistration = registration;
                initializeUI();


            })
            .catch(function (e) {
                console.error(e);
            })
    } else {
        console.log('Service Worker is not supported in this browser.');
    }


    if ('PushManager' in window) {
        console.log('Service Worker and Push is supported');
    }

        function initializeUI() {
            // Set the initial subscription value
            swRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    isSubscribed = !(subscription === null);

                    if (isSubscribed) {
                        // TODO: Unsubscribe user
                    } else {
                        subscribeUser();
                    }


                    updateBtn();
                });


        }

        // Set the initial subscription value
        swRegistration.pushManager.getSubscription()
            .then(function (subscription) {
                isSubscribed = !(subscription === null);

                updateSubscriptionOnServer(subscription);

                if (isSubscribed) {
                    console.log('User IS subscribed.');
                } else {
                    console.log('User is NOT subscribed.');
                }

                updateBtn();
            });

        function subscribeUser() {
            var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            })
                .then(function (subscription) {
                    console.log('User is subscribed.');

                    updateSubscriptionOnServer(subscription);

                    isSubscribed = true;

                    updateBtn();
                })
                .catch(function (err) {
                    console.log('Failed to subscribe the user: ', err);
                    updateBtn();
                });
        }

        function updateSubscriptionOnServer(subscription) {
            // TODO: Send subscription to application server

            var subscriptionJson = document.querySelector('.js-subscription-json');
            var subscriptionDetails = document.querySelector('.js-subscription-details');

            if (subscription) {
                subscriptionJson.textContent = JSON.stringify(subscription);
                subscriptionDetails.classList.remove('is-invisible');
            } else {
                subscriptionDetails.classList.add('is-invisible');
            }
        }














});
