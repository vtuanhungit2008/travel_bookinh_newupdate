




describe('Login Form Test', () => {
  //email
  it('Mặc định rỗng',()=>{
    cy.visit('/login');
    
  })
  it('Không nhập email',()=>{
    cy.visit('/login');
  })
  it('Nhập email sai ', () => {
    // Truy cập trang login
    cy.visit('/login');
    
    // Nhập email sai
    cy.get('.cl-formFieldInput__identifier')
      .type('wrongemail@example.com'); // Nhập email sai

    // Nhấn nút "Đăng nhập"
    cy.get('.cl-formButtonPrimary.cl-button')
      .click(); // Nhấn nút gửi email

    // Kiểm tra thông báo 
    
    cy.wait(2000); // Chờ 2 giây
  });
  it('Nhập email sai định dạng', () => {
    // Truy cập trang login
    cy.visit('/login');
    
    // Nhập ký tự không hợp lệ vào trường email
    cy.get('.cl-formFieldInput__identifier').type('invalid-email$%^&*');

    // Nhấn nút "Đăng nhập"
    cy.get('.cl-formButtonPrimary.cl-button').click();

    // Kiểm tra thông báo lỗi
    cy.wait(2000); // Chờ 2 giây
  
     
        
  });
  it('Email đúng mật khẩu sai', () => {
    cy.visit('/login');
    
    // Nhập email hợp lệ
    cy.get('.cl-formFieldInput__identifier')
      .type('votuanhungit2008@gmail.com');

    // Nhấn nút "Đăng nhập"
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();

    // Chờ trường mật khẩu xuất hiện và nhập mật khẩu sai
    cy.get('.cl-formFieldInput__password')
      .type('wrongpassword'); // Nhập mật khẩu sai

    // Nhấn nút đăng nhập
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();

    // Kiểm tra thông báo lỗi về mật khẩu sai
    
    cy.wait(2000); // Chờ 2 giây
  });
  it('Email và mật khẩu hợp lệ ', () => {
    cy.visit('/login');
    
    // Nhập email hợp lệ
    cy.get('.cl-formFieldInput__identifier')
      .type('votuanhungit2008@gmail.com');

    // Nhấn nút "Đăng nhập"
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();

    // Chờ trường mật khẩu xuất hiện và nhập mật khẩu hợp lệ
    cy.get('.cl-formFieldInput__password')
      .type('tuanhungcm2003'); // Nhập mật khẩu hợp lệ

    // Nhấn nút đăng nhập
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();

    // Kiểm tra trang chuyển hướng
    cy.wait(2000); // Chờ 2 giây
  });
  //password
  it("Mặc định rỗng",()=>{
    cy.visit('/login');
    cy.get('.cl-formFieldInput__identifier')
    .type('votuanhungit2008@gmail.com');
    cy.wait(2000); // Chờ 2 giâ
  })
  it("Cho phép nhập các ký tự đặc biệt",()=>{
    cy.visit('/login');
    cy.get('.cl-formFieldInput__identifier')
    .type('votuanhungit2008@gmail.com');
    cy.get('.cl-formButtonPrimary.cl-button')
    .click();
    cy.get('.cl-formFieldInput__password')
    .type('@#%^&*'); // Nhập mật khẩu hợp lệ
    cy.wait(2000); // Chờ 2 giâ

  })
  it("Mã hóa thành dạng *",()=>{
    cy.visit('/login');

    // Enter the email address
    cy.get('.cl-formFieldInput__identifier')
      .type('votuanhungit2008@gmail.com');
      cy.get('.cl-formButtonPrimary.cl-button')
      .click();
    // Click the eye icon to ensure the password field is hidden (showing ***)
    cy.get('.cl-formFieldInputShowPasswordIcon') // Use the correct selector for your icon
    .click();

    // Enter the password
    cy.get('.cl-formFieldInput__password')
      .type('1234');

    // Verify that the password is masked
   
      cy.wait(2000); // Chờ 2 giâ
      })
  
  

  

});


  



 
  
  
  




