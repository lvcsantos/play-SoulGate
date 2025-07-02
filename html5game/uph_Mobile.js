// Cria o teclado virtual como um input HTML invisível
window.gml_virtual_keyboard_input = document.createElement("input");

// Configurações do input
gml_virtual_keyboard_input.type = "text";
gml_virtual_keyboard_input.style.position = "absolute";
gml_virtual_keyboard_input.style.top = "0px";
gml_virtual_keyboard_input.style.left = "0px";
gml_virtual_keyboard_input.style.width = "1px";
gml_virtual_keyboard_input.style.height = "1px";
gml_virtual_keyboard_input.style.opacity = "0.01"; // <- invisível mas detectável
gml_virtual_keyboard_input.style.zIndex = "9999";
gml_virtual_keyboard_input.autocapitalize = "off";
gml_virtual_keyboard_input.autocorrect = "off";

// Adiciona ao DOM
document.body.appendChild(gml_virtual_keyboard_input);

window.gml_show_virtual_keyboard = function () {
  
        gml_virtual_keyboard_input.focus();
    
};

window.gml_hide_virtual_keyboard = function () {
   
        gml_virtual_keyboard_input.blur();
    
};
// Retorna o valor digitado
window.gml_get_virtual_keyboard_value = function () {
    return gml_virtual_keyboard_input.value;
};

// Limpa o valor
window.gml_clear_virtual_keyboard = function () {
    gml_virtual_keyboard_input.value = "";
};

// Loga quando o campo ganha foco
gml_virtual_keyboard_input.addEventListener("focus", function () {
    console.log("Teclado virtual: FOCO OK");
});

window.gml_is_mobile = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};