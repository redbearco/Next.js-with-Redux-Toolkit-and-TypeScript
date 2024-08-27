export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export interface  Dimensions {
    width: number;
    height: number;
    depth: number;
};

export interface  Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

export interface  MetaData {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};


export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaData;
    images: string[];
    thumbnail: string;
};

export interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    step: number;
  }
