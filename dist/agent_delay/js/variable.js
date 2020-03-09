var input_submit = document.getElementById("input_submit");
var input_css_selector = document.getElementById("input_css_selector");
var value_score = document.getElementById("value_score");
var value_progress = document.getElementById("value_progress");
var value_standard = document.getElementById("value_standard");

var cont_html_value = document.getElementById("cont_html_value");
var cont_task = document.getElementById("cont_task");
var cont_standard = document.getElementById("cont_standard");
var cont_alert = document.getElementById("cont_alert");
var cont_success = document.getElementById("cont_success");
var cont_danger = document.getElementById("cont_danger");

var btn_help = document.getElementById("btn_help");
var btn_hint = document.getElementById("btn_hint");
var btn_solution = document.getElementById("btn_solution");
var btn_next = document.getElementById("btn_next");

var step = 0;
var score = 0;

var username = "";
var gender = "";
var age = "";
var degree = "";
var university = "";
var gpa = "";

var input_username = document.getElementById("input_username");
var gender_Radios1 = document.getElementById("gender_Radios1");
var gender_Radios2 = document.getElementById("gender_Radios2");
var gender_Radios3 = document.getElementById("gender_Radios3");
var gender_Radios4 = document.getElementById("gender_Radios4");
var gender_Radios5 = document.getElementById("gender_Radios5");
var input_age = document.getElementById("input_age");
var input_degree = document.getElementById("input_degree");
var input_university = document.getElementById("input_university");
var input_gpa = document.getElementById("input_gpa");

var activity = 0;
var solution = false;
var request = false;
var reference = false;
var elapsed_time = 0;
var startTime, endTime;
var attempt = 1;
var session_id = "";

var btn_export_report = document.getElementById("btn_export_report");

var link_tutorial = document.getElementById("link_tutorial");
var tutorial = false;
