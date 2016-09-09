$(document).ready(function () {
	var states = [
		$('#a01'),
		$('#b01'),
		$('#b02'),
		$('#b03'),
		$('#b04'),
		$('#b05'),
		$('#b06'),
		$('#b07'),
		$('#b08'),
		$('#b09')
	];

	var speakable = [
		false,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true
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

	var slideChange = false;

	var start = function () {

	};

	var gotoPage = function (oldPage, newPage) {
		if (!(states[newPage] === undefined)) {
			states[oldPage].addClass("off");
			states[newPage].removeClass("off");
			slideChange = true;
		} else {
			progress.page = oldPage;
		};
	};

	var toContent = function (number) {

	};

	var toTimeline = function (number) {

	};

	var toQuiz = function (number) {

	};

	var saveProgress = function () {

	};

	var delProgress = function () {

	};

	var trySpeak = function () {
		if (responsiveVoice.voiceSupport() && slideChange && speakable[progress.page]) {
			var str = states[progress.page].text();
			responsiveVoice.speak(str, "UK English Male");
			slideChange = false;
		}
	}


	$("#f-next").click(function () {
		gotoPage(progress.page, ++progress.page);
		responsiveVoice.cancel();
		trySpeak();
	});

	$("#f-back").click(function () {
		gotoPage(progress.page, --progress.page);
		responsiveVoice.cancel();
		trySpeak();
	});
});