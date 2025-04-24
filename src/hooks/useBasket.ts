import { computed, reactive } from "vue";
import type { Product } from "../models/product";

interface BasketOptions {
  /**Продукты для витрины (Showcase) */
  products: Product[];
  /**Лимит (размер) корзины (Basket) */
  limit: number;
}

export function useBasket({ products, limit }: BasketOptions) {
  const showcaseMap = reactive(
    new Map<number, Product>(products.map((p) => [p.id, p]))
  );

  const basketMap = reactive(new Map<number, Product>());

  const basketSize = computed(() => basketMap.size);

  function toggleProduct(id: number) {
    console.log(id);
    if (showcaseMap.has(id) && basketSize.value < limit) {
      const product = showcaseMap.get(id)!;
      showcaseMap.delete(id);
      basketMap.set(id, product);
    } else if (basketMap.has(id)) {
      const product = basketMap.get(id)!;
      basketMap.delete(id);
      showcaseMap.set(id, product);
    }
  }

  const showcase = computed(() => Array.from(showcaseMap.values()));
  const basket = computed(() => Array.from(basketMap.values()));

  return {
    toggleProduct,
    showcase,
    basket,
    basketSize,
  };
}
