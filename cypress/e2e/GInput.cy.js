import GInput from '@/components/generic/GInput.vue';

describe('<GInput />', () => {
  beforeEach(() => {
    const labelValue = 'Exemple label';
    const color = 'rgb(24, 171, 240)';
    const loading = true;
    const type = 'number';

    cy.mount(GInput, {
      propsData: {
        label: labelValue,
        color: color,
        loading: loading,
        type: type,
      },
    });

    cy.get('.search-input__input').as('inputEl');
  });

  it('Render expected input value', () => {
    const inputValue = '1521452';

    // Acesse o elemento usando o alias
    cy.get('@inputEl').type(inputValue);
    cy.get('@inputEl').should('have.value', inputValue);
  });

  it('Render expected label', () => {
    const labelValue = 'Exemple label';

    cy.get('.search-input__label')
      .should('be.visible')
      .and('contain', labelValue);
  });

  it('Render expected input type', () => {
    const textValue = 'Exemple value';
    const numbValue = '123';

    // check input type on value is text
    cy.get('@inputEl').type(textValue);
    cy.get('@inputEl').should('have.value', '');

    // check input type on value is numb
    cy.get('@inputEl').type(numbValue);
    cy.get('@inputEl').should('have.value', numbValue);
  });

  it('Render expected color', () => {
    const color = 'rgb(24, 171, 240)';
    const inputValue = '123';

    cy.get('@inputEl').type(inputValue);

    // check label color
    cy.get('.search-input__label').should('have.css', 'color', color);

    // check underline color
    cy.get('.search-input__underline').should(
      'have.css',
      'background-color',
      color
    );

    // check loading color
    cy.get('.loading').should('have.css', 'border-top-color', color);
  });

  it('Render expected loading', () => {
    cy.get('#icon-loading').should('exist');
  });

  it('Render focus effect', () => {
    const inputValue = '123';

    cy.get('.search-input__label.active').should('not.exist');
    cy.get('@inputEl').type(inputValue);
    cy.get('.search-input__label.active').should('exist');
  });
});
