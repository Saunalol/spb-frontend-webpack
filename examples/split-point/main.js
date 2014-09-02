var syncModule = require('./sync-content');

function main() {
    var rootNode = document.getElementById('sync');
    rootNode.innerHTML = syncModule();
}

main.loadContent = function() {
    require.ensure(['./async-content'], function(require) {
        var asyncContent = require('./async-content');
        var rootNode = document.getElementById('async');

        rootNode.innerHTML = asyncContent();
    });
};

main();
global.main = main;
