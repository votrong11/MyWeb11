// Xử lý sự kiện click ẩn/hiện lời khuyên hữu ích về URL
document.addEventListener('DOMContentLoaded', () => {
    const btnTip = document.getElementById('btn-tip');
    const tipContent = document.getElementById('tip-content');

    btnTip.addEventListener('click', () => {
        // Kiểm tra xem hộp thoại đang ẩn hay hiện để chuyển đổi trạng thái
        if (tipContent.classList.contains('hidden')) {
            tipContent.classList.remove('hidden');
            btnTip.textContent = 'Ẩn lời khuyên';
            btnTip.style.backgroundColor = '#64748b'; // Đổi màu nút sang màu xám
        } else {
            tipContent.classList.add('hidden');
            btnTip.textContent = 'Xem lời khuyên về URL';
            btnTip.style.backgroundColor = '#2563eb'; // Trở về màu xanh mặc định
        }
    });
});