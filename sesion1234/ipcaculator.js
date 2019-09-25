function aa(acb) {
    document.getElementById('nhapso').value += acb;
}
function caculate() {
    let x=document.getElementById('nhapso').value;
    document.getElementById('nhapso').value=eval(x);
}
function del() {
    let x = document.getElementById('nhapso').value;
    document.getElementById('nhapso').value = x.substring(0,x.length-1);

}
function xoa() {
    document.getElementById('nhapso').value="";
}