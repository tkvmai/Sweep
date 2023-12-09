    var s = document.createElement('script');
    s.src='//gauvaiho.net/pfe/current/micro.tag.min.js?z=6745952'+'&sw=/sw-check-permissions-dfeab.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    };
    document.head.appendChild(s);

