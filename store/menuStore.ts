import type { MenuItem } from "~/utils/models/menu";

const useMenuStore = defineStore("menuStore", () => {
  const currentPage = ref<string>("");
  const brandMenuData = [
    {
      link: "/",
      title: "Jordan",
      icon: "jordan.svg",
    },
    {
      link: "/",
      title: "Converse",
      icon: "converse.svg",
    },
  ];

  const serviceMenuData = [
    {
      link: "/",
      title: "Help",
      icon: "help.svg",
    },
    {
      link: "/",
      title: "Bag",
      icon: "bag.svg",
    },
    {
      link: "/",
      title: "Orders",
      icon: "order.svg",
    },
    {
      link: "/",
      title: "Find a Store",
      icon: "store.svg",
    },
  ];

  const menuData: MenuItem[] = [
    {
      title: "New & Featured",
      children: [
        {
          title: "New Arrivals",
          link: "/",
        },
        {
          title: "Get Set for School",
          children: [
            {
              title: "Extra 25% Off Fall Styles",
              link: "/",
            },
            {
              title: "Shop the Collection",
              link: "/",
            },
            {
              title: "Shopping Guide",
              link: "/",
            },
            {
              title: "Bags & Backpacks",
              link: "/",
            },
          ],
        },
        {
          title: "Featured",
          children: [
            {
              title: "Best Sellers",
              link: "/",
            },
            {
              title: "New & Upcoming Drops",
              link: "/",
            },
            {
              title: "AGC",
              link: "/",
            },
            {
              title: "Retro Running",
              link: "/",
            },
            {
              title: "Light Army Shop",
              link: "/",
            },
            {
              title: "Shop Sport",
              link: "/",
            },
          ],
        },
        {
          title: "Shop Classics",
          children: [
            {
              title: "Dunk",
              link: "/",
            },
            {
              title: "Air Jordan 1",
              link: "/",
            },
            {
              title: "Air Force",
              link: "/",
            },
            {
              title: "Air Max",
              link: "/",
            },
            {
              title: "Blazer",
              link: "/",
            },
            {
              title: "Vomero",
              link: "/",
            },
          ],
        },
        {
          title: "Explore",
          children: [
            {
              title: "SNKRS Launch Calendar",
              link: "/",
            },
            {
              title: "Running Shoe Finder",
              link: "/",
            },
            {
              title: "Bra Finder",
              link: "/",
            },
            {
              title: "Product Care",
              link: "/",
            },
            {
              title: "Member Rewards",
              link: "/",
            },
            {
              title: "Buying Guides",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "Men",
      children: [
        {
          title: "New Arrivals",
          link: "/",
        },
        {
          title: "Extra 25% Off Fall Styles",
          link: "/",
        },
        {
          title: "Featured",
          children: [
            {
              title: "Best Sellers",
              link: "/",
            },
            {
              title: "New & Upcoming Drops",
              link: "/",
            },
            {
              title: "All Sale",
              link: "/",
            },
            {
              title: "Get Set for School",
              link: "/",
            },
            {
              title: "Hike Nike",
              link: "/",
            },
            {
              title: "Gear Up for College Football",
              link: "/",
            },
            {
              title: "Fall Color Trends",
              link: "/",
            },
          ],
        },
        {
          title: "Shoes",
          children: [
            {
              title: "All Shoes",
              link: "/",
            },
            {
              title: "Lifestyle",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
            {
              title: "Dunk",
              link: "/",
            },
            {
              title: "Retro Running",
              link: "/",
            },
            {
              title: "Air Max",
              link: "/",
            },
            {
              title: "Air Force 1",
              link: "/",
            },
            {
              title: "Training & Gym",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Nike SB",
              link: "/",
            },
            {
              title: "Sandals & Sliders",
              link: "/",
            },
            {
              title: "Nike by You",
              link: "/",
            },
            {
              title: "Shoes $100 & Under",
              link: "/",
            },
          ],
        },
        {
          title: "Clothing",
          children: [
            {
              title: "All Clothing",
              link: "/",
            },
            {
              title: "Hoodies & Sweatshirts",
              link: "/",
            },
            {
              title: "Shorts",
              link: "/",
            },
            {
              title: "Pants & Tights",
              link: "/",
            },
            {
              title: "Jackets & Vests",
              link: "/",
            },
            {
              title: "Tops & T-Shirts",
              link: "/",
            },
            {
              title: "Matching Sets",
              link: "/",
            },
            {
              title: "Big & Tall",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
          ],
        },
        {
          title: "Accessories",
          children: [
            {
              title: "All Accessories",
              link: "/",
            },
            {
              title: "Bags & Backpacks",
              link: "/",
            },
            {
              title: "Hats & Headwear",
              link: "/",
            },
            {
              title: "Sunglasses",
              link: "/",
            },
            {
              title: "Socks",
              link: "/",
            },
          ],
        },
        {
          title: "Shop by Sport",
          children: [
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Golf",
              link: "/",
            },
            {
              title: "Soccer",
              link: "/",
            },
            {
              title: "Training & Gym",
              link: "/",
            },
            {
              title: "Tennis",
              link: "/",
            },
            {
              title: "Baseball",
              link: "/",
            },
            {
              title: "Football",
              link: "/",
            },
            {
              title: "Trail Running",
              link: "/",
            },
            {
              title: "Swimming",
              link: "/",
            },
            {
              title: "Pickleball",
              link: "/",
            },
            {
              title: "Fan Gear",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "Women",
      children: [
        {
          title: "New Arrivals",
          link: "/",
        },
        {
          title: "Extra 25% Off Fall Styles",
          link: "/",
        },
        {
          title: "Featured",
          children: [
            {
              title: "Best Sellers",
              link: "/",
            },
            {
              title: "New & Upcoming Drops",
              link: "/",
            },
            {
              title: "All Sale",
              link: "/",
            },
            {
              title: "Get Set for School",
              link: "/",
            },
            {
              title: "Zenvy",
              link: "/",
            },
            {
              title: "Light Army Shop",
              link: "/",
            },
            {
              title: "Nike One",
              link: "/",
            },
          ],
        },
        {
          title: "Shoes",
          children: [
            {
              title: "All Shoes",
              link: "/",
            },
            {
              title: "Lifestyle",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
            {
              title: "Dunk",
              link: "/",
            },
            {
              title: "Retro Running",
              link: "/",
            },
            {
              title: "Air Max",
              link: "/",
            },
            {
              title: "Air Force 1",
              link: "/",
            },
            {
              title: "Training & Gym",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Nike SB",
              link: "/",
            },
            {
              title: "Sandals & Sliders",
              link: "/",
            },
            {
              title: "Nike by You",
              link: "/",
            },
            {
              title: "Shoes $100 & Under",
              link: "/",
            },
          ],
        },
        {
          title: "Clothing",
          children: [
            {
              title: "All Clothing",
              link: "/",
            },
            {
              title: "Hoodies & Sweatshirts",
              link: "/",
            },
            {
              title: "Shorts",
              link: "/",
            },
            {
              title: "Pants",
              link: "/",
            },
            {
              title: "Leggings",
              link: "/",
            },
            {
              title: "Jackets & Vests",
              link: "/",
            },
            {
              title: "Tops & T-Shirts",
              link: "/",
            },
            {
              title: "Skirts & Dresses",
              link: "/",
            },
            {
              title: "Bras",
              link: "/",
            },
            {
              title: "Matching Sets",
              link: "/",
            },
            {
              title: "Plus Size",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
          ],
        },
        {
          title: "Accessories",
          children: [
            {
              title: "All Accessories",
              link: "/",
            },
            {
              title: "Bags & Backpacks",
              link: "/",
            },
            {
              title: "Hats & Headwear",
              link: "/",
            },
            {
              title: "Sunglasses",
              link: "/",
            },
            {
              title: "Socks",
              link: "/",
            },
          ],
        },
        {
          title: "Shop by Sport",
          children: [
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Golf",
              link: "/",
            },
            {
              title: "Soccer",
              link: "/",
            },
            {
              title: "Fitness",
              link: "/",
            },
            {
              title: "Tennis",
              link: "/",
            },
            {
              title: "Yoga",
              link: "/",
            },
            {
              title: "Trail Running",
              link: "/",
            },
            {
              title: "Softball",
              link: "/",
            },
            {
              title: "Swimming",
              link: "/",
            },
            {
              title: "Pickleball",
              link: "/",
            },
            {
              title: "Fan Gear",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "Kids",
      children: [
        {
          title: "New Arrivals",
          link: "/",
        },
        {
          title: "Extra 25% Off Fall Styles",
          link: "/",
        },
        {
          title: "Featured",
          children: [
            {
              title: "Best Sellers",
              link: "/",
            },
            {
              title: "New & Upcoming Drops",
              link: "/",
            },
            {
              title: "All Sale",
              link: "/",
            },
            {
              title: "Get Set for School",
              link: "/",
            },
            {
              title: "Teen Essentials",
              link: "/",
            },
            {
              title: "Red, White & Blue",
              link: "/",
            },
            {
              title: "EasyOn",
              link: "/",
            },
          ],
        },
        {
          title: "Shop by Age",
          children: [
            {
              title: "Big Kids",
              link: "/",
            },
            {
              title: "Little kids",
              link: "/",
            },
            {
              title: "Baby & Toddler",
              link: "/",
            },
          ],
        },
        {
          title: "Shoes",
          children: [
            {
              title: "Big Kids (1Y - 7Y)",
              link: "/",
            },
            {
              title: "Little Kids (8C - 3Y)",
              link: "/",
            },
            {
              title: "Baby & Toddler (1C - 10C)",
              link: "/",
            },
            {
              title: "Lifestyle",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
            {
              title: "Dunk",
              link: "/",
            },
            {
              title: "Retro Running",
              link: "/",
            },
            {
              title: "Air Max",
              link: "/",
            },
            {
              title: "Air Force 1",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Nike SB",
              link: "/",
            },
            {
              title: "Sandals & Sliders",
              link: "/",
            },
          ],
        },
        {
          title: "Clothing",
          children: [
            {
              title: "Big Kids (XS - XL)",
              link: "/",
            },
            {
              title: "Little Kids (4 - 7)",
              link: "/",
            },
            {
              title: "Baby & Toddler (0M - 4T)",
              link: "/",
            },
            {
              title: "Extended Sizing",
              link: "/",
            },
            {
              title: "Hoodies & Sweatshirts",
              link: "/",
            },
            {
              title: "Shorts",
              link: "/",
            },
            {
              title: "Pants & Vests",
              link: "/",
            },
            {
              title: "Jackets & Vests",
              link: "/",
            },
            {
              title: "Tops & T-Shirts",
              link: "/",
            },
            {
              title: "Skirts & Dresses",
              link: "/",
            },
            {
              title: "Bras",
              link: "/",
            },
            {
              title: "Matching Sets",
              link: "/",
            },
            {
              title: "Jordan",
              link: "/",
            },
          ],
        },
        {
          title: "Accessories",
          children: [
            {
              title: "All Accessories",
              link: "/",
            },
            {
              title: "Bags & Backpacks",
              link: "/",
            },
            {
              title: "Hats & Headwear",
              link: "/",
            },
            {
              title: "Sunglasses",
              link: "/",
            },
            {
              title: "Socks",
              link: "/",
            },
          ],
        },
        {
          title: "Shop by Sport",
          children: [
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Running",
              link: "/",
            },
            {
              title: "Golf",
              link: "/",
            },
            {
              title: "Soccer",
              link: "/",
            },
            {
              title: "Baseball",
              link: "/",
            },
            {
              title: "Football",
              link: "/",
            },
            {
              title: "Softball",
              link: "/",
            },
            {
              title: "Tennis",
              link: "/",
            },
            {
              title: "Dance",
              link: "/",
            },
            {
              title: "Swimming",
              link: "/",
            },
            {
              title: "Fan Gear",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "Jordan",
      children: [
        {
          title: "New Arrivals",
          link: "/",
        },
        {
          title: "Featured",
          children: [
            {
              title: "Best Sellers",
              link: "/",
            },
            {
              title: "All Sale",
              link: "/",
            },
            {
              title: "Get Set for School",
              link: "/",
            },
            {
              title: "Jordan Heat Check",
              link: "/",
            },
            {
              title: "Trending Colors",
              link: "/",
            },
            {
              title: "Golf Essentials",
              link: "/",
            },
            {
              title: "Fuel Up Cool Down",
              link: "/",
            },
          ],
        },
        {
          title: "Men",
          children: [
            {
              title: "Shop All",
              link: "/",
            },
            {
              title: "Shoes",
              link: "/",
            },
            {
              title: "AJ1",
              link: "/",
            },
            {
              title: "Clothing",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
          ],
        },
        {
          title: "Women",
          children: [
            {
              title: "Shop All",
              link: "/",
            },
            {
              title: "Shoes",
              link: "/",
            },
            {
              title: "AJ1",
              link: "/",
            },
            {
              title: "Clothing",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
          ],
        },
        {
          title: "Kids",
          children: [
            {
              title: "Shop All",
              link: "/",
            },
            {
              title: "Shoes",
              link: "/",
            },
            {
              title: "AJ1",
              link: "/",
            },
            {
              title: "Clothing",
              link: "/",
            },
            {
              title: "Basketball",
              link: "/",
            },
            {
              title: "Big Kids",
              link: "/",
            },
            {
              title: "Little Kids",
              link: "/",
            },
          ],
        },
        {
          title: "Accessories",
          children: [
            {
              title: "Shop All",
              link: "/",
            },
            {
              title: "Bags & Packpacks",
              link: "/",
            },
            {
              title: "Hats & Headwear",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "Sale",
      children: [
        {
          title: "Extra 25% Off Fall Styles",
          link: "/",
        },
        {
          title: "All Sale",
          link: "/",
        },
        {
          title: "Sale Shoes",
          link: "/",
        },
        {
          title: "Sale Clothing",
          link: "/",
        },
        {
          title: "Sale Accessories & Equipment",
          link: "/",
        },
        {
          title: "Sale Mens",
          link: "/",
        },
        {
          title: "Sale Womens",
          link: "/",
        },
        {
          title: "Sale Kids",
          link: "/",
        },
      ],
    },
  ];

  return { menuData, currentPage, brandMenuData, serviceMenuData };
});

export default useMenuStore;
