export type PriceType = 'monthly' | 'annual';

export type Price = {
  amount: number;
  currency: string;
  type: PriceType
}

export type Tier = {
  id: string;
  name: string;
  description: string;
  prices: Record<PriceType, Price>;
  featuresList: string[];
  isFeatured: boolean;
}