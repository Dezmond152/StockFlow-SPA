export const orders = [
  {
    id: 1,
    title: "Order 1",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: "Order 2",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: 3,
    title: "Order 3",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
];

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    title: "LG Monitor 2000",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2013-02-29 12:09:33",
      end: "2017-06-29 12:04:33",
    },
    price: [
      { value: 200, symbol: "USD" },
      { value: 7600, symbol: "UAH" },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 4231,
    isNew: 0,
    title: "NuPhy Air75 V2",
    type: "Keyboard",
    specification: "Specification 2",
    guarantee: {
      start: "2011-06-29 12:09:34",
      end: "2015-01-29 12:09:33",
    },
    price: [
      { value: 110, symbol: "USD", isDefault: 0 },
      { value: 5500, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
];
