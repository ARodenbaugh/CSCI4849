$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#ContactList").hide(); // hide the element with ID "otherElement"
  	$("#AddContact").hide(); // hide the element with ID "otherElement"
});

$("#DialerBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").show(); // show element
	$("#AddContact").hide();	// hide other element
  	$("#ContactList").hide();	// hide other element
});

$("#AddContactBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").hide(); // show element
	$("#AddContact").show();	// hide other element
  	$("#ContactList").hide();	// hide other element
});

$("#ContactListBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").hide(); // show element
	$("#AddContact").hide();	// hide other element
  	$("#ContactList").show();	// hide other element
});