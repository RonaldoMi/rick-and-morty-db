import GSelect from '@/components/generic/GSelect.vue';

describe('<GSelect />', () => {
  beforeEach(() => {
    const labelValue = 'Example label';
    const color = 'rgb(24, 171, 240)';
    const loading = true;
    const items = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' },
    ];

    cy.mount(GSelect, {
      propsData: {
        label: labelValue,
        color: color,
        loading: loading,
        items: items,
      },
    });

    cy.get('.select-select').as('selectEl');
    cy.get('.select-label').as('labelEl');
  });

  it('Render selected option', () => {
    const selectedOption = 'option2';

    cy.get('@selectEl').invoke('val', selectedOption).trigger('change');
    cy.get('@selectEl').should('have.value', selectedOption);
  });

  it('Render expected label', () => {
    const labelValue = 'Example label';

    cy.get('@labelEl').should('be.visible').and('contain', labelValue);
  });

  it('Render expected color', () => {
    const color = 'rgb(24, 171, 240)';
    const selectedOption = 'option3';

    cy.get('@selectEl').invoke('val', selectedOption).trigger('change');

    // check label color
    cy.get('@labelEl').should('have.css', 'color', color);
    // check icon color
    cy.get('#icon-expand').should('have.css', 'color', color);
    // check loading color
    cy.get('.loading').should('have.css', 'border-top-color', color);
  });

  it('Render expected loading', () => {
    cy.get('#icon-loading').should('exist');
  });
});
