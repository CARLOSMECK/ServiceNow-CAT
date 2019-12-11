function onLoad() {
    //Type appropriate comment here, and begin script below
    var user = g_form.getReference('requested_for', setFields);
}

function setFields(user) {
    var email = user.email;
    g_form.setValue('email', email);
	
    var phone = user.mobile_phone;
    g_form.setValue('phone', phone);
	
	var u_alternate_id = user.u_alternate_id;
    g_form.setValue('alternate_id', "A" + u_alternate_id);
	
    var costCent = user.u_cost_center;
    if (costCent != '')
        g_form.setValue('cost_center', costCent);
    else
        g_form.setValue('cost_center', user.cost_center);
}
