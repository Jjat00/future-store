import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.HOST_NAME}/admin/api/2024-07/products.json`,
  },
  collections: {
    all: `${env.HOST_NAME}/admin/api/2024-07/smart_collections.json`,
    products: (id: number) =>
      `${env.HOST_NAME}/admin/api/2024-07/collections/${id}/products.json`,
  },
};
