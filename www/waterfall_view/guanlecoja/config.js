/* *///###########################################################################################
//
//   This module contains all configuration for the build process
//
/* *///###########################################################################################
const ANGULAR_TAG = "~1.5.3";
module.exports = {

    /* *///#######################################################################################
    //   Name of the plugin
    /* *///#######################################################################################
    name: 'waterfall_view',
    dir: { build: 'buildbot_waterfall_view/static'
},
    bower: {
        testdeps: {
            // vendors.js includes jquery, angularjs, etc in the right order
            "guanlecoja-ui": {
                version: '~2.0.0',
                files: ['vendors.js', 'scripts.js']
            },
            "angular-mocks": {
                version: ANGULAR_TAG,
                files: "angular-mocks.js"
            },
            "d3": {
                version: "3.4.11",
                files: "d3.js"
            },
            'buildbot-data': {
                version: '~2.2.6',
                files: 'dist/buildbot-data.js'
            }
        }
    },
    karma: {
        // we put tests first, so that we have angular, and fake app defined
        files: ["tests.js", "scripts.js", 'fixtures.js']
    }
};
