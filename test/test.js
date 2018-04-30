const assert = require('assert');
const lesson1 = require('../src/Lesson1Straight');
const lesson2 = require('../src/Lesson2Variable');
const lesson21 = require('../src/Lesson21');


describe('RegressionTest', () => {
    it('test cat song', () => {
        const song = new lesson1.Lesson1Straight();
        song.singCatSong();
        //console.log(song.song);
       // Approvals.verify(song.song);
    });
    it('test beer', () => {
        const song = new lesson2.Lesson2Variable();
        song.singBottlesOfBeer();
        //console.log(song.song);
       // Approvals.verify(song.song);
    });
    it('test lesson21', () => {
        const song = new lesson21.Lesson21();
        const names = ["Llewellyn", "Samatha", "Tomas", "Emilia"];
        song.singSong(1, names);
        song.singSong(2, names);
        song.singSong(3, names);
        console.log(song.song);
       // Approvals.verify(song.song);
    });
});