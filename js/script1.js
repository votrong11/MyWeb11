// Xử lý logic ẩn/hiện thông điệp cho Mini-Project 1
document.addEventListener('DOMContentLoaded', () => {
    const btnMessage = document.getElementById('btn-message');
    const welcomeText = document.getElementById('welcome-text');

    btnMessage.addEventListener('click', () => {
        if (welcomeText.className === 'hidden-text') {
            welcomeText.className = 'show-text';
            btnMessage.textContent = 'Ẩn thông điệp';
        } else {
            welcomeText.className = 'hidden-text';
            btnMessage.textContent = 'Nhập để xem thông điệp chào mừng';
        }
    });
});