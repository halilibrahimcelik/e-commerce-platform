export type Products = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount: string;
};

export type CartValue = {
  id: string;
  sessionId: string;
};
export type SessionId = {
  sessionId: string;
};

export type CartQuantity = {
  productId: string;
  quantity: number;
  name: string;
  price: number;
};

export type CartQuantityList = {
  id: string | number;
  quantity: number;
};
