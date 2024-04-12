document.getElementById('shipping-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullname = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
  
    // Gửi thông tin giao hàng đi đâu đó (ví dụ: Ajax request hoặc lưu vào CSDL)
  
    alert('Thông tin giao hàng đã được gửi thành công!');
    // Có thể chuyển hướng người dùng đến trang khác sau khi gửi thành công
    window.location.href = "home.html";
  });