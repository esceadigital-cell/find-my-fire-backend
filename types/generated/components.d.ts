import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductLink extends Struct.ComponentSchema {
  collectionName: 'components_product_product_links';
  info: {
    displayName: 'productLink';
  };
  attributes: {
    brand: Schema.Attribute.Relation<'oneToOne', 'api::brand.brand'> &
      Schema.Attribute.Required;
    configuration: Schema.Attribute.Relation<
      'oneToOne',
      'api::configuration.configuration'
    >;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionHeatingOption extends Struct.ComponentSchema {
  collectionName: 'components_question_heating_options';
  info: {
    displayName: 'heating-option';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    modifier: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface QuestionLifestyleQuestion extends Struct.ComponentSchema {
  collectionName: 'components_question_lifestyle_questions';
  info: {
    displayName: 'Property option';
  };
  attributes: {
    filterOperator: Schema.Attribute.Enumeration<
      ['equals', 'not equals', 'less or equal', 'greater or equal']
    > &
      Schema.Attribute.DefaultTo<'equals'>;
    filterValue: Schema.Attribute.String;
    key: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'product.product-link': ProductProductLink;
      'question.heating-option': QuestionHeatingOption;
      'question.lifestyle-question': QuestionLifestyleQuestion;
    }
  }
}
