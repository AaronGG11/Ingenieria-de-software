$(document).ready(function(){
  $("#formLogin").validetta({
    bubblePosition: 'bottom',
      bubbleGapTop: 10,
      bubbleGapLeft: -5,
      onValid:function(e){
        e.preventDefault(); //Cancelar el submit
        $.ajax({
          url:"./php/index_AX.php",
          method:"POST",
          data:$("#formLogin").serialize(),
          cache:false,
          success:function(respAX){
            let AX = JSON.parse(respAX);
            $.alert({
              title:"Sistema de Arbolado",
              content:"<h5 class='blue-text'>"+AX.msj+"</h5>",
              theme:"supervan",
              onDestroy:function(){
                if(AX.cod == 1 && AX.tipoU == "AL"){
                  window.location.href = "./php/alumno.php";
                }
                if(AX.cod == 1 && AX.tipoU == "AD"){
                  window.location.href = "./admin/index.html";
                }
                if(AX.cod !=1 && AX.tipoU == "AD"){
                  window.location.href = "./admin/index.html";
                }

              }
            });
          }
        });
      }
  });
});