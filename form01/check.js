function check()
{
	var username = f.TenDangNhap.value;
	var password = f.MatKhau.value;
	
	if(username == '')
	{
		alert('Tên đăng nhập không để trống!!');
		return false;
	}
	
	if(password == '')
	{
		alert('Mật khẩu không để trống!!');
		return false;
	}
	
	return true;
}