//jshint ignore: start
module.exports = function(grunt){
   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '*'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.server.options.port %>'
      }
    },    
    webpack: {
      default: {
        entry: './scripts/slideshow.jsx',
        output: {
            filename: './build/main.js',
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'jsx-loader'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        externals: {
          "showdown": "Showdown",
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', function (target) {
    grunt.task.run([
      'webpack',
      'connect',
    ]);
  });

}