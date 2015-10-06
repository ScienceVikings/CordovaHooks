
//Here we're going to copy our config based on our options. Dev by default

// GOTCHAS - This assumes there will be only one -- style option in the command line.
// More code would have to be added to handle more options.
// Perhaps parse them using this: https://github.com/bcoe/yargs

var fs = require('fs');

module.exports = function(context){

  //Uncomment this to see other options the context gives you.
  //console.log(context);

  //This gives us promises!
  var Q = context.requireCordovaModule('q');

  var defer = Q.defer();
  var envSelect = context.cmdLine.split('--');
  var envName = 'dev';

  if(envSelect.length > 1){
    envName = envSelect[1];
  }

  console.log('Loading environment named: ' + envName);

  var projectRoot = context.opts.projectRoot;

  var sourceFile = projectRoot + '/www/config/' + envName + '.js';
  var destFile = projectRoot + '/www/js/config.js';

  var readStream =  fs.createReadStream(sourceFile);
  var writeStream = fs.createWriteStream(destFile);

  readStream.on('error', function(err){
    defer.reject('Could not copy\n'+sourceFile +'\nto\n' + destFile);
  });

  writeStream.on('error', function(err){
    defer.reject('Could not copy\n'+sourceFile +'\nto\n' + destFile);
  });

  writeStream.on('close', function(){
    console.log('Environment ' + envName + ' loaded successfully!');
    defer.resolve();
  });

  readStream.pipe(writeStream);

  return defer.promise;
}
