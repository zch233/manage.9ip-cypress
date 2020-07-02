/// <reference types="cypress" />

describe('测试登陆/注销', () => {
  beforeEach(() => {
    cy.visit('http://192.168.2.218:8080/login')
  })

  it('通过帐号密码登陆', () => {
    cy.get('.loginAccount>input')
      .type('13388888888')
    cy.get('.loginPassword>input')
      .type('ab123456')
    cy.get('.el-button[type="submit"]').click().should(() => {
      expect(JSON.parse(localStorage.getItem('user')).logined).to.eq(true)
    })
    cy.contains('欢迎使用').should('exist')
    cy.contains('超级管理员').should('exist')
    cy.contains('登录成功').should('exist')
  })
  it('通过验证码登陆', () => {
    cy.contains('验证码登录').click()
    cy.get('.loginAccount>input')
      .type('13388888888')
    cy.contains('获取验证码').click()
    cy.get('.loginCaptcha>input')
      .type('111111')
    cy.get('.el-button[type="submit"]').click()
    cy.contains('欢迎使用').should('exist')
    cy.contains('超级管理员').should('exist')
    cy.contains('登录成功').should('exist')
  })
  it('注销', () => {
    cy.get('.loginAccount>input')
      .type('13388888888')
    cy.get('.loginPassword>input')
      .type('ab123456')
    cy.get('.el-button[type="submit"]').click()
    cy.get('.userinfo-name').click()
    cy.contains('退出登录').click().should(() => {
      expect(JSON.parse(localStorage.getItem('user')).logined).to.eq('')
    })
    cy.contains('成功退出').should('exist')
  })
})