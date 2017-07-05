//	El siguiente fragmento de código te mostrará la versión básica del SDK,
// con las opciones configuradas en sus valores predeterminados más comunes.
window.fbAsyncInit = function() {
	FB.init({
		appId      : '1953035924938010',
		cookie     : true,
		xfbml      : true,
		version    : 'v2.8'
	});
	FB.AppEvents.logPageView();   
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//	Esto es parte del código que se ejecuta durante la carga de la página para comprobar el estado
// de inicio de sesión de una persona,y llamar a tu función de devolución de llamada con el resultado.
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//	Esta es la devolución de llamada. Llama a FB.getLoginStatus() para obtener el estado de inicio
// de sesión más reciente. (statusChangeCallback() es una función que forma parte del ejemplo 
// que procesa la respuesta).

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}