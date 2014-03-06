var testData = [{
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}, {
	Summary : "1 natenczas wojski chwycił na taśmie przypięty",
	Severity : "2",
	Priority : "8",
	Status : "client feedback",
	Assigned : "Abenencjusz Kocimąka",
	Id : "85406"
}]
function mock(data) {
	s = "";
	for (var i = 0; i < data.length; i++) {
		s += Handlebars.templates["issue"](data[i]);
	}
	console.log(s);
	el = document.querySelector("#issues");
	el.innerHTML = s;
}

//mock(testData);

minspector = {
	start : function() {
		minspector.showData();
		minspector.addEvents();
	},
	addEvents : function() {
		var issues = document.querySelectorAll("#issues dt");

		for (var i = 0; i < issues.length; i++) {
			element = issues[i];
			Hammer(element).on("dragright", function(event) {
				var el = event.target;
				el.className = "ok";
			});
			Hammer(element).on("dragleft", function(event) {
				var el = event.target;
				el.className = "nok";
			});
			Hammer(element).on("hold", function(event) {
				var el = event.target;
				el.className = "";
			});

		}
	},
	showAlert : function(content) {
		alert(content);
	},
	loadData : function(csv) {
		localStorage.setItem(minspector.settings.storageKey, CSV2JSON(csv));
		minspector.showAlert("Loaded");
		minspector.start();
	},
	showData : function() {
		var data = localStorage.getItem(minspector.settings.storageKey);
		var list = document.querySelector("#issues");
		var objData;
		var htmlContent = "";
		if (data) {
			objData = JSON.parse(data);
			for (var i = 0, j = objData.length; i < j; i++) {
				htmlContent += Handlebars.templates["issue"](objData[i]);
			}
			list.innerHTML = htmlContent;
		} else {
			list.innerHTML = "<mark>No issues found. Please import them from CSV file.</mark>";
		}

	},
	goTo:function(where){
	window.location.hash = "issue"+where.value;
		
	},
	settings : {
		storageKey : "minspector"
	}
}

/*
 *
 * Get value from object. Helper created to obtain values with keys containing spaces and special characters
 * @param obj Object
 * @param key String
 *  */
Handlebars.registerHelper('getVal', function(key, obj) {
	return key == "Id" ? parseInt(obj[key]): obj[key];
});

minspector.start(); 