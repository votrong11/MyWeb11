// Xử lý sự kiện click ẩn/hiện hộp mẹo vặt của Mini-Project 2
document.addEventListener('DOMContentLoaded', () => {
    const btnShowTip = document.getElementById('btn-show-tip');
    const tipBox = document.getElementById('tip-box');

    btnShowTip.addEventListener('click', () => {
        // Kiểm tra className hiện tại của hộp thông tin để hoán đổi
        if (tipBox.className === 'tip-hidden') {
            tipBox.className = 'tip-show';
            btnShowTip.textContent = 'Ẩn mẹo thiết kế URL';
            btnShowTip.style.backgroundColor = '#64748b'; // Đổi nút sang màu xám
        } else {
            tipBox.className = 'tip-hidden';
            btnShowTip.textContent = 'Bấm để xem mẹo thiết kế URL';
            btnShowTip.style.backgroundColor = '#2563eb'; // Trở về màu xanh mặc định
        }
    });
});