import GInput from '../GInput.vue';

describe('<GInput />', () => {
  it('Render expected input value', () => {
    const inputValue = 'Exemple value';

    cy.mount(GInput);

    cy.get('.search-input__input')
      .type(inputValue)
      .should('have.value', inputValue);
  });

  it('Render expected label', () => {
    const labelValue = 'Exemple label';

    cy.mount(GInput, {
      propsData: {
        label: labelValue,
      },
    });

    cy.contains('label', labelValue).should('be.visible');
  });

  it('Render expected input type', () => {
    const type = 'number';
    const textValue = 'Exemple value';
    const numbValue = 123;

    cy.mount(GInput, {
      propsData: {
        type: type,
      },
    });

    //check type text
    cy.get('.search-input__input').type(textValue).should('have.value', '');
    //check type number
    cy.get('.search-input__input')
      .type(numbValue)
      .should('have.value', numbValue);
  });

  it('Render expected color', () => {
    const labelValue = 'Exemple label';
    const inputValue = 'Exemple value';
    const color = 'rgb(24, 171, 240)';
    const loading = true;

    cy.mount(GInput, {
      propsData: {
        label: labelValue,
        color: color,
        loading: loading,
      },
    });
    // set values
    cy.get('.search-input__input').type(inputValue).click();
    cy.contains('label', labelValue).should('be.visible');

    // Cor da Label
    cy.get('.search-input__label')
      .invoke('css', 'color')
      .then((cor) => {
        expect(cor).to.equal(color);
      });
    // Cor do efeito abaixo do input
    cy.get('.search-input__underline')
      .invoke('css', 'background-color')
      .then((cor) => {
        expect(cor).to.equal(color);
      });
    // Cor do componente de loading
    cy.get('.loading')
      .invoke('css', 'border-top-color')
      .then((cor) => {
        expect(cor).to.equal(color);
      });
  });

  it('Render expected loading', () => {
    const loading = true;

    cy.mount(GInput, {
      propsData: {
        loading: loading,
      },
    });

    cy.get('#icon-loading').should('exist');
  });

  it('Render focus effect', () => {
    const labelValue = 'Exemple label';
    const inputValue = 'Exemple value';
    const color = 'rgb(24, 171, 240)';
    const loading = true;

    cy.mount(GInput, {
      propsData: {
        label: labelValue,
        color: color,
        loading: loading,
      },
    });

    // to focus input
    cy.get('.search-input__label.active').should('not.exist');
    cy.get('.search-input__input').type(inputValue);
    cy.get('.search-input__label.active').should('exist');
  });
});

// loading: {
//   type: Boolean,
//   default: false,
// },
