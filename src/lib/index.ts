// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";
import Jeans from '$lib/photos/jeans/the flame warrior/hades1.png';
import j1 from '$lib/photos/jeans/the flame warrior/hades1.png';
import j2 from '$lib/photos/jeans/the flame warrior/img1.png';
import j3 from '$lib/photos/jeans/the flame warrior/img2.jpeg';
import j4 from '$lib/photos/jeans/the flame warrior/img3.jpeg';
import Jackets from '$lib/photos/jeans/madusa/jacket.jpeg';
import Accessories from '$lib/photos/jeans/warrier skull/accessoriess.jpeg';
export let productsInfo = writable([
    {
        name: 'Flame Warrior',
        title: 'Jeans',
        img: Jeans,
        align: 'object-bottom',
        price: '3500',
        brandName: 'RAS',
        productName: 'Flame Warrior',
        rating: 4.2,
        ratingCount: 56,
        priceOld: 6000,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        imgs: [
            j1, j2, j3, j4
        ],
    },
    {
        name: 'Madusa',
        title: 'Jackets',
        img: Jackets,
        align: 'object-top',
        price: '4500',
        brandName: 'RAS',
        productName: 'Madusa',
        rating: 4.2,
        ratingCount: 56,
        priceOld: 6000,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        imgs: [
            j1, j2, j3, j4
        ],
    },
    {
        name: 'Warrier Skull',
        title: 'Accessories',
        img: Accessories,
        align: 'object-top',
        price: '3500',
        brandName: 'RAS',
        productName: 'Warrier Skull',
        rating: 4.2,
        ratingCount: 56,
        priceOld: 5000,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        imgs: [
            j1, j2, j3, j4
        ],
    },
    {
        name: 'Madusa',
        title: 'Jackets',
        img: Jackets,
        align: 'object-top',
        price: '4500',
        brandName: 'RAS',
        productName: 'Madusa',
        rating: 4.2,
        ratingCount: 56,
        priceOld: 7000,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        imgs: [
            j1, j2, j3, j4
        ],
    }
]);