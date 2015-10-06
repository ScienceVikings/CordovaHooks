angular.module('constants',[])
.constant('ENV',{
  name: 'dev',
  baseUrl: 'http://dev.whatever.com',
  magicKey: '123-456-789',
  someOtherThing: {
    id: 1,
    arrayOfSomeStuff: [1,2,3,4,5]
  }
});
