var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');
    
/**
* Represents a list of groups.
* @constructor
*/
var groupList = {
    /**
     * Returns an array of Groups
     * @param successCB success callback
     * @param errorCB error callback
     * @return array of Groups 
     */
    getGroups:function(successCB, errorCB) {
        argscheck.checkArgs('fF', 'contactsGroups.getGroups', arguments);
        exec(successCB, errorCB, "ContactGroups", "getGroups", []);
    }
};

module.exports = groupList;
