var sound = new Howl({
	src: ["../assets/Puzzle-Dreams.mp3"],
	autoplay: true,
	loop: true,
	volume: 0.5
});

sound.play();

var sound2 = new Howl({
	src: ["../assets/Success-sound-effect.mp3"]
});

var sound3 = new Howl({
	src: ["../assets/Looser-sound-effect.mp3"]
});
