// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });

$('[name="estado"]').click(function(){

    // ocultando todas
    $('[name="cidades"] option').css('display', 'none');
    
    // exibindo as do estado selecionado
    $('[name="cidades"] .' + $(this).val()).css('display', '');
    
});

$('#e').datepicker({
    format: 'dd/mm/yyyy',
    language: 'pt-BR'
})
.on('changeDate', function(ev){
    alert(ev.date); 
});

