angular.module('constants',[])
.constant('ENV',{
  name: 'prod',
  baseUrl: 'http://whatever.com',
  magicKey: '111-222-333',
  someOtherThing: {
    id: 3,
    arrayOfSomeStuff: [9,8,7,6,5]
  }
});
