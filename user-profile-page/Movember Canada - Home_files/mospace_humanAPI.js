/**
 * Human API connect
 *
 * @type {{init}}
 */
mov.view.mospace_humanapi = (function(){

    var $connectButton;
    var $policyConnectButton;
    var $policyModalContent;
    var $addPostButton;
    var $activityList;
    var _humanapiStorage;

    /**
     * Initialization
     */
    function init(){
        $connectButton = $('.humanapi-connect-button');
        $policyConnectButton = $('.mospace_postMoveAction--humanapi-policy-connect-button');
        $policyModalContent = $('.mospace_postMoveAction--humanapi-policy-wrapper');
        $addPostButton = $('.humanapi-add-to-newsfeed');
        $activityList = $('#mospace--newsfeed-editor--humanapi-actiivies');

        _humanapiStorage = mov.storage['mov.view.mospace_humanapi'];

        mov.helper.require.requireAssets('https://connect.humanapi.co/connect.js', {
            onLoaded : function(){
                if (typeof _humanapiStorage.clientId != 'undefined') {
                    _initConnectButton();
                    _initPolicyConnectButton();
                }
            }
        });

        _initAddToNewsfeed();

    }

    /**
     * showConnectModal
     *
     * Shows a modal that lets the user connect to the Human API
     * @param options = {
     *                      onConnectionSuccess: handler function for a successful connection
     *                      onConnectionError: handler function for an UNsuccessful connection
     *                      onModalClose: handler function for closing the modal (without connecting to the Human API)
     *                  }
     */
    function showConnectModal(options) {

        // For the time being this is hardcoded
        var _languagesWhitelist = ['en', 'es', 'fr', 'de', 'da'];

        // set the default language. Default to 'en'
        var _language = (_languagesWhitelist.indexOf(mov.vars.language) > -1) ? mov.vars.language : 'en';

        var HumanConnectOptions = {
            clientUserId: encodeURIComponent(mov.service.member.getId()),
            clientId: _humanapiStorage.clientId,
            publicToken: _humanapiStorage.publicToken || "",  // Leave blank for new users
            modal: 1,
            language: _language,
            finish: function(err, sessionTokenObject) {
                // Called after user finishes connecting their health data
                if( (typeof options.onConnectionSuccess) === 'function' ) {
                    options.onConnectionSuccess(err, sessionTokenObject);
                }
            },
            close: function() {
                //Optional callback called when a user closes the popup without connecting any data sources
                if( (typeof options.onModalClose) === 'function' ) {
                    options.onModalClose();
                }
            },
            error: function(err) {
                // Optional callback called if an error occurs when loading the popup
                if( (typeof options.onConnectionSuccess) === 'function' ) {
                    options.onConnectionError(err);
                }

                if( err.code === "missingPublicToken" ) {
                    // If we have lost our publicToken on our end, and try and reconnect, humanapi thinks that our request is for a new connection, *but*
                    // our clientUserId already exists in humanapi, so it then assumes that we're trying to reconnect an existing user, and therefore expects a publicToken...
                    //
                    // Happens during testing when we are refreshing databases etc.  so should be a very rare edge case, but...
                    // @todo Can we do anything about this??
                }
            }
        };

        HumanConnect.open(HumanConnectOptions);
    }

    /**
     * Initialize the HumanAPI connect button (i.e. the button on the newsfeed that pops up the HAPI policy modal)
     */
    function _initConnectButton() {
        if ($policyModalContent.length) {
            $connectButton.click(function() {
                mov.helper.modal.loadContent($policyModalContent[0]);   // show the HAPI policy modal
            });
        }
    }

    /**
     * Initialize the HumanAPI "policy" connect button (i.e. the button on the modal that explains the HAPI policy)
     */
    function _initPolicyConnectButton() {

        var isHumanApiModalOpen = false; // flag to avoid multiple popups (for example by double-clicking the button)

        $policyConnectButton.click(function() {

            if( isHumanApiModalOpen ) return;
            isHumanApiModalOpen = true;

            mov.helper.modal.closeCurrent();    // close the HAPI policy modal before showing the HAPI connect modal

            showConnectModal({
                onConnectionSuccess: function(err, sessionTokenObject) {
                    mov.helper.overlay.showGlobalLoading();
                    mov.service.human_api.connect(sessionTokenObject, {
                        done: function(response) {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push ({
                                'event' : 'DL - Event',
                                'category' : 'Mo Space',
                                'action' : 'Connected Fitness Tracker'
                            });

                            mov.helper.overlay.hideGlobalLoading();
                            mov.section.mospace_index.showManageHumanApiModal({ // Show a new modal that explains to the user what is happening.
                                onHidden: function() {
                                    window.location.reload();
                                }
                            });
                        },
                        fail: function(response) {
                            mov.helper.overlay.hideGlobalLoading();
                        }
                    });
                },
                onModalClose: function() {
                    isHumanApiModalOpen = false;
                }
            });
        });
    }

    /**
     * Old real-time JS to load HumanAPI activities and inject into Mospace page.
     * As of MWD-645, now doing a redirect and loading the data fresh
     *
     * @private
     */
    function _importMemberActivities() {
        mov.helper.overlay.showGlobalLoading();

        var payload = {
            'memberId': mov.service.member.getId()
        };

        var html = "<table>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>move type id</th>" +
            "<th>start time</th>" +
            "<th>distance</th>" +
            "<th>duration</th>" +
            "</tr>";

        mov.helper.api.post('humanapi-activity', payload, {
            done: function(response) {
                mov.helper.overlay.showGlobalLoading();

                for (var i in response) {

                    html += "<tr>" +
                        "<td>"+ response[i].id +"</td>" +
                        "<td>"+ response[i].move_type_id +"</td>" +
                        "<td>"+ response[i].start_time +"</td>" +
                        "<td>"+ response[i].distance +"</td>" +
                        "<td>"+ response[i].duration +"</td>" +
                        "</tr>";
                }

                html += "<table>";

                $activityList.html(html);

                $activityList.show();
            }, fail: function(response) {
                //...
            }, always: function(response) {
                mov.helper.overlay.hideGlobalLoading();
            }
        });
    }

    /**
     * Add to newsfeed (needs a refactor now since model has changed)
     * @private
     */
    function _initAddToNewsfeed() {

        $addPostButton.click(function() {
            var button = $(this);
            var humanapiId = $(this).data('humanapi-id');
            var activity = _humanapiStorage[humanapiId];
            var data = {
                entityId: mov.service.member.getId(),
                entityType: 0,
                moveData: {
                    moveTypeName: activity['type'],
                    value: activity['duration'] / 60,
                    useMinutes: true
                }
            };

            mov.helper.overlay.showGlobalLoading();

            mov.helper.api.post('newsfeed', JSON.stringify(data), {
                done: function(response) {
                    button.text('Done!');
                }, fail: function(response) {
                    //...
                }, always: function(response) {
                    mov.helper.overlay.hideGlobalLoading();
                }
            });
        });
    }

    /**
     * Is called when HAPI disconnect is successful
     * @private
     */
    function _onHAPIDisconnectSuccessCallback() {
        location.reload(true)
    }

    /**
     * Disconnect HAPI
     */
    function disconnect() {
        mov.helper.overlay.showGlobalLoading();

        mov.service.human_api.disconnect({
            onSuccessCallback: _onHAPIDisconnectSuccessCallback
        });
    }

    function createHumanApiMoveNewsfeedPost(humanActivityId) {
        var $container = $("#mospace--newsfeed-editor--humanapi-activities");

        mov.helper.misc.scrollTo( $('.newsfeed-posts').eq(0).offset().top - 200 );
        mov.helper.overlay.showGlobalLoading();

        var onSuccess = function (response) {
            mov.helper.overlay.hideGlobalLoading();
            if( response.error_message ) {
                //
            } else if(response.result === false) {
                //
            } else {
                if( response.result || response.tokenError ) {
                    // Clear the fields after form submission
                    mov.dashboard.reloadMemberKeyStats();

                    $('#mospace_postMoveAction--type-of-move').val('');
                    $('#mospace_postMoveAction--amount-input').val('');

                    // Fix issue of not having only one suggestion what we have selected before
                    $('#mospace_postMoveAction--type-of-move').typeahead('val', '');

                    $('input#mospace_txtbxVideo').val('');

                    mospace_createPostFormResponseHandler( response );

                    // Update the HumanAPI import row
                    var importRow = $("#mospace--newsfeed-editor--humanapi-activity-item-"+humanActivityId);
                    importRow.addClass("mospace--newsfeed-editor--humanapi-activity-item-imported");
                    importRow.find(".mospace--newsfeed-editor--humanapi-activity_import-available").hide();
                    importRow.find(".mospace--newsfeed-editor--humanapi-activity_import-done").show();


                    // Would our member like to share this with facebook?
                    // if( response.facebook ){
                    //     mospace_postItemShareFacebook( response.fb_content, response.fb_image, response.fb_video, response.fb_url, response.fb_title )
                    // }
                }
            }

            // Replace CSRF token value if present
            if( response.token && tokenElement) {
                tokenElement.val( response.token );
            }
        };

        var onError = function (response) {
            // Replace token value if present
            if( response.token && tokenElement ) {
                tokenElement.val( response.token );
            }

            mov.helper.overlay.hideGlobalLoading();
        };

        mov.service.human_api.createHumanApiMoveNewsfeedPost({
            baseUrl: mov.vars.baseUrl,
            post_type: "humanApiActivity",
            humanActivityId: humanActivityId,
            onSuccessCallback: onSuccess,
            onErrorCallback: onError
        });
    }

    var modalContentElement = document.getElementById('mospace-humanapi-activity-hide-modal-content')
    var currentHideActivityId = null;

    function cancelHideHumanApiActivity() {
        currentHideActivityId = null;
        mov.helper.modal.closeCurrent();
        $(modalContentElement).hide();
    }

    function hideHumanApiActivity(humanActivityId) {
        mov.helper.modal.loadContent(modalContentElement, {'onHidden': cancelHideHumanApiActivity});
        currentHideActivityId = humanActivityId;
        $(modalContentElement).show();
    }

    function performHideHumanApiActivity() {
        if (currentHideActivityId == null) {
            return;
        }
        mov.helper.modal.closeCurrent();
        $(modalContentElement).hide();

        var generalErrorText = mov.vars.generalTranslations['general-error'];
        var activityId = currentHideActivityId;

        mov.helper.overlay.showGlobalLoading();

        var onSuccess = function (response) {
            mov.helper.overlay.hideGlobalLoading();
            if( response.error_message ) {
                console.log(response.error_message);
                mov.helper.alertBoxes.show(generalErrorText,{type:'error'});
            } else if(response.result === false) {
                console.log(response.error);
                mov.helper.alertBoxes.show(generalErrorText,{type:'error'});
            } else {
                if( response.result || response.tokenError ) {
                    // Remove the HumanAPI import row
                    var importRow = $("#mospace--newsfeed-editor--humanapi-activity-item-"+activityId);
                    importRow.remove();
                }
            }
        };

        var onError = function () {
            mov.helper.overlay.hideGlobalLoading();
            mov.helper.alertBoxes.show(generalErrorText,{type:'error'})
        };

        mov.service.human_api.hidePost({
            baseUrl: mov.vars.baseUrl,
            humanActivityId: activityId,
            onSuccessCallback: onSuccess,
            onErrorCallback: onError
        })
    }

    /**
     * Function to load more activities from the backend.
     *
     * Load them as html to be inserted directly at the end of the activity list table.
     */
    function loadMoreActivities() {
        mov.helper.overlay.showGlobalLoading();
        var $table = $("#mospace-import-activity-table");

        // Get the ids of the currently visible items so that we don't
        // show them twice
        var ids = [];
        $table.find('tr').each(function() {
            var id = $(this).attr('id');
            if (id) {
                ids.push(id.replace('mospace--newsfeed-editor--humanapi-activity-item-', ''));
            };
        });

        var onSuccess = function (response) {
            mov.helper.overlay.hideGlobalLoading();
            if (typeof response.html !== 'undefined') {
                $table.append(response.html);
            }
            if (typeof response.isMoreResults !== 'undefined') {
                if (!response.isMoreResults) {
                    // No more results to come, hide the 'load more' button
                    $('#load-more-row').remove();
                }
            } else {
                mov.helper.alertBoxes.show(generalErrorText,{type:'error'});
            }
        };

        var onError = function (response) {
            mov.helper.overlay.hideGlobalLoading();
            mov.helper.alertBoxes.show(generalErrorText,{type:'error'});
            console.log(['Response Error', response]);
        };

        var onAlways = function () {
            mov.helper.alertBoxes.show(generalErrorText,{type:'error'});
        };

        mov.service.human_api.loadMoreActivities({
            baseUrl: mov.vars.baseUrl,
            ids: ids,
            onSuccessCallback: onSuccess,
            onErrorCallback: onError,
            onAlwaysCallback: onAlways
        });
    };

    /**
     * Is user connected?
     */
    function isUserConnected(){
        // Note by Franko 2016: this function should work fine, but only on page reload (since storage is updated only by PHP). So it returns a wrong value if the user connects and then this function is evoked. Gotta change this in the future if needed!
        return (
            mov.storage['mov.view.mospace_humanapi'] &&
            mov.storage['mov.view.mospace_humanapi'].publicToken !== ''
        );
    }
    
    function enabled() {
        return (
            mov.storage['mov.view.mospace_humanapi'] &&
            mov.storage['mov.view.mospace_humanapi'].enabled === '1'
        );
    }

    /**
     * Return the public API
     */
    return {
        init: init,
        disconnect: disconnect,
        createHumanApiMoveNewsfeedPost: createHumanApiMoveNewsfeedPost,
        hideHumanApiActivity: hideHumanApiActivity,
        cancelHideHumanApiActivity: cancelHideHumanApiActivity,
        performHideHumanApiActivity: performHideHumanApiActivity,
        loadMoreActivities: loadMoreActivities,
        showConnectModal: showConnectModal,
        isUserConnected: isUserConnected,
        enabled: enabled
    };

}());

mov.view.mospace_humanapi.init();
