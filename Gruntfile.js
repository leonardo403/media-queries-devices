module.exports = function (grunt) {
  grunt.initConfig({
    lintspaces: {
      all : {
        src: [
            'snippets/*'
        ],
        options: {
          editorConfig: '.editorConfig'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('default', ['lintspaces']);
};
