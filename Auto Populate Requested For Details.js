function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	var Sysid = g_form.getUniqueValue();
	if(Sysid == 'ab27febbdbe5734084055ad6dc961979')
		{
		var hrUser = g_form.getReference('requested_for',setUserFields);
	}else{
		var user = g_form.getReference('requested_for',setFields);
	}
	
}
function setFields(user){
	var email = user.email;
	g_form.setValue('email',email);
	
	
	var phone = user.mobile_phone;
	g_form.setValue('phone', phone);
	
	var u_alternate_id = user.u_alternate_id;
    g_form.setValue('alternate_id', "A" + u_alternate_id);
	
	var costCent = user.u_cost_center;
	if(costCent != '')
		g_form.setValue('cost_center', costCent);
	else
		g_form.setValue('cost_center',  user.cost_center.getDisplayValue());
}

function setUserFields(hrUser){
	g_form.setValue('email',hrUser.email);
	g_form.setValue('phone',hrUser.mobile_phone);
    g_form.setValue('alternate_id', "A" + u_alternate_id);
	
	var costCent = hrUser.u_cost_center;
	if(costCent != '')
		g_form.setValue('cost_center', costCent);
	else
		g_form.setValue('cost_center',  hrUser.cost_center);
}
