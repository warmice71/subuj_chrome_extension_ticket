var app = angular.module('myApp', []);
// var endpoint = 'http://localhost:3000/api/extension2';
var endpoint = 'https://eagleanalytix.com/api/extension2';
var key = '';
app.controller('myCtrl', async function ($scope) {
    $scope.page = "dropchecker";
    $scope.permission = false;
    $scope.item = {
        eventID: '',
        sections: '',
        prices: '',
        price_less: 0,
        qty: 2,
        note: ''
    };

    $scope.input_error = false;
    $scope.openModal = function () {
        $scope.item = {
            eventID: '',
            sections: '',
            prices: '',
            price_less: 0,
            qty: 2,
            note: ''
        };
        $scope.s_eventID = '';
        $scope.input_error = false;
        $("#addEventModal").modal();
    }
    $scope.s_eventID = '';
    $scope.addNewEvent = function () {
        if ($scope.item.eventID.length != 16 || $scope.dropcheckerEmail == '') {
            $scope.input_error = true;
            return;
        }
        $("#addEventModal").modal('hide');
        $.ajax({
            url: endpoint + '/addDropEvent',
            method: 'POST',
            data: {
                key: key,
                eventID: $scope.item.eventID,
                options: $scope.item,
                dropcheckerEmail: $scope.dropcheckerEmail
            },
            success: function (res) {
                $scope.load();
            }
        })

    }

    $scope.deleteEvent = function (id) {

        $.ajax({
            url: endpoint + '/deleteDropEvent',
            method: 'POST',
            data: {
                key: key,
                eventID: id,
            },
            success: function (res) { $scope.load(); }
        })
    }

    $scope.edit = function (id, o) {
        $scope.s_eventID = id;
        $scope.item = {
            eventID: id,
            sections: o.sections,
            prices: o.prices,
            price_less: o.price_less,
            qty: o.qty,
            note: o.note
        };
        $("#addEventModal").modal();
    }


    $scope.pageChange = function (page) {
        $scope.page = page;
    }
    const r = await getPermission();
    $scope.permission = r.permission;
    $scope.dropcheckerEmail = r.dropcheckerEmail;

    $scope.events = [];
    $scope.events = await loadEvents();
    setTimeout(() => {
        $('#events-table').DataTable();
    }, 500);

    $scope.load = async function () {
        $scope.events = await loadEvents();
        setTimeout(() => {
            $('#events-table').DataTable();
        }, 500);
        $scope.$apply();
    }

    $scope.$apply();

})

//check permission
function getPermission() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                key = result.eagle_extensionkey;
                $.ajax({
                    url: endpoint + '/getPermission',
                    method: 'POST',
                    data: { key: key },
                    success: function (res) {
                        if (res.status) {
                            resolve(res);
                        } else {
                            resolve(null);
                        }
                    }
                })
            }
        })

    })
}

//load events
function loadEvents() {
    return new Promise((resolve) => [
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                key = result.eagle_extensionkey;
                $.ajax({
                    url: endpoint + '/getDropEvents',
                    method: 'POST',
                    data: { key: key },
                    success: function (res) {
                        if (res.status) {
                            resolve(res.events);
                        } else {
                            resolve([]);
                        }
                    }
                })
            }
        })
    ])

}