/* jshint browser: true */
/* jshint node: false */
/* jshint maxlen: 200 */
function numfield_keydown(e) {
    "use strict";

	e = (e) ? e : window.event;
	var charCode = (e.which) ? e.which : e.keyCode;
	var availableChar = [8, 18, 33, 34, 35, 36, 37, 38, 39, 40, 46, 190];

	if ((e.ctrlKey && (e.keyCode === 86 || e.keyCode === 67)) || (e.shiftKey && availableChar.indexOf(charCode) !== -1)) {
		return true;
	}
	if (availableChar.indexOf(charCode) !== -1) {
		return true;
	}
	if (charCode >= 96 && charCode <= 105 ) {
		return true;
	}
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}

	return true;
}

function name_keydown(e) {
    "use strict";

	e = (e) ? e : window.event;
	var charCode = (e.which) ? e.which : e.keyCode;
	var availableChar = [8, 9, 18, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 190];

	if ((e.ctrlKey && (e.keyCode === 86 || e.keyCode === 67)) || (e.shiftKey && availableChar.indexOf(charCode) !== -1)) {
		return true;
	}
	if (availableChar.indexOf(charCode) !== -1) {
		return true;
	}
	// Uppercase
	if (charCode >= 65 && charCode <= 90) {
		return true;
	}
	// Lowercase
	if (charCode >= 97 && charCode <= 122) {
		return true;
	}
	// Number
	if (charCode >= 48 && charCode <= 57) {
		return true;
	}

	return false;
}

function validate() {
    "use strict";
    
    if ($("input.numfield").length > 0)
    {
        $("input.numfield").on("keydown", numfield_keydown);
    }

    if ($("input#name").length > 0) {
        $("input#name").on("keydown", name_keydown);
    }

    if ($("input[type=tel]").length > 0)
    {
        $("input[type=tel]").on("keydown", function (e) {
            e = (e) ? e : window.event;
            var charCode = (e.which) ? e.which : e.keyCode;
            
            if (charCode === 189)  {
                return false;
            }
            return true;
        });
    }

    /* global isMobileSafari:true */
    // Look for ios devices and safari
    if (isMobileSafari()) {
        // Search for credit card input and change it to text field
        if ($("input#creditcard").length > 0)
        {
            $("input#creditcard").attr("type", "text");
        }
    }

    /* global customWrapperForIsMobileDevice:true */
    if (!customWrapperForIsMobileDevice()) {
        $("input[type=number]").attr("type", "text");
    }
        
    // Image lazyload
    /* jshint ignore:start */
    $("img.lazy").lazyload({
        skip_invisible : true
    });
    /* jshint ignore:end */

    // X symbol for input fields
    if ($(".clearable").length > 0) {
        $(".clearable").addClear({
            closeSymbol: "&#10006;",
            color: "#CCC",
            top: "35px",
            right: "38px",
            returnFocus: true,
            showOnLoad: true,
            onClear: function($input) {
                var formValidation = $input.closest("form").data("formValidation");

                if (formValidation) {
                    formValidation.revalidateField($input.attr("name"));
                }
            },
            paddingRight: "55px",
            lineHeight: "1",
            display: "block"
        });
    }

    // Mailcheck Plugin Code here
    if ($("#email").length > 0) {
        var domains = ["hotmail.com", "gmail.com", "aol.com"];

        $("#email").on("blur", function() {
            $(this).mailcheck({
                domains: domains,
                suggested: function(element, suggestion) {
                    $("#email + small").show();
                    $("#email + small").html("Did you mean <a href='javascript:void(0)''>" + suggestion.full + "</a>");
                },
                empty: function(element) {
                    //jshint unused:false
                }
            });
        });

        // If user click on the suggested email, it will replace that email with suggested one.
        $("body").on("click", "#email + small a", function() {
            $("#email").val($(this).html());
            $("#email + small").hide();
            $("#email + small").html("Great! We will send you a confirmation e-mail with tracking # after purchasing.");

            if ($("form").length > 0) {
                $("form").formValidation("revalidateField", "email");
            }
        });
    }
}

validate();