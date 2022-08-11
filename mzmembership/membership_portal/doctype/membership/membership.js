// Copyright (c) 2022, m20zero and contributors
// For license information, please see license.txt

frappe.ui.form.on('Membership', {
	before_save(frm) {
	    // var amount =(frm.doc.amount*20)/100
	    // var amount1 =(frm.doc.amount*50)/100
	        if(frm.doc.period == "Yearly"){
	            cur_frm.set_value("valid_to", frappe.datetime.add_months(frm.doc.valid_from,12));
		    }else if(frm.doc.period == "Monthly"){
	            cur_frm.set_value("valid_to", frappe.datetime.add_months(frm.doc.valid_from,1));
	           // cur_frm.set_value("amount", amount);
		    }else if(frm.doc.period == "Quarterly"){
	            cur_frm.set_value("valid_to", frappe.datetime.add_months(frm.doc.valid_from,6));
	           // cur_frm.set_value("amount", amount1);
		    }
	}
})