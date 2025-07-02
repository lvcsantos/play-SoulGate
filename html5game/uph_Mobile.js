// Cria o teclado virtual como um input HTML invisível
window.gml_virtual_keyboard_input = document.createElement("input");

gml_virtual_keyboard_input.type = "text";
gml_virtual_keyboard_input.style.position = "absolute";
gml_virtual_keyboard_input.style.top = "0px";
gml_virtual_keyboard_input.style.left = "0px";
gml_virtual_keyboard_input.style.width = "1px";
gml_virtual_keyboard_input.style.height = "1px";
gml_virtual_keyboard_input.style.opacity = "1"; // Em vez de 0 total
gml_virtual_keyboard_input.style.zIndex = "9999";
gml_virtual_keyboard_input.autocapitalize = "off";
gml_virtual_keyboard_input.autocorrect = "off";

document.body.appendChild(gml_virtual_keyboard_input);

// Função para mostrar teclado virtual
window.gml_show_virtual_keyboard = function () {
    gml_virtual_keyboard_input.focus();
};

// Função para esconder
window.gml_hide_virtual_keyboard = function () {
    gml_virtual_keyboard_input.blur();
};

// Função para ler valor atual
window.gml_get_virtual_keyboard_value = function () {
    return gml_virtual_keyboard_input.value;
};

// Resetar valor
window.gml_clear_virtual_keyboard = function () {
    gml_virtual_keyboard_input.value = "";
};