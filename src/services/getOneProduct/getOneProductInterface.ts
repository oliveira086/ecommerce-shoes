export interface sort {
  id: "asc"
}
  
export type filterType = keyof typeof filters

export enum filters {
  "id",
  "name",
  "category_id",
  "ean",
  "available",
  "price",
  "brand",
  "model",
  "hot",
  "quantity_sold",
  "release",
  "free_shipping",
  "weight",
  "image",
  "release_date",
  "stock",
  "promotion",
  "reference",
  "has_buy_together",
  "has_free_gift",
  "has_description",
  "brand_id",
  "additional_button",
  "virtual_product",
  "has_ean",
  "is_kit",
  "has_title",
  "has_meta_description",
  "has_keywords",
  "has_variations",
  "has_brand",
  "has_model",
  "has_dimension",
  "has_weight",
  "property_name",
  "property_id",
  "property_value",
  "property_value_id",
  "activation_date",
  "deactivation_date",
  "show_properties",
  "kit_has_variation",
  "id_campaign",
  "show_discounts",
  "property_value_all",
  "minimum_stock",
  "minimum_stock_alert",
  "warranty",
  "warranty_days",
  "availability",
  "availability_days",
  "description",
  "has_variation",
  "catalog_id",
  "modified",
  "created",
  "price_range",
  "current_price_range",
  "date_range",
  "date_range_deactivation",
  "current_price"
}

export interface productImage {
  http: string | undefined,
  https: string | undefined,
  thumbs: { 
    30: {
      http: string | undefined,
      https: string | undefined,
    },
    90: {
      http: string | undefined,
      https: string | undefined,  
    },
    180: {
      http: string | undefined,
      https: string | undefined,  
    }
  }
}

export interface product { 
  ean: string,
  is_kit: string,
  slug: string,
  ncm: string,
  activation_date: string,
  deactivation_date: string,
  id: string,
  name: string,
  price: string,
  promotional_price: string,
  brand: string,
  brand_id: string,
  description: string | undefined,
  model: string ,
  category_id: string,
  available: string,
  availability: string,
  hot: string,
  release: string,
  additional_button: string,
  has_variation: string,
  url: {
    http: string,
    https: string
  },
  created: string,
  Properties: [
    
  ],
  payment_option: string,
  payment_option_details: [
    {
      display_name: string,
      type: string,
      plots: string,
      value: string,
      tax: string
    }
  ],
  related_categories: number[],
  release_date: string,
  virtual_product: "",
  video: string,
  metatag: [
    {
      "type": "description",
      "content": ""
    }
  ],
  upon_request: string,
  available_for_purchase: string,
  AdditionalInfos: [
    
  ],
  ProductImage: productImage[],
  id_campaign: string,
  kit_has_variation: string,
  payment_option_html: string,
  Variant: sort[]
}

export interface OneProduct {
  data : {
    Product: product
  }
}