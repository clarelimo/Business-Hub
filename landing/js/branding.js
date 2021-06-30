var brandings = [{name:"Logo",price: 5000}, {name:"Stationery",price: 15000},{name:"Website",price: 30000},{name:"Banner",price: 10000}];

function Brand(name, price){
    this.name = name;
    this.price = price;
}

$(document).ready(function(){
    $("button").click(function(){
        var total =0;
        var selected =[];
        $.each($("input[name='brandings']:checked"),function(){
            selected.push($(this).val())
        });

        brandings.forEach(function(branding){    
            if(selected.includes(branding.name)){
                total += branding.price;
            }
        })
        
        $("#orders-display").show();

        if(selected.length > 0){
            selected.forEach(function(brand){
                $("#total-orders").append('<tr><td id="brandingname">'+brand);
            })  
            $("#brandingtotalprice").text("The Total Price is: " + total);
            alert("You have selected " +selected.join(",")+" The total Price is: " + total);
        }else{
            alert("Please selected the kinds of brandings you need.")
        }

        $('input[name="brandings"]').prop('checked', false);
    });
});