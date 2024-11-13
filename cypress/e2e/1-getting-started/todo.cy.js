

// describe('Registration Validation', () => {

//   it('should show error when email is invalid', () => {
//     cy.visit('https://witty-shrew-67.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fregister'); // Truy cập trang đăng ký

//     // Nhập email không hợp lệ
//     cy.get('.cl-formFieldInput__emailAddress')
//       .type('invalid-email'); // Nhập email không hợp lệ

//     // Nhập mật khẩu hợp lệ
//     cy.get('.cl-formFieldInput__password')
//       .type('ValidPassword123');

//     // Nhấn nút đăng ký
//     cy.get('.cl-formButtonPrimary').click();

//     // Kiểm tra thông báo lỗi cho email không hợp lệ
//     cy.wait(1000)
//   });

//   it('should show error when password is too short', () => {
//     cy.visit('https://witty-shrew-67.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fregister'); // Truy cập trang đăng ký

//     // Nhập email hợp lệ
//     cy.get('.cl-formFieldInput__emailAddress')
//       .type('valid@example.com');

//     // Nhập mật khẩu quá ngắn
//     cy.get('.cl-formFieldInput__password')
//       .type('short'); // Mật khẩu quá ngắn (dưới 8 ký tự)

//     // Nhấn nút đăng ký
//     cy.get('.cl-formButtonPrimary').click();

//     // Kiểm tra thông báo lỗi cho mật khẩu quá ngắn
//     cy.wait(1000)
//   });

//   it('should show error when email is empty', () => {
//     cy.visit('https://witty-shrew-67.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fregister'); // Truy cập trang đăng ký

//     // Để trống trường email
//     cy.get('.cl-formFieldInput__emailAddress').clear();

//     // Nhập mật khẩu hợp lệ
//     cy.get('.cl-formFieldInput__password')
//       .type('ValidPassword123');

//     // Nhấn nút đăng ký
//     cy.get('.cl-formButtonPrimary').click();
//     cy.wait(1000)
//     // Kiểm tra thông báo lỗi cho trường email yêu cầu
 
//   });

//   it('should show error when password is empty', () => {
//     cy.visit('https://witty-shrew-67.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fregister'); // Truy cập trang đăng ký

//     // Nhập email hợp lệ
//     cy.get('.cl-formFieldInput__emailAddress')
//       .type('votuanhungit2008@gmail.com');

//     // Để trống trường mật khẩu
//     cy.get('.cl-formFieldInput__password').clear();

//     // Nhấn nút đăng ký
//     cy.get('.cl-formButtonPrimary').click();
//     cy.wait(1000)
//     // Kiểm tra thông báo lỗi cho trường mật khẩu yêu cầu
  
//   });

//   it('should register successfully with valid email and password', () => {
//     cy.visit('https://witty-shrew-67.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fregister'); // Truy cập trang đăng ký

//     // Nhập email hợp lệ
//     cy.get('.cl-formFieldInput__emailAddress')
//       .type('valid@example.com');

//     // Nhập mật khẩu hợp lệ
//     cy.get('.cl-formFieldInput__password')
//       .type('ValidPassword123');

//     // Nhấn nút đăng ký
//     cy.get('.cl-formButtonPrimary').click();
//     cy.wait(1000)
//     // Kiểm tra chuyển hướng sau khi đăng ký thành công (thay đổi URL hoặc kiểm tra UI khác)
   
//   });

// });


// describe('Login Form Test', () => {
//   it('should show an error message if email is incorrect', () => {
//     // Truy cập trang login
//     cy.visit('/login');
    
//     // Nhập email sai
//     cy.get('.cl-formFieldInput__identifier')
//       .type('wrongemail@example.com'); // Nhập email sai

//     // Nhấn nút "Đăng nhập"
//     cy.get('.cl-formButtonPrimary.cl-button')
//       .click(); // Nhấn nút gửi email

//     // Kiểm tra thông báo 
    
//     cy.wait(2000); // Chờ 2 giây
//   });

//   it('should show an error message for incorrect password', () => {
//     cy.visit('/login');
    
//     // Nhập email hợp lệ
//     cy.get('.cl-formFieldInput__identifier')
//       .type('votuanhungit2008@gmail.com');

//     // Nhấn nút "Đăng nhập"
//     cy.get('.cl-formButtonPrimary.cl-button')
//       .click();

//     // Chờ trường mật khẩu xuất hiện và nhập mật khẩu sai
//     cy.get('.cl-formFieldInput__password')
//       .should('be.visible')
//       .type('wrongpassword'); // Nhập mật khẩu sai

//     // Nhấn nút đăng nhập
//     cy.get('.cl-formButtonPrimary.cl-button')
//       .click();

//     // Kiểm tra thông báo lỗi về mật khẩu sai
    
//     cy.wait(2000); // Chờ 2 giây
//   });

  
 
//   it('should submit the login form with valid credentials', () => {
//     cy.visit('/login');
    
//     // Nhập email hợp lệ
//     cy.get('.cl-formFieldInput__identifier')
//       .type('votuanhungit2008@gmail.com');

//     // Nhấn nút "Đăng nhập"
//     cy.get('.cl-formButtonPrimary.cl-button')
//       .click();

//     // Chờ trường mật khẩu xuất hiện và nhập mật khẩu hợp lệ
//     cy.get('.cl-formFieldInput__password')
//       .should('be.visible')
//       .type('tuanhungcm2003'); // Nhập mật khẩu hợp lệ

//     // Nhấn nút đăng nhập
//     cy.get('.cl-formButtonPrimary.cl-button')
//       .click();

//     // Kiểm tra trang chuyển hướng
//     cy.wait(2000); // Chờ 2 giây
//   });


  
// });



 
  
  
  




