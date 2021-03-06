        var READY_STATE_UNINITIALIZED=0; 
        var READY_STATE_LOADING=1; 
        var READY_STATE_LOADED=2;
        var READY_STATE_INTERACTIVE=3; 
        var READY_STATE_COMPLETE=4;
         
        var peticion_http; 
         
        function cargar(url, metodo, funcion) {
          peticion_http = inicializa_xhr();
         document.getElementById('divContenido').innerHTML="Cargando..";
          if(peticion_http) {
            peticion_http.onreadystatechange = funcion;
            peticion_http.open(metodo, url, true);
            peticion_http.send(null);
          }
        }
         
        function inicializa_xhr() {
          if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
          }
          else if(window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
          }
        }
         
        function mostrar() {
          if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
              document.getElementById('divContenido').innerHTML=peticion_http.responseText;
            } else if(peticion_http.status == 404) {
              document.getElementById('divContenido').innerHTML=peticion_http.responseText;
            } 
          }
        }