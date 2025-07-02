// Cria o teclado virtual como um input HTML invisível
window.gml_virtual_keyboard_input = document.createElement("input");

gml_virtual_keyboard_input.type = "text";
gml_virtual_keyboard_input.id = "gml_virtual_keyboard_input";
gml_virtual_keyboard_input.style.position = "absolute";
gml_virtual_keyboard_input.style.top = "-1000px"; // invisível
gml_virtual_keyboard_input.style.left = "-1000px";
gml_virtual_keyboard_input.style.zIndex = "-1";


gml_virtual_keyboard_input.style.top = "100px";
gml_virtual_keyboard_input.style.left = "100px";
gml_virtual_keyboard_input.style.width = "200px";
gml_virtual_keyboard_input.style.height = "30px";
gml_virtual_keyboard_input.style.fontSize = "20px";
gml_virtual_keyboard_input.style.zIndex = "9999";
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