var brandings = [{name:"Logo",price: 5000}, {name:"Stationery",price: 15000},{name:"Website",price: 30000},{name:"Banner",price: 10000}];

function Brand(name, price){
    this.name = name;
    this.price = price;
}

$(document).ready(function(){
    var selected =[];
    var total =0;

    $("button").click(function(){
        var nameInput = $("#name").val();
        var emailInput = $("#email").val();
        $.each($("input[name='brandings']:checked"),function(){
            selected.push($(this).val())
        });

        brandings.forEach(function(branding){    
            if(selected.includes(branding.name)){
                total += branding.price;
            }
        })
        
            if(selected.length > 0){
                if((emailInput !== null || emailInput !== "") && (nameInput !== "" || nameInput)){  
                    $("#orders-display").show();
                    selected.forEach(function(brand){
                        $("#total-orders").append('<tr><td id="brandingname">'+brand);   
                    })  
                    $("#brandingtotalprice").text("The Total Price is: " + total);
                    alert("Dear "+ nameInput + " Thank you for choosing Business Hub. We will get back to you with more details.")
                  }else{
                    alert("Please Enter your Name and Email")
                  }
               
            }else{
                alert("Please selected the kinds of brandings you need.")
            }    

        $('input[name="brandings"]').prop('checked', false);
        $("input#name").val("");
        $("input#email").val("");
    });
});