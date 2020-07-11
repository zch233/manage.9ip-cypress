/// <reference types="cypress" />
const isVisible = (elem) => !!(
  elem.offsetWidth ||
  elem.offsetHeight ||
  elem.getClientRects().length
)
describe('专利功能', () => {
  beforeEach(() => {
    cy.visit('http://192.168.1.4:8080/login')
    cy.get('.loginAccount>input')
      .type('13388888888')
    cy.get('.loginPassword>input')
      .type('ab123456')
    cy.get('.el-button[type="submit"]').click()
    cy.contains('产品管理').click()
    cy.contains('专利管理').click()
  })

  it('增加', () => {
    cy.get('.el-button').contains('添加').click()
    cy.get('.el-form-item__label').contains('类目').next().children('.el-cascader').click()
    cy.get('.el-cascader-node__label').contains('A-人类生活必需').prev().click()
    cy.get('.el-form-item__label').contains('专利号').next().children().children('input').type('123456')
    cy.get('.el-form-item__label').contains('专利名称').next().children().children('input').type('测试专利')
    cy.get('.el-form-item__label').contains('缴费截止日期').next().children().children('input').type('2020-07-02{enter}')
    cy.get('.el-form-item__label').contains('单价').next().children().children('input').type('0.01')
    cy.get('.el-form-item__label').contains('卖家').next().children().children().children('button').click()
    cy.get('.el-dialog.small').contains('预设卖家').click()
    cy.get('.el-dialog.small').contains('确定').click()
    cy.get('.el-form-item__label').contains('法律状态').next().children().children('input').type('测试状态')
    cy.get('.el-form-item__label').contains('标签').next().children().children('input').type('测,试,标,签')
    // cy.get('.el-form-item__label').contains('下证状态').next().children().children().children('input').click()
    // cy.get('.el-select-dropdown__item').contains('未知').click()
    cy.get('.el-form-item__label').contains('描述').next().children().children('textarea').type('这是一段测试描述')
  })
})