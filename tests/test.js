var should = require('should');
var _ = require('lodash');
require('../src/constrain.js')

describe('_.constrain', function () {

    it('Returns the min allowed when value is lower than min: no max specified', function (done) {
        var value = 10;
        var min = 12;
        _.constrain(value, min).should.equal(12);
        done();
    });

    it('Returns the value when it is the same as min: no max specified', function (done) {
        var value = 10;
        var min = 10;
        _.constrain(value, min).should.equal(10);
        done();
    });

    it('Returns the value when it is the same as max', function (done) {
        var value = 10;
        var min = 0;
        var max = 10;
        _.constrain(value, min).should.equal(10);
        done();
    });

    it('Returns the value when it is within min and max: no max specified', function (done) {
        var value = 15;
        var min = 10;
        _.constrain(value, min).should.equal(15);
        done();
    });

    it('Returns 0 when the value is negative and no min or max are specified', function (done) {
        var value = -1;
        _.constrain(value).should.equal(0);
        done();
    });

    it('Returns the min when the value is lower than it', function (done) {
        var value = 15;
        var min = 20;
        _.constrain(value, min).should.equal(20);
        done();
    });

    it('Returns the max when the value is greater than it', function (done) {
        var value = 120;
        var min = 20;
        var max = 100;
        _.constrain(value, min, max).should.equal(100);
        done();
    });

    it('Returns the min allowed when value is lower than min: no max specified (decimal number)', function (done) {
        var value = 10.78;
        var min = 12.6;
        _.constrain(value, min).should.equal(12.6);
        done();
    });

    it('Returns the value when it is the same as min: no max specified (decimal number)', function (done) {
        var value = 10.19;
        var min = 10.19;
        _.constrain(value, min).should.equal(10.19);
        done();
    });

    it('Returns the value when it is the same as max (decimal number)', function (done) {
        var value = 10.19;
        var min = 0;
        var max = 10.19;
        _.constrain(value, min).should.equal(10.19);
        done();
    });

    it('Returns the value when it is within min and max: no max specified (decimal number)', function (done) {
        var value = 15.678;
        var min = 10.01;
        _.constrain(value, min).should.equal(15.678);
        done();
    });

    it('Returns 0 when the value is negative and no min or max are specified (decimal number)', function (done) {
        var value = -0.1;
        _.constrain(value).should.equal(0);
        done();
    });

    it('Returns the min when the value is lower than it (decimal number)', function (done) {
        var value = 15.05;
        var min = 15.101;
        _.constrain(value, min).should.equal(15.101);
        done();
    });

    it('Returns the max when the value is greater than it (decimal number)', function (done) {
        var value = 120.11;
        var min = 20;
        var max = 100.1;
        _.constrain(value, min, max).should.equal(100.1);
        done();
    });


});
