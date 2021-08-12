//Test modules
const chai = require('chai');
const assert = chai.assert;

//Local module to be tested
const removeDuplicates = require('../tools/removeDuplicates');

describe('test arrays merge', function () {
   it('should remove duplicates', function(){
       let objArr = [{
           title: 'title1',
           desc: 'title 1 desc'
       }, {
           title: 'title1',
           desc: 'title 1 desc'
       },{
           title: 'title2',
           desc: 'title 2 desc'
       },{
           title: 'title3',
           desc: 'title 3 desc'
       }]
       objArr = removeDuplicates(objArr);

       for(let i = 0; i < objArr.length; i++){
           assert.equal(objArr[i].title, 'title' + (i + 1));
       }
   });
});