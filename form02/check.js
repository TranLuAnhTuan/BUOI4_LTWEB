function check()
{
	var ht = f.HoVaTen.value;
	var dc = f.DiaChi.value;
	var em = f.email.value;
	var dt = f.DienThoai.value;
	
	var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
	
	if(ht == '')
	{
		alert('Họ tên không trống');
		return false;
	}
	
	if(dc == '')
	{
		alert('Địa chỉ không trống');
		return false;
	}
	
	if(em == '')
	{
		alert('Email không trống');
		return false;
	}
	
	if(dt == '')
	{
		alert('Điện thoại không trống');
		return false;
	}
	
	if(!emRegExp.test(em))
	{
		alert('Email không hợp lệ');
		return false;
	}
	if(!dtRegExp.test(dt))
	{
		alert('SDT không hợp lệ');
		return false;
	}
	
	return true;
}