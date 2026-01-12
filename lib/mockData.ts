export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Kafe-Barako' | 'Cold-Brew' | 'Non-Coffee' | 'Snacks' | 'Classic Coffee' | 'Signature Coffee' | 'Refresher and Cooler' | 'Hot Coffee' | 'Cold Brew' | 'Food' | 'Coffee' | 'Beverages' | 'Desserts' | 'Non Coffee' | 'Rice Meals and Pasta' | 'Pastries and Snacks';
    image: string;
    isNew?: boolean;
    isBestseller?: boolean;
};

export type PackageItem = {
    id: string;
    name: string;
    pax?: string;
    description?: string;
    inclusions?: string[];
    price: number | string;
    type: string;
    image?: string;
    isPopular?: boolean;
    note?: string;
};

export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
    category: string;
};

export const MALOLOS_MENU: MenuItem[] = [
    // Kafe-Barako
    {
        id: 'k1',
        name: 'Kafe Barako - Pouch',
        description: 'Strong and bold Batangas coffee in a pouch',
        price: 350,
        category: 'Kafe-Barako',
        image: '/menu/Pouch.JPG',
        isBestseller: true,
    },

    // Cold-Brew
    {
        id: 'c1',
        name: 'Hazelnut',
        description: 'Smooth cold brew with hazelnut flavor',
        price: 140,
        category: 'Cold-Brew',
        image: '/menu/Hazelnut.JPG',
    },
    {
        id: 'c2',
        name: 'Macadamia',
        description: 'Cold brew with macadamia nut flavor',
        price: 150,
        category: 'Cold-Brew',
        image: '/menu/Macadamia.JPG',
        isBestseller: true,
    },
    {
        id: 'c3',
        name: 'Mocha',
        description: 'Rich chocolate and coffee blend',
        price: 140,
        category: 'Cold-Brew',
        image: '/menu/Mocha.JPG',
    },
    {
        id: 'c4',
        name: 'Salted Caramel',
        description: 'Cold brew with salted caramel sweetness',
        price: 150,
        category: 'Cold-Brew',
        image: '/menu/Salted.JPG',
        isBestseller: true,
    },
    {
        id: 'c5',
        name: 'Sea Salt Latte',
        description: 'Smooth latte with a hint of sea salt',
        price: 150,
        category: 'Cold-Brew',
        image: '/menu/Sea Salt.JPG',
        isBestseller: true,
    },
    {
        id: 'c6',
        name: 'Spanish Latte',
        description: 'Espresso with condensed milk over ice',
        price: 120,
        category: 'Cold-Brew',
        image: '/menu/Spanish Latte.JPG',
        isBestseller: true,
    },
    {
        id: 'c7',
        name: 'Tiramisu',
        description: 'Coffee with tiramisu-inspired flavors',
        price: 160,
        category: 'Cold-Brew',
        image: '/menu/Tiramisu.JPG',
        isNew: true,
    },

    // Non-Coffee
    {
        id: 'n1',
        name: 'Belgian Choco',
        description: 'Rich Belgian chocolate drink',
        price: 140,
        category: 'Non-Coffee',
        image: '/menu/BelgianChoco.JPG',
        isBestseller: true,
    },
    {
        id: 'n2',
        name: 'Matcha',
        description: 'Premium Japanese green tea',
        price: 130,
        category: 'Non-Coffee',
        image: '/menu/Matcha.JPG',
        isBestseller: true,
    },
    {
        id: 'n3',
        name: 'Strawberry Matcha',
        description: 'Matcha with strawberry flavor',
        price: 150,
        category: 'Non-Coffee',
        image: '/menu/SB_Match.JPG',
        isNew: true,
    },
    {
        id: 'n4',
        name: 'Peach Black Ice Tea',
        description: 'Refreshing peach flavored black tea',
        price: 120,
        category: 'Non-Coffee',
        image: '/menu/Peach Black Iced Tea.JPG',
    },
    {
        id: 'n5',
        name: 'Hibiscus Berry',
        description: 'Refreshing floral hibiscus and berry tea',
        price: 120,
        category: 'Non-Coffee',
        image: '/menu/NonCoffee_Hibiscus_Berry.JPG',
        isNew: true,
    },
    {
        id: 'n6',
        name: 'Pistachio',
        description: 'Creamy pistachio flavored drink',
        price: 150,
        category: 'Non-Coffee',
        image: '/menu/Pistachio.JPG',
        isNew: true,
    },
    {
        id: 'n7',
        name: 'Strawberry Milk',
        description: 'Sweet and creamy strawberry milk',
        price: 130,
        category: 'Non-Coffee',
        image: '/menu/StrawberryMilk.JPG',
        isNew: true,
    },
    {
        id: 'n8',
        name: 'Ube',
        description: 'Filipino purple yam drink',
        price: 140,
        category: 'Non-Coffee',
        image: '/menu/Ube.JPG',
        isNew: true,
    },
    {
        id: 'n9',
        name: 'Vanilla Earl Grey',
        description: 'Earl grey tea with vanilla',
        price: 130,
        category: 'Non-Coffee',
        image: '/menu/VanillaEarlGrey.JPG',
        isNew: true,
    },

    // Snacks
    {
        id: 's1',
        name: 'Burger',
        description: 'Classic beef burger',
        price: 150,
        category: 'Snacks',
        image: '/menu/Burger.JPG',
    },
    {
        id: 's2',
        name: 'Double Burger',
        description: 'Double beef patty burger',
        price: 180,
        category: 'Snacks',
        image: '/menu/DoubleBurger.JPG',
        isBestseller: true,
    },
    {
        id: 's3',
        name: 'Fries',
        description: 'Crispy golden fries',
        price: 100,
        category: 'Snacks',
        image: '/menu/Fries.JPG',
    },
    {
        id: 's4',
        name: 'Quesadilla',
        description: 'Cheesy quesadilla',
        price: 150,
        category: 'Snacks',
        image: '/menu/Quesadilla.JPG',
    },
];

export const TALISAY_MENU: MenuItem[] = [
    // Classic Coffee
    {
        id: 'tc1',
        name: 'Kafe Barako',
        description: 'Authentic Kapeng Barako',
        price: 80,
        category: 'Classic Coffee',
        image: '/menu/Pouch.JPG',
        isBestseller: true,
    },
    {
        id: 'tc2',
        name: 'Espresso',
        description: 'Rich and intense shot of coffee',
        price: 90,
        category: 'Classic Coffee',
        image: '/menu/Spanish Latte.JPG',
    },
    {
        id: 'tc3',
        name: 'Americano',
        description: 'Espresso diluted with hot water',
        price: 100,
        category: 'Classic Coffee',
        image: '/menu/Pouch.JPG',
    },
    {
        id: 'tc4',
        name: 'Latte',
        description: 'Espresso with steamed milk',
        price: 120,
        category: 'Classic Coffee',
        image: '/menu/Spanish Latte.JPG',
    },
    {
        id: 'tc5',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: 120,
        category: 'Classic Coffee',
        image: '/menu/Spanish Latte.JPG',
    },
    {
        id: 'tc6',
        name: 'Mocha',
        description: 'Espresso with chocolate and milk',
        price: 130,
        category: 'Classic Coffee',
        image: '/menu/Mocha.JPG',
    },
    {
        id: 'tc7',
        name: 'Flat White',
        description: 'Espresso with microfoam',
        price: 120,
        category: 'Classic Coffee',
        image: '/menu/Spanish Latte.JPG',
    },

    // Signature Coffee
    {
        id: 'ts1',
        name: 'Spanish Latte',
        description: 'Sweet and creamy espresso based drink',
        price: 140,
        category: 'Signature Coffee',
        image: '/menu/Spanish Latte.JPG',
        isBestseller: true,
    },
    {
        id: 'ts2',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla and caramel drizzle',
        price: 150,
        category: 'Signature Coffee',
        image: '/menu/Macadamia.JPG',
    },
    {
        id: 'ts3',
        name: 'Sea Salt Latte',
        description: 'Latte with a hint of sea salt',
        price: 150,
        category: 'Signature Coffee',
        image: '/menu/Sea Salt.JPG',
        isNew: true,
    },
    {
        id: 'ts4',
        name: 'Biscoff Latte',
        description: 'Latte with Biscoff spread',
        price: 160,
        category: 'Signature Coffee',
        image: '/menu/Hazelnut.JPG',
    },
    {
        id: 'ts5',
        name: 'Salted Caramel Latte',
        description: 'Latte with salted caramel',
        price: 150,
        category: 'Signature Coffee',
        image: '/menu/Salted.JPG',
    },
    {
        id: 'ts6',
        name: 'Honey Oat Latte',
        description: 'Oat milk latte with honey',
        price: 160,
        category: 'Signature Coffee',
        image: '/menu/Pistachio.JPG',
    },

    // Non Coffee
    {
        id: 'tn1',
        name: 'Belgian Chocolate',
        description: 'Rich Belgian chocolate drink',
        price: 140,
        category: 'Non Coffee',
        image: '/menu/BelgianChoco.JPG',
    },
    {
        id: 'tn2',
        name: 'Matcha Latte',
        description: 'Premium creamy matcha',
        price: 140,
        category: 'Non Coffee',
        image: '/menu/Matcha.JPG',
    },
    {
        id: 'tn3',
        name: 'Strawberry Latte',
        description: 'Creamy strawberry drink',
        price: 140,
        category: 'Non Coffee',
        image: '/menu/StrawberryMilk.JPG',
    },
    {
        id: 'tn4',
        name: 'Matcha & Strawberry',
        description: 'Matcha layered with strawberry',
        price: 160,
        category: 'Non Coffee',
        image: '/menu/SB_Match.JPG',
        isNew: true,
    },

    // Refresher and Cooler (Merged)
    {
        id: 'tr1',
        name: 'Hibiscus Berry Ice Tea',
        description: 'Refreshing hibiscus and berry tea',
        price: 120,
        category: 'Refresher and Cooler',
        image: '/menu/NonCoffee_Hibiscus_Berry.JPG',
    },
    {
        id: 'tr2',
        name: 'Ice Vanilla Earl Grey Tea',
        description: 'Earl grey tea with vanilla over ice',
        price: 120,
        category: 'Refresher and Cooler',
        image: '/menu/VanillaEarlGrey.JPG',
    },
    {
        id: 'tr3',
        name: 'Peach Black Ice Tea',
        description: 'Black tea with peach flavor',
        price: 120,
        category: 'Refresher and Cooler',
        image: '/menu/Peach Black Iced Tea.JPG',
    },
    {
        id: 'tr4',
        name: 'Honey Lemon Green Ice Tea',
        description: 'Green tea with honey and lemon',
        price: 120,
        category: 'Refresher and Cooler',
        image: '/menu/NonCoffee_Hibiscus_Berry.JPG',
    },
    {
        id: 'tco1',
        name: 'Espresso and Cream',
        description: 'Blended espresso and cream',
        price: 150,
        category: 'Refresher and Cooler',
        image: '/menu/Tiramisu.JPG',
    },
    {
        id: 'tco2',
        name: 'Mocha Indulge',
        description: 'Blended mocha frappe',
        price: 160,
        category: 'Refresher and Cooler',
        image: '/menu/Mocha.JPG',
    },
    {
        id: 'tco3',
        name: 'Caramel Crunch',
        description: 'Caramel blended drink with crunch',
        price: 160,
        category: 'Refresher and Cooler',
        image: '/menu/Hazelnut.JPG',
    },
    {
        id: 'tco4',
        name: 'Biscoffee',
        description: 'Biscoff flavored blended coffee',
        price: 170,
        category: 'Refresher and Cooler',
        image: '/menu/Macadamia.JPG',
    },

    // Rice Meals and Pasta
    {
        id: 'tm1',
        name: 'Bacon Alfredo',
        description: 'Creamy pasta with crispy bacon',
        price: 180,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/bacon-alfredo.jpg',
    },
    {
        id: 'tm2',
        name: 'Beef Bolognese',
        description: 'Classic tomato-based meat sauce',
        price: 180,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/beef-bologne.jpg',
    },
    {
        id: 'tm3',
        name: 'Beef Lasagna',
        description: 'Layers of pasta, meat, and cheese',
        price: 200,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/beef-lasagna.jpg',
    },
    {
        id: 'tm4',
        name: 'Pork Belly Kare Kare',
        description: 'Crispy pork with peanut sauce and vegetables',
        price: 220,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/pork-belly-kare-kare.jpg',
    },
    {
        id: 'tm5',
        name: 'Beef Gyudon',
        description: 'Savory beef rice bowl',
        price: 190,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/beef-gyudon.jpg',
    },
    {
        id: 'tm6',
        name: 'Oyakodon',
        description: 'Chicken and egg rice bowl',
        price: 180,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/oyakodon.jpg',
    },
    {
        id: 'tm7',
        name: 'Braised Pork Slices',
        description: 'Tender braised pork with rice',
        price: 190,
        category: 'Rice Meals and Pasta',
        image: '/talisay-menu/braise-pork-slice.jpg',
    },

    // Pastries and Snacks
    {
        id: 'tp1',
        name: 'Chocolate Chip Cookies',
        description: 'Classic chewy chocolate chip',
        price: 60,
        category: 'Pastries and Snacks',
        image: '/talisay-menu/chocolate-chip-cookies.jpg',
    },
    {
        id: 'tp2',
        name: 'Red Velvet Cookies',
        description: 'Soft red velvet cookies',
        price: 65,
        category: 'Pastries and Snacks',
        image: '/talisay-menu/red-velvet-cookies.jpg',
    },
    {
        id: 'tp3',
        name: 'Double Chocolate Chip',
        description: 'Rich dark chocolate cookie',
        price: 65,
        category: 'Pastries and Snacks',
        image: '/talisay-menu/double-chocolate-cookies.jpg',
    },
    {
        id: 'tp4',
        name: 'Banana Choco Muffins',
        description: 'Moist banana muffin with chocolate',
        price: 70,
        category: 'Pastries and Snacks',
        image: '/talisay-menu/banana-chocolate-muffins.jpg',
    },
    {
        id: 'tp5',
        name: 'Loaded Beef Nachos',
        description: 'Crispy chips with beef and cheese',
        price: 180,
        category: 'Pastries and Snacks',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'tp6',
        name: 'Smothered Fries',
        description: 'Fries topped with savory sauce',
        price: 150,
        category: 'Pastries and Snacks',
        image: '/menu/Fries.JPG',
    },
    {
        id: 'tp7',
        name: 'Beef Quesadillas',
        description: 'Cheesy beef filling in tortilla',
        price: 160,
        category: 'Pastries and Snacks',
        image: '/menu/Quesadilla.JPG',
    },
    {
        id: 'tp8',
        name: 'Cheese Burger',
        description: 'Classic beef burger with cheese',
        price: 150,
        category: 'Pastries and Snacks',
        image: '/menu/Burger.JPG',
    },
    {
        id: 'tp9',
        name: 'BBQ Spicy Burger',
        description: 'Spicy bbq burger with cheese',
        price: 170,
        category: 'Pastries and Snacks',
        image: '/menu/DoubleBurger.JPG',
    },
    {
        id: 'tp10',
        name: 'NY Hotdog Sandwich',
        description: 'Classic New York style hotdog',
        price: 140,
        category: 'Pastries and Snacks',
        image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80',
    },
];

// Common Coffee Bar Packages
const COFFEE_BAR_PACKAGES: PackageItem[] = [
    {
        id: 'cb1',
        name: 'Cozy Gathering',
        pax: '50pax',
        description: 'Hot Kapeng Barako or Cold Brew drinks',
        note: 'Choice of 2 flavors',
        price: 5750,
        type: 'Coffee Bar',
        image: '/menu/Pouch.JPG',
        inclusions: [
            'Hot Kapeng Barako',
            'Cold Brew Drinks',
            'Professional Barista',
            'Coffee Bar Setup',

        ]
    },
    {
        id: 'cb2',
        name: 'Elegant Roast',
        pax: '100pax',
        description: 'Hot Kapeng Barako or Cold Brew drinks',
        note: 'Choice of 3 flavors',
        price: 11000,
        type: 'Coffee Bar',
        isPopular: true,
        image: '/menu/Pouch.JPG',
        inclusions: [
            'Hot Kapeng Barako',
            'Cold Brew Drinks',
            'Professional Barista',
            'Coffee Bar Setup',

        ]
    },
    {
        id: 'cb3',
        name: 'Prestige Blend',
        pax: '150pax',
        description: 'Hot Kapeng Barako or Cold Brew drinks',
        note: 'Choice of 3 flavors',
        price: 15500,
        type: 'Coffee Bar',
        image: '/menu/Pouch.JPG',
        inclusions: [
            'Hot Kapeng Barako',
            'Cold Brew Drinks',
            'Professional Barista',
            'Coffee Bar Setup',

        ]
    }
];

export const MALOLOS_PACKAGES: PackageItem[] = [
    ...COFFEE_BAR_PACKAGES
];

export const TALISAY_PACKAGES: PackageItem[] = [
    ...COFFEE_BAR_PACKAGES,
    // Grazing Table
    {
        id: 'gt1',
        name: 'Intimate Indulgence',
        pax: '50pax',
        description: 'Deliciously Handmade, Crafted For Celebrations',
        price: 5750,
        type: 'Grazing Table',
        image: '/talisay-events/4.jpg',
        inclusions: [
            '2 types of sweets',
            '3 types of meat',
            '3 types of cheese',
            'Canape',
            'Seasonal Fruits',
            'Crackers, Pretzels, and Chips'
        ]
    },
    {
        id: 'gt2',
        name: 'Gourmet Feast',
        pax: '100pax',
        description: 'Deliciously Handmade, Crafted For Celebrations',
        price: 11000,
        type: 'Grazing Table',
        isPopular: true,
        image: '/talisay-events/4.jpg',
        inclusions: [
            '2 types of sweets',
            '3 types of meat',
            '3 types of cheese',
            'Canape',
            'Seasonal Fruits',
            'Crackers, Pretzels, and Chips'
        ]
    },
    {
        id: 'gt3',
        name: 'Grand Spread',
        pax: '150pax',
        description: 'Deliciously Handmade, Crafted For Celebrations',
        price: 15500,
        type: 'Grazing Table',
        image: '/talisay-events/4.jpg',
        inclusions: [
            '2 types of sweets',
            '3 types of meat',
            '3 types of cheese',
            'Canape',
            'Seasonal Fruits',
            'Crackers, Pretzels, and Chips'
        ]
    },
    // Kakanin Corner
    {
        id: 'kc1',
        name: 'Package A',
        pax: '50 pax',
        description: 'Traditional Filipino Delicacies',
        price: 8500,
        type: 'Kakanin Corner',
        image: '/talisay-menu/kakanin.jpg',
        inclusions: [
            '2 types of puto', 'Biko', 'Sapin-sapin', 'Kutsinta', 'Patiktik (kalamay ube)', 'Palitaw', 'Kapeng Barako'
        ]
    },
    {
        id: 'kc2',
        name: 'Package B',
        pax: '70 pax',
        description: 'Traditional Filipino Delicacies',
        price: 11500,
        type: 'Kakanin Corner',
        image: '/talisay-menu/kakanin.jpg',
        inclusions: [
            '2 types of puto', 'Biko', 'Sapin-sapin', 'Kutsinta', 'Patiktik (kalamay ube)', 'Palitaw', 'Kapeng Barako'
        ]
    },
    {
        id: 'kc3',
        name: 'Package C',
        pax: '100 pax',
        description: 'Traditional Filipino Delicacies',
        price: 13500,
        type: 'Kakanin Corner',
        image: '/talisay-menu/kakanin.jpg',
        inclusions: [
            '2 types of puto', 'Biko', 'Sapin-sapin', 'Kutsinta', 'Patiktik (kalamay ube)', 'Palitaw', 'Kapeng Barako'
        ]
    },
    // Dessert Table
    {
        id: 'dt1',
        name: 'INTIMATE',
        pax: '50PAX',
        description: 'Sweet treats for your guests',
        price: 7000,
        type: 'Dessert Table',
        image: '/talisay-menu/chocolate-chip-cookies.jpg',
        inclusions: [
            'Chocolate chip cookies',
            'Caramel bars',
            'Dark Chocolate brownies',
            'Mini muffins',
            'Basque burnt cheesecups',
            'Cheesecake shooters'
        ]
    },
    {
        id: 'dt2',
        name: 'PREMIUM',
        pax: '70PAX',
        description: 'Sweet treats for your guests',
        price: 9000,
        type: 'Dessert Table',
        image: '/talisay-menu/chocolate-chip-cookies.jpg',
        inclusions: [
            'Chocolate chip cookies',
            'Caramel bars',
            'Dark Chocolate brownies',
            'Mini muffins',
            'Basque burnt cheesecups',
            'Cheesecake shooters',
            '1 6inches basque burnt cheesecake'
        ]
    },
    {
        id: 'dt3',
        name: 'GRAND',
        pax: '100PAX',
        description: 'Sweet treats for your guests',
        price: 11000,
        type: 'Dessert Table',
        image: '/talisay-menu/chocolate-chip-cookies.jpg',
        inclusions: [
            'Chocolate chip cookies',
            'Caramel bars',
            'Dark Chocolate brownies',
            'Mini muffins',
            'Basque burnt cheesecups',
            'Cheesecake shooters',
            '2 6inches basque burnt cheesecake'
        ]
    },
    // Sliders Station
    {
        id: 'ss1',
        name: 'Package A',
        pax: '50 pax',
        description: 'Mini bite-sized delights',
        price: 8500,
        type: 'Sliders Station',
        image: '/menu/Burger.JPG',
        inclusions: [
            '2 types of sweets',
            'Mini Beef Sliders',
            'Mini Hotdog buns',
            'Nacho Chips',
            '3 kinds of dips for Nachos (beef/salsa/cheesesauce)',
            'Mini clubhouse sandwich'
        ]
    },
    {
        id: 'ss2',
        name: 'Package B',
        pax: '70 pax',
        description: 'Mini bite-sized delights',
        price: 11500,
        type: 'Sliders Station',
        image: '/menu/Burger.JPG',
        inclusions: [
            '2 types of sweets',
            'Mini Beef Sliders',
            'Mini Hotdog buns',
            'Nacho Chips',
            '3 kinds of dips for Nachos (beef/salsa/cheesesauce)',
            'Mini clubhouse sandwich'
        ]
    },
    {
        id: 'ss3',
        name: 'Package C',
        pax: '100 pax',
        description: 'Mini bite-sized delights',
        price: 13500,
        type: 'Sliders Station',
        image: '/menu/Burger.JPG',
        inclusions: [
            '2 types of sweets',
            'Mini Beef Sliders',
            'Mini Hotdog buns',
            'Nacho Chips',
            '3 kinds of dips for Nachos (beef/salsa/cheesesauce)',
            'Mini clubhouse sandwich'
        ]
    }
];

export const GALLERY_IMAGES: GalleryItem[] = [
    // Operations
    {
        id: 'op1',
        src: '/operations/1.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op2',
        src: '/operations/2.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op3',
        src: '/operations/3.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op4',
        src: '/operations/4.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op5',
        src: '/operations/5.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op6',
        src: '/operations/6.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op7',
        src: '/operations/7.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },
    {
        id: 'op8',
        src: '/operations/8.jpg',
        alt: 'Kafe Barako Operations',
        category: 'Operations',
    },

    // Events
    {
        id: 'ev0',
        src: '/events/0.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev1',
        src: '/events/1.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev2',
        src: '/events/2.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev3',
        src: '/events/3.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev4',
        src: '/events/4.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev5',
        src: '/events/5.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev6',
        src: '/events/6.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev7',
        src: '/events/7.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev8',
        src: '/events/8.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev9',
        src: '/events/9.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev10',
        src: '/events/10.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev11',
        src: '/events/11.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev12',
        src: '/events/12.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
    {
        id: 'ev13',
        src: '/events/13.jpg',
        alt: 'Kafe Barako Event',
        category: 'Events',
    },
];

export type Testimonial = {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
    image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Lemuel Bautista Ralotin',
        rating: 5,
        comment: 'Definitely recommend Kafe Barako Malolos Branch! Sobrang wala ka masabi sa staff 100/100. And yung mga drinks sobrang sarap! And the setup ng booth nila sobrang ganda and ayos. Overall sobrang okay sya 💯Thank you sa Kafe Barako Malolos Branch especially kay sir James 😇. Sa mga future Events surely uulit kami dito! ☺️💝 Lemuel & Chantal 💝',
        date: '2024-01-20',
        image: '/images/icon.jpg',
    },
    {
        id: 't2',
        name: 'Julie Ann Bio Zapatero',
        rating: 5,
        comment: 'must try yung hazelnut and salted caramel nila, Sulit and masarap din yung mga homemade breads nila 🙂super friendly and accomdating ng mga may ari🙂, if you are a morning person you can visit them every weekend sa Malolos convention ❤',
        date: '2022-11-06',
        image: '/images/icon.jpg',
    },
    {
        id: 't3',
        name: 'Aljay Henry Caluag',
        rating: 5,
        comment: 'One of the best place to hang out when you are a morning person, good coffee and friendly baristas ♥️♥️ would certainly recommend this to my friends ☺️ Best coffee · Best iced coffee',
        date: '2022-09-20',
        image: '/images/icon.jpg',
    },
    {
        id: 't4',
        name: 'Ivan Macapagal',
        rating: 5,
        comment: 'Macademia cold brew! Certainly a must try! Best variety ng kape barako na natikman ko so far. Meron din silang iba\'t ibang timpla ng barako na hahanap hanapin base sa panlasa mo. Also, very accommodating ung owners sa mga preferences ng customer nila. Keep it up Ms. Apple and Sir James! Kudos and God bless! Waiting for more tea selections! 😊 Convenient location · Delicious pastries · Best coffee · Expert baristas · Relaxing atmosphere · Popular with locals · Strong cold brew',
        date: '2022-09-20',
        image: '/images/icon.jpg',
    },
    {
        id: 't5',
        name: 'Jardine Jimenez',
        rating: 5,
        comment: 'Kape Barako Malolos Branch is my favorite place to hang. The barista was so friendly and pleasant to talk with. One thing that I got fascinated by this place. They had the most affordable and delicious coffee.',
        date: '2022-09-20',
        image: '/images/icon.jpg',
    },
    {
        id: 't6',
        name: 'Reimond Mark Avendaño',
        rating: 5,
        comment: 'Hot and cold brew @ its best. Best coffee · Good for working · Cheap eats · Great breakfast · Strong cold brew · Expert baristas · Popular with locals · Relaxing atmosphere · Fresh smoothies · Best iced coffee · Convenient location',
        date: '2022-09-19',
        image: '/images/icon.jpg',
    },
];

export const TALISAY_TESTIMONIALS: Testimonial[] = [
    {
        id: 'tt1',
        name: 'Reysa Isabel Alabado',
        rating: 5,
        comment: 'highly recommended coffee bar supplier! Thank you so much for being part of our special day! 🩷🌸',
        date: '2025-04-23',
        image: '/images/icon.jpg',
    },
    {
        id: 'tt2',
        name: 'Camille Maaba-Dimaculangan',
        rating: 5,
        comment: "Highly recommended if you're looking for a coffee bar! So lucky to have found them few days before my daughter's birthday celebration and they didn't disappoint! Well done! 👏🏼👏🏼👏🏼 Everything was perfect from inquiries, transaction, layout approval, and on-the-day coffee bar! Their kapeng barako tastes superb and all the guests liked it! The owners were very accomodating and considerate. 5+ star rating wouldn't be enough! ❤️",
        date: '2024-02-25',
        image: '/images/icon.jpg',
    },
    {
        id: 'tt3',
        name: 'Jerwin photography',
        rating: 5,
        comment: 'magandang view ng taal at masarap na kape maraming Riders na humihinto para mag milk tea or kape at sympre magandang spot natin to sa pamimitik sa mga dumadaan na riders at bikers 👍',
        date: '2023-09-17',
        image: '/images/icon.jpg',
    },
    {
        id: 'tt4',
        name: 'AkoSi Beat',
        rating: 5,
        comment: 'Maaliwalas na tanawin. Masarap na Kape',
        date: '2023-03-28',
        image: '/images/icon.jpg',
    },
    {
        id: 'tt5',
        name: 'JDP',
        rating: 5,
        comment: 'apaka solid nang kahit anong kape dito',
        date: '2023-02-11',
        image: '/images/icon.jpg',
    },
    {
        id: 'tt6',
        name: 'Gerard Moto Vlog',
        rating: 5,
        comment: 'nice scenery, ambiance and ofcourse Coffee... babalik balikan mo',
        date: '2022-08-02',
        image: '/images/icon.jpg',
    },
];

export const TALISAY_GALLERY_IMAGES: GalleryItem[] = [
    // Operations
    { id: 'top1', src: '/talisay-operations/1.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top2', src: '/talisay-operations/2.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top3', src: '/talisay-operations/3.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top4', src: '/talisay-operations/4.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top5', src: '/talisay-operations/5.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top6', src: '/talisay-operations/6.jpg', alt: 'Talisay Operations', category: 'Operations' },
    { id: 'top7', src: '/talisay-operations/7.jpg', alt: 'Talisay Operations', category: 'Operations' },

    // Events
    { id: 'tev1', src: '/talisay-events/1.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev2', src: '/talisay-events/2.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev3', src: '/talisay-events/3.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev4', src: '/talisay-events/4.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev5', src: '/talisay-events/5.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev6', src: '/talisay-events/6.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev7', src: '/talisay-events/7.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev8', src: '/talisay-events/8.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev9', src: '/talisay-events/9.jpg', alt: 'Talisay Event', category: 'Events' },
    { id: 'tev10', src: '/talisay-events/10.jpg', alt: 'Talisay Event', category: 'Events' },
];
