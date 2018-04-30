const assert = require('assert');
const lesson1 = require('../src/Lesson1Straight');
const lesson2 = require('../src/Lesson2Variable');


describe('RegressionTest', () => {
    it('test cat song', () => {
        const song = new lesson1.Lesson1Straight();
        song.singCatSong();
        console.log(song.song);
       // Approvals.verify(song.song);
    });
    it('test beer', () => {
        const song = new lesson2.Lesson2Variable();
        song.singBottlesOfBeer();
        console.log(song.song);
       // Approvals.verify(song.song);
    });
});