//flow.setVariable("target.url", "https://api.usergrid.com/morbishop/mobileapp/users/" + flow.getVariable("flow.cart.userid") + "/offers");
flow.setVariable("target.url", flow.getVariable("flow.product.basepath")  + flow.getVariable("flow.product.uri_ext"));
