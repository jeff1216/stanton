$(document).ready(function () {
	var states = [
		$('#a00'),
		$('#a01'),
		$('#b00'),
		$('#b01'),
		$('#b02'),
		$('#b03'),
		$('#b04'),
		$('#b05'),
		$('#b06'),
		$('#b07'),
		$('#b08'),
		$('#b09'),
		$('#c00'),
		$('#c01'),
		$('#c02'),
		$('#c03'),
		$('#c04'),
		$('#c05'),
		$('#c06'),
		$('#d00'),
		$('#d01'),
		$('#d02'),
		$('#d03'),
		$('#d04'),
		$('#d05'),
		$('#e00'),
		$('#e01'),
		$('#f00'),
		$('#z00')
	];

	var speakable = [
		false,
		false,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		false
	]

	var dispFooter = [
		[false, false, false, true, false, false, false],
		[false, false, false, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, true, true, false, false, true, false],
		[false, false, false, false, false, false, true]
	]
	var progress = {
		page: 0,
		content: {
			prologue: false,
			ch1: false,
			ch2: false,
			ch3: false,
			epilogue: false
		},
		quiz: {
			prologue: false,
			ch1: false,
			ch2: false,
			ch3: false
		},
		timeline: {
			prologue: false,
			ch1: false,
			ch2: false,
			ch3: false,
			epilogue: false
		},
		activitiesComplete: 0
	}

	var timeToSpeak = false;

	var gotoPage = function (oldPage, newPage) {
		if (!(states[newPage] === undefined)) {
			states[oldPage].addClass("off");
			states[newPage].removeClass("off");
			timeToSpeak = true;
		} else {
			progress.page = oldPage;
		};
	};

	var updateFooter = function (page) {
		if (dispFooter[page][0]) {
			$("#f-restart").removeClass("off");
		} else {
			$("#f-restart").addClass("off");
		}
		if (dispFooter[page][1]) {
			$("#f-back").removeClass("off");
		} else {
			$("#f-back").addClass("off");
		}
		if (dispFooter[page][2]) {
			$("#f-replay").removeClass("off");
		} else {
			$("#f-replay").addClass("off");
		}
		if (dispFooter[page][3]) {
			$("#f-start").removeClass("off");
		} else {
			$("#f-start").addClass("off");
		}
		if (dispFooter[page][4]) {
			$("#f-continue").removeClass("off");
		} else {
			$("#f-continue").addClass("off");
		}
		if (dispFooter[page][5]) {
			$("#f-next").removeClass("off");
		} else {
			$("#f-next").addClass("off");
		}
		if (dispFooter[page][6]) {
			$("#f-home").removeClass("off");
		} else {
			$("#f-home").addClass("off");
		}
	}

	var trySpeak = function () {
		if (responsiveVoice.voiceSupport() && timeToSpeak && speakable[progress.page]) {
			var str = states[progress.page].text();
			responsiveVoice.speak(str, "UK English Male");
			timeToSpeak = false;
		}
	}

	$("#f-start").click(function () {
		progress.page = 1;
		gotoPage(0, progress.page);
		updateFooter(progress.page);
		trySpeak();
	});

	$("#f-next").click(function () {
		gotoPage(progress.page, ++progress.page);
		responsiveVoice.cancel();
		updateFooter(progress.page);
		trySpeak();
	});

	$("#f-back").click(function () {
		gotoPage(progress.page, --progress.page);
		responsiveVoice.cancel();
		updateFooter(progress.page);
		trySpeak();
	});

	$("#f-replay").click(function () {
		timeToSpeak = true;
		trySpeak();
	});

	$("#f-home").click(function () {
		gotoPage(progress.page, 0);
		progress.page = 0;
		updateFooter(progress.page);
	});

	$("#h-references").click(function () {
		gotoPage(progress.page, states.length - 1);
		responsiveVoice.cancel()
		progress.page = states.length - 1;
		updateFooter(progress.page);
	})
});