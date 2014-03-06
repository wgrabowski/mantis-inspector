(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['issue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<dt id=\"issue"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Id", depth0, options) : helperMissing.call(depth0, "getVal", "Id", depth0, options)))
    + "\" data-id=\""
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Id", depth0, options) : helperMissing.call(depth0, "getVal", "Id", depth0, options)))
    + "\" tabindex=\"0\">\n	<a href=\"#details"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Id", depth0, options) : helperMissing.call(depth0, "getVal", "Id", depth0, options)))
    + "\" tabindex=\"-1\">\n	<h1 class=\"summary\">"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Assigned To", depth0, options) : helperMissing.call(depth0, "getVal", "Assigned To", depth0, options)))
    + "</h1>\n	<h2 class=\"meta\">\n		<span class=\"priority\">"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Priority", depth0, options) : helperMissing.call(depth0, "getVal", "Priority", depth0, options)))
    + "/"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Severity", depth0, options) : helperMissing.call(depth0, "getVal", "Severity", depth0, options)))
    + "</span> <span class=\"status\">"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Status", depth0, options) : helperMissing.call(depth0, "getVal", "Status", depth0, options)))
    + "</span>\n	</h2>\n	</a>\n</dt>\n<dd id=\"details"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Id", depth0, options) : helperMissing.call(depth0, "getVal", "Id", depth0, options)))
    + "\">\n	<section data-field=\"Summary\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Summary", depth0, options) : helperMissing.call(depth0, "getVal", "Summary", depth0, options)))
    + "\n	</section>\n	<section data-field=\"Assigned to\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Assigned To", depth0, options) : helperMissing.call(depth0, "getVal", "Assigned To", depth0, options)))
    + "\n	</section>\n	<section data-field=\"Status\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Status", depth0, options) : helperMissing.call(depth0, "getVal", "Status", depth0, options)))
    + "\n	</section>\n	<section data-field=\"Severity\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Severity", depth0, options) : helperMissing.call(depth0, "getVal", "Severity", depth0, options)))
    + "\n	</section>\n	<section data-field=\"Priority\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Priority", depth0, options) : helperMissing.call(depth0, "getVal", "Priority", depth0, options)))
    + "\n	</section>\n	<section data-field=\"Importance\">\n		"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Importance", depth0, options) : helperMissing.call(depth0, "getVal", "Importance", depth0, options)))
    + "\n	</section>\n	<a href=\"#issue"
    + escapeExpression((helper = helpers.getVal || (depth0 && depth0.getVal),options={hash:{},data:data},helper ? helper.call(depth0, "Id", depth0, options) : helperMissing.call(depth0, "getVal", "Id", depth0, options)))
    + "\" class=\"hide-info\" tabindex=\"-1\">&otimes;</a>\n	\n</dd>";
  return buffer;
  });
})();