const inputs = document.querySelectorAll('.menu__input');
const labels = document.querySelectorAll('.menu__label');



function updateLabelStyles() {
    labels.forEach(label => {
        label.style.background = 'transparent';
        label.style.color = 'rgb(162, 101, 57)';
    });

    const selectedInputId = this.id; 
    const selectedLabel = document.querySelector(`label[for="${selectedInputId}"]`);
    selectedLabel.style.background = 'rgb(162, 101, 57)';
    selectedLabel.style.color = 'rgb(255, 255, 255)';
}

inputs.forEach(input => {
    input.addEventListener('change', updateLabelStyles);
});

document.addEventListener('DOMContentLoaded', () => {
    const checkedInput = document.querySelector('.menu__input:checked');
    if (checkedInput) {
        updateLabelStyles.call(checkedInput); 
    }
});
