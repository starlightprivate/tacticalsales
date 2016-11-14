/* jshint browser: true, node: false */
/* global loadStateFromZip:true */

(function() {
    "use strict";

    var tmpZipCode = "";
    function validateFields(frm, fields) {
        if (frm.length > 0) {
            $.each(fields, function(index, key) {
                if ($("input[name=" + key + "]").length > 0 && $("input[name=" + key + "]").val() !== "") {
                    switch (key) {
                        case "postalCode":
                            if ($("input[name=" + key + "]").val() !== tmpZipCode) {
                                tmpZipCode = $("input[name=" + key + "]").val();
                                loadStateFromZip();
                            }
                            break;
                        case "phoneNumber":
                            var phoneNumber = $("input[name=phoneNumber]").val();
                            if (phoneNumber.length === 10 && phoneNumber.indexOf("-") < 0) {
                                phoneNumber = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6);
                                $("input[name=phoneNumber]").val(phoneNumber);
                                frm.formValidation("revalidateField", "phoneNumber");
                            }
                            break;
                        default:
                            frm.formValidation("revalidateField", key);
                    }
                }
            });
        }
    }

    function autoFillCheck() {
        //validateFields($("#form-contact"), ["name", "email", "phoneNumber"]);
        validateFields($("#form-address"), ["address1", "postalCode", "city"]);
        validateFields($("#checkoutForm"), ["firstName", "emailAddress", "phoneNumber", "address1", "postalCode", "city", "cardNumber"]);

        setTimeout(function() { autoFillCheck(); }, 500);
    }
    setTimeout(function() { autoFillCheck(); }, 500);
}());