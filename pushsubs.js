    var s = document.createElement('script');
    s.src='//oungimuk.net/pfe/current/micro.tag.min.js?z=5221466'+'&sw=/sw-check-permissions-f8c28.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    }

    document.head.appendChild(s);
