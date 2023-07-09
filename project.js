const showCoupon=()=>{
    document.getElementById('coupons').style.display="block"
}
function closeCoupon(){
    document.getElementById('coupons').style.display="none"
}
const toggleMode= () =>{
    let mybody=document.body;
    mybody.classList.toggle('mydark')
}
