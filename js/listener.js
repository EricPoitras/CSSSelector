document.addEventListener("DOMContentLoaded", function(event) {
	initialize();
});

btn_help.addEventListener("click", function() {
	get_help();
});

btn_hint.addEventListener("click", function() {
	get_hint();
});

btn_solution.addEventListener("click", function() {
	get_solution();
});

btn_next.addEventListener("click", function() {
	get_next();
});

link_tutorial.addEventListener("click", function() {
	tutorial = true;
});

input_submit.addEventListener("click", function() {
	end();

	refresh_problem_views();

	display_response();

	evaluate_response();
});

input_css_selector.addEventListener("keypress", function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		input_submit.click();
	}
});

input_username.addEventListener("keyup", function() {
	username = input_username.value;
});

gender_Radios1.addEventListener("change", function() {
	gender = gender_Radios1.value;
});

gender_Radios2.addEventListener("change", function() {
	gender = gender_Radios2.value;
});

gender_Radios3.addEventListener("change", function() {
	gender = gender_Radios3.value;
});

gender_Radios4.addEventListener("change", function() {
	gender = gender_Radios4.value;
});

gender_Radios5.addEventListener("change", function() {
	gender = gender_Radios5.value;
});

input_age.addEventListener("keyup", function() {
	age = input_age.value;
});

input_degree.addEventListener("keyup", function() {
	degree = input_degree.value;
});

input_university.addEventListener("keyup", function() {
	university = input_university.value;
});

input_gpa.addEventListener("keyup", function() {
	gpa = input_gpa.value;
});
