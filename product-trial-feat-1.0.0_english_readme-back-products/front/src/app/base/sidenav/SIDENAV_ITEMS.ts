import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Produits"
    },
    link: '/products',
    icon: 'shopping-cart',
  },
  {
    id: 'admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    icon: 'users',
    link: '/admin',
    children: [
      {
        id: 'products',
        labels: {
          en: "Products",
          fr: "Produits"
        },
        link: 'products',
        enrichedUrl: () => 'admin/products'
      }
    ]
  }

];