function opendropdown() {
    var dropdown_content = document.querySelector('.dropdown-content');
    var dropdown_button = document.querySelector('.dropdown-button')
    var display_setting = dropdown_content.style.display;

    if (display_setting == 'none') {
        dropdown_content.style.display = 'block';
        dropdown_button.style.position = 'fixed';
    } else {
        dropdown_content.style.display = 'none'
        dropdown_button.style.position = 'static';
    }
}