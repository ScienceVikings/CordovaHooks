angular.module('constants',[])
.constant('ENV',{
  name: 'stage',
  baseUrl: 'http://stage.whatever.com',
  magicKey: '987-654-321',
  someOtherThing: {
    id: 2,
    arrayOfSomeStuff: [5,4,3,2,1]
  }
});
