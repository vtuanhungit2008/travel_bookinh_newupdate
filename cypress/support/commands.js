Cypress.Commands.add("loginClerk", () => {

    cy.visit('/login');
    
    // Nhập email hợp lệ
    cy.get('.cl-formFieldInput__identifier')
      .type('votuanhungit2008@gmail.com');

    // Nhấn nút "Đăng nhập"
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();
    
    // Chờ trường mật khẩu xuất hiện và nhập mật khẩu hợp lệ
    cy.get('.cl-formFieldInput__password')
      .should('be.visible')
      .type('tuanhungcm2003'); // Nhập mật khẩu hợp lệ

    // Nhấn nút đăng nhập
    cy.get('.cl-formButtonPrimary.cl-button')
      .click();

    // Kiểm tra trang chuyển hướng
    cy.wait(2000); // Chờ 2 giây
  });
  