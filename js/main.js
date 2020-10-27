// cambiar color nav, scroll es la barra que se ve aun costado al bajar pagina (scrollTop), ver el metodo toggleClass

$(Window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop()>50);

});


// Termino Metodo para cambiar la barra de color

// VER API DE POKEMON



function mostraPokemon(){

 console.log("1")   
var valueNumber = $("#caja").val();

console.log(valueNumber)
$("#ApiResponsive").empty();
$("#chartContainer").empty();
if(valueNumber == null && valueNumber == undefined) {
        alert("Ingrese el numero del 1 al 807")
      }
          
      else{
console.log('https://pokeapi.co/api/v2/pokemon/'+valueNumber)

fetch('https://pokeapi.co/api/v2/pokemon/'+valueNumber)

.then(Response =>Response.json())
.then(data=>{
    var element = document.getElementById('ApiResponsive')
    element.innerHTML=`
    <img class="img-thumbnail"  src='${data.sprites.front_default}'>                    
    `;
    
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Estadísticas Base"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: data.stats['0'].stat.name, y: data.stats['0'].base_stat },
                { label: data.stats['1'].stat.name, y: data.stats['1'].base_stat },
                { label: data.stats['2'].stat.name, y: data.stats['2'].base_stat },
                { label: data.stats['3'].stat.name, y: data.stats['3'].base_stat },
                { label: data.stats['4'].stat.name, y: data.stats['4'].base_stat },
                { label: data.stats['5'].stat.name, y: data.stats['5'].base_stat }
            ]
        }]
    });
    chart.render(); 
});


      }

}

        
        

