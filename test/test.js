const assert = require('assert');
const Lesson1Straight = require('../src/Lesson1Straight');


describe('RegressionTest', () => {
    it('test cat song', () => {
        const song = new Lesson1Straight.Lesson1Straight();
        song.singCatSong();
        console.log(song.song);
       // Approvals.verify(song.song);
    });
});