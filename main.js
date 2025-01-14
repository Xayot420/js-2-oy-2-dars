
function burger (){
    const zakaz = prompt("Nechta zakaz qilasiz");
    if(zakaz === null || zakaz.trim() === "" || isNaN(zakaz) || zakaz <= 0){
        alert("Iltimos,to'gri miqdorni kiriting.");
        return;
    }
    const result = zakaz * 15000;
    const isConfirmed = confirm(`${zakaz} ta burger ${result} so'm bo'ladi. Zakaz qilasimi?`)
    if(isConfirmed){
        alert("Zakaz qabul qilindi");
    }
    else{
        alert("Zakaz bekor qilindi");
    }
}
