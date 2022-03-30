function isTextNull(){

    var name = f.HoVaTen.value;
    var day = f.Ngay.value;
    var month = f.Thang.value;
    var year = f.nam.value;

    var carrer = f.Gioi.value;




    if(name == '' || day == '' || month == '' || year == '' || carrer == '')
    {
        alert('Please fill in all the information');
        return false;
    }

    return true;
}
