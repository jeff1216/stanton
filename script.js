$(document).ready(function () {
	var states = [
		$('#a01'),
		$('#b01')
	];

	var progress = {
		position: {
			context: "title",
			page: 0
		},
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

	var start = function () {

	};

	var gotoPage = function (oldPage, newPage) {
		if (!(states[newPage] === undefined)) {
			states[oldPage].addClass("off");
			states[newPage].removeClass("off");
		} else {
			progress.position.page = oldPage
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


	$("#f-next").click(function () {
		gotoPage(progress.position.page, ++progress.position.page)
	});

	$("#f-back").click(function () {
		gotoPage(progress.position.page, --progress.position.page)
	});
});