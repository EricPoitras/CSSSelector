function initialize() {
	cont_task.textContent = data[step].task;
	cont_standard.textContent = data[step].standard;
	cont_css_grid.innerHTML = problem;
	cont_html_value.value = htmlcode;
	value_standard.textContent = data[step].weight;
	try {
		document.getElementById("cont_css_grid")
			.querySelectorAll(data[step].target)
			.forEach(el => el.classList.add("target"));
	} catch {}
	$("#myModal2").modal("show");
	session_id = Math.round(Math.random() * 1000000000);
	start();
}

function increment_problem() {
	try {
		document.getElementById("cont_css_grid")
			.querySelectorAll(data[step].target)
			.forEach(el => el.classList.remove("target"));
	} catch {}
	step = step + 1;
	solution = false;
	request = false;
	reference = false;
	tutorial = false;
	if (step >= data.length) {
		$("#myModal").modal("show");
		var JSONdata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.response));
		btn_export_report.setAttribute("href", "data:" + JSONdata);
		btn_export_report.setAttribute("download", "JSONdata.json");
	} else {
		btn_next.disabled = true;
		input_submit.disabled = false;
		cont_task.textContent = data[step].task;
		cont_standard.textContent = data[step].standard;
		value_standard.textContent = data[step].weight;
		cont_alert.classList.add("d-none");
	}
	try {
		document.getElementById("cont_css_grid")
			.querySelectorAll(data[step].target)
			.forEach(el => el.classList.add("target"));
	} catch {}
}

function refresh_problem_views() {
	cont_success.classList.add("d-none");
	cont_danger.classList.add("d-none");
	value_score.textContent = "0";
	try {
		document.getElementById("cont_css_grid")
			.querySelectorAll("*")
			.forEach(el => el.classList.remove("response"));
	} catch {}
}

function display_response() {
	try {
		document.getElementById("cont_css_grid")
			.querySelectorAll(input_css_selector.value)
			.forEach(el => el.classList.add("response"));
	} catch {}
}

function get_help() {
	cont_alert.innerHTML = data[step].help;
	cont_alert.classList.remove("d-none");
	reference = true;
}

function get_hint() {
	cont_alert.innerHTML = data[step].hint;
	cont_alert.classList.remove("d-none");
	request = true;
}

function get_solution() {
	cont_alert.innerHTML = data[step].solution;
	cont_alert.classList.remove("d-none");
	solution = true;
}

function get_next() {
	refresh_problem_views();

	increment_problem();
}

function score_response(css_selector) {
	var total = 0,
		correct = 0,
		incorrect = 0;
	var myArray = [];
	myArray = document.getElementById("cont_css_grid").querySelectorAll(".response");
	//console.log(myArray);
	for (i = 0; i < myArray.length; i++) {
		//console.log(myArray[i]);
		try {
			if (myArray[i].classList.contains("response") && myArray[i].classList.contains("target")) {
				correct = correct + 1;
			} else {
				incorrect = incorrect + 1;
			}
		} catch {
			incorrect = incorrect + 1;
		}
		total = total + 1;
	}

	console.log(correct, incorrect, total);
	return correct / (correct + incorrect);
}

function calculate_weight(css_selector) {
	var selector_list = [];
	selector_list = css_selector.split(" ");

	var sum = 0;
	for (i = 0; i < selector_list.length; i++) {
		var length = selector_list[i].length;
		var index_id = selector_list[i].indexOf("#");
		var index_class = selector_list[i].indexOf(".");

		if (index_id == -1 && index_class == -1) {
			sum = sum + 1;
		} else if (index_id == 0 && index_class == -1) {
			sum = sum + 100;
		} else if (index_id == -1 && index_class == 0) {
			sum = sum + 10;
		} else if (index_id == -1 && index_class > 0) {
			sum = sum + 11;
		} else if (index_id > 0 && index_class == -1) {
			sum = sum + 101;
		}
	}

	return sum;
}

function evaluate_response() {
	var weight = calculate_weight(input_css_selector.value);
	var score = score_response(input_css_selector.value);
	value_score.textContent = weight;
	if (score != 1) {
		value_score.textContent += " LOSE";
		sound3.play();
		cont_danger.classList.remove("d-none");
		cont_danger.textContent = "Yikes, your selector should cover all of the targeted elements, try again by choosing a different one.";
		store_response(input_css_selector.value, weight, score, cont_danger.textContent, "LOSE");
		attempt = attempt + 1;
	} else if (weight <= data[step].weight) {
		value_score.textContent += " LOSE";
		sound3.play();
		cont_danger.classList.remove("d-none");
		cont_danger.textContent = "Yikes, your selector should be more specific, try again to increase its weight.";
		store_response(input_css_selector.value, weight, score, cont_danger.textContent, "LOSE");
		attempt = attempt + 1;
	} else {
		value_score.textContent += " WIN";
		btn_next.disabled = false;
		input_submit.disabled = true;
		sound2.play();
		cont_success.classList.remove("d-none");
		cont_success.textContent = "Great work, your selector beats the CSS Ninja! Select Next to move on to the next problem.";
		store_response(input_css_selector.value, weight, score, cont_success.textContent, "WIN");
		attempt = 1;
	}
	value_progress.style.width = (data[step].id / data.length) * 100 + "%";
	value_progress.setAttribute("aria-valuenow", (data[step].id / data.length) * 100);

	start();
}

// Calculate elapsed time for each activity - start and end time
function start() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime; //in ms
	// strip the ms
	timeDiff /= 1000;

	// get seconds
	var seconds = Math.round(timeDiff);
	elapsed_time = seconds;
}

function store_response(css_selector, weight, score, feedback, evaluation) {
	var myObj = {
		version: "CSSGame_v1.0_agentimmediate_build03/09/20",
		session: session_id,
		username: username,
		gender: gender,
		age: age,
		degree: degree,
		university: university,
		gpa: gpa,
		activity: data[step].id,
		css_selector: css_selector,
		weight: weight,
		score: score,
		feedback: feedback,
		evaluation: evaluation,
		standard_target: data[step].target,
		standard_weight: data[step].weight,
		request: request,
		solution: solution,
		reference: reference,
		elapsed_time: elapsed_time,
		attempt: attempt,
		tutorial: tutorial
	};
	this.response.push(myObj);
	console.log(response);
	var urladress =
		"https://docs.google.com/forms/d/e/1FAIpQLSfqgYkY4NjcuvYhOk9QAl39Tb9O9aqxmHfts0lgYXFzOBE3fA/formResponse?" +
		"entry.407310636=" +
		String(myObj.version) +
		"&entry.2076242336=" +
		String(myObj.session) +
		"&entry.2122330289=" +
		String(myObj.username) +
		"&entry.1795360381=" +
		String(myObj.gender) +
		"&entry.1435325660=" +
		String(myObj.age) +
		"&entry.775324178=" +
		String(myObj.degree) +
		"&entry.345024330=" +
		String(myObj.university) +
		"&entry.17061280=" +
		String(myObj.gpa) +
		"&entry.978994241=" +
		String(myObj.activity) +
		"&entry.53861420=" +
		String(myObj.css_selector) +
		"&entry.541317142=" +
		String(myObj.weight) +
		"&entry.2133746092=" +
		String(myObj.score) +
		"&entry.1337543239=" +
		String(myObj.feedback) +
		"&entry.532322158=" +
		String(myObj.evaluation) +
		"&entry.98593517=" +
		String(myObj.standard_target) +
		"&entry.537164262=" +
		String(myObj.standard_weight) +
		"&entry.1336861295=" +
		String(myObj.request) +
		"&entry.1212362792=" +
		String(myObj.solution) +
		"&entry.1520127053=" +
		String(myObj.reference) +
		"&entry.337370714=" +
		String(myObj.elapsed_time) +
		"&entry.1326328034=" +
		String(myObj.attempt) +
		"&entry.1034311165=" +
		String(myObj.tutorial) +
		"&submit=Submit";
	console.log(urladress);
	fetch(urladress, {
		method: "post",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(data => console.log("data is", data))
		.catch(error => console.log("error is", error));
}
