export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Hot Coffee' | 'Cold Brew' | 'Non-Coffee' | 'Food' | 'Coffee' | 'Beverages' | 'Desserts';
    image: string;
    isNew?: boolean;
    isBestseller?: boolean;
};

export type PackageItem = {
    id: string;
    name: string;
    pax?: string;
    description: string;
    inclusions?: string[];
    price?: number;
    type: 'Coffee Bar' | 'Event';
};

export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
    category: string;
};

export const MALOLOS_MENU: MenuItem[] = [
    // Hot Coffee
    {
        id: 'm1',
        name: 'Kafe Barako',
        description: 'Strong and bold Batangas coffee',
        price: 80,
        category: 'Hot Coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        isBestseller: true,
    },
    {
        id: 'm2',
        name: 'Hazelnut Latte',
        description: 'Espresso with hazelnut syrup',
        price: 130,
        category: 'Hot Coffee',
        image: 'https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&w=800&q=80',
    },

    // Cold Brew
    {
        id: 'm3',
        name: 'Hazelnut',
        description: 'Smooth cold brew with hazelnut flavor',
        price: 140,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm4',
        name: 'Spanish Latte',
        description: 'Espresso with condensed milk over ice',
        price: 120,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
        isBestseller: true,
    },
    {
        id: 'm5',
        name: 'Salted Caramel',
        description: 'Cold brew with salted caramel sweetness',
        price: 150,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80',
        isBestseller: true,
    },
    {
        id: 'm6',
        name: 'Mocha',
        description: 'Rich chocolate and coffee blend',
        price: 140,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm7',
        name: 'Macademia',
        description: 'Cold brew with macadamia nut flavor',
        price: 150,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm8',
        name: 'Tiramisu',
        description: 'Coffee with tiramisu-inspired flavors',
        price: 160,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },
    {
        id: 'm9',
        name: 'Sea Salt Latte',
        description: 'Smooth latte with a hint of sea salt',
        price: 150,
        category: 'Cold Brew',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },

    // Non-Coffee
    {
        id: 'm10',
        name: 'Matcha',
        description: 'Premium Japanese green tea',
        price: 130,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80',
        isBestseller: true,
    },
    {
        id: 'm11',
        name: 'Matcha Berry',
        description: 'Matcha with mixed berries',
        price: 150,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },
    {
        id: 'm12',
        name: 'Belgian Ice Chocolate',
        description: 'Rich Belgian chocolate over ice',
        price: 140,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm13',
        name: 'Hibiscus Tea',
        description: 'Refreshing floral hibiscus tea',
        price: 110,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },
    {
        id: 'm14',
        name: 'Peach Perfect Tea',
        description: 'Sweet peach-flavored iced tea',
        price: 120,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm15',
        name: 'Ube Latte',
        description: 'Filipino purple yam latte',
        price: 140,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },
    {
        id: 'm16',
        name: 'Pistachio Latte',
        description: 'Creamy pistachio-flavored latte',
        price: 150,
        category: 'Non-Coffee',
        image: 'https://images.unsplash.com/photo-1599458448008-a40e2d4c8c70?auto=format&fit=crop&w=800&q=80',
    },

    // Food
    {
        id: 'm17',
        name: 'Double Cheesy Burger',
        description: 'Double patty with extra cheese',
        price: 180,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        isBestseller: true,
    },
    {
        id: 'm18',
        name: 'Barako Burger',
        description: 'Single burger with special Barako sauce',
        price: 150,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm19',
        name: 'Beef Quesadilla',
        description: 'Grilled tortilla with seasoned beef and cheese',
        price: 160,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm20',
        name: 'Cheese Quesadilla',
        description: 'Grilled tortilla with melted cheese',
        price: 140,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm21',
        name: 'Fries (Cheese/Bacon)',
        description: 'Crispy fries with cheese or bacon toppings',
        price: 100,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    },
];

export const TALISAY_MENU: MenuItem[] = [
    {
        id: 't1',
        name: 'Kapeng Barako',
        description: 'Strong and bold Batangas coffee',
        price: 80,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't2',
        name: 'Spanish Latte',
        description: 'Espresso with condensed milk',
        price: 120,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1570968992193-fdec48f42912?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't3',
        name: 'Lomi Batangas',
        description: 'Thick noodle soup with meat toppings',
        price: 120,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't4',
        name: 'Suman',
        description: 'Sticky rice cake wrapped in banana leaves',
        price: 50,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't5',
        name: 'Calamansi Juice',
        description: 'Freshly squeezed calamansi',
        price: 60,
        category: 'Beverages',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't6',
        name: 'Tsokolate Batirol',
        description: 'Traditional hot chocolate',
        price: 110,
        category: 'Beverages',
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
        isNew: true,
    },
    {
        id: 't7',
        name: 'Pandesal with Kesong Puti',
        description: 'Local bread with white cheese',
        price: 70,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't8',
        name: 'Bibingka',
        description: 'Rice cake with salted egg and cheese',
        price: 100,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1516919549054-e08258825f80?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't9',
        name: 'Iced Americano',
        description: 'Chilled espresso with water',
        price: 90,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c7fa69?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 't10',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla and caramel',
        price: 140,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80',
    },
];

export const PACKAGES: PackageItem[] = [
    {
        id: 'p1',
        name: 'Intimate',
        pax: '50pax',
        description: 'Perfect for small gatherings',
        inclusions: ['25 Hot Barako', '25 Cold Brew'],
        type: 'Coffee Bar',
    },
    {
        id: 'p2',
        name: 'Premium',
        pax: '75pax',
        description: 'Ideal for medium-sized events',
        inclusions: ['35 Hot Barako', '40 Cold Brew'],
        type: 'Coffee Bar',
    },
    {
        id: 'p3',
        name: 'Grand',
        pax: '100pax',
        description: 'For large celebrations',
        inclusions: ['50 Hot Barako', '50 Cold Brew'],
        type: 'Coffee Bar',
    },
    {
        id: 'p4',
        name: 'Customized',
        description: 'Tailored to your needs',
        inclusions: ['Hot Coffee', 'Cold Brew', 'Non-Coffee'],
        type: 'Coffee Bar',
    },
    {
        id: 'e1',
        name: 'Birthday Package',
        description: 'Celebrate your special day with us',
        price: 5000,
        type: 'Event',
    },
    {
        id: 'e2',
        name: 'Meeting Room',
        description: 'Private space for productivity',
        price: 2000,
        type: 'Event',
    },
    {
        id: 'e3',
        name: 'Wedding Package',
        description: 'Make your dream wedding come true',
        price: 25000,
        type: 'Event',
    },
];

export const GALLERY_IMAGES: GalleryItem[] = [
    {
        id: 'g1',
        src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        alt: 'Coffee Shop Interior',
        category: 'Operations',
    },
    {
        id: 'g2',
        src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        alt: 'Coffee Beans',
        category: 'Operations',
    },
    {
        id: 'g3',
        src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
        alt: 'Latte Art',
        category: 'Operations',
    },
    {
        id: 'g4',
        src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
        alt: 'Pastries',
        category: 'Operations',
    },
    {
        id: 'g5',
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        alt: 'Event Setup',
        category: 'Events',
    },
    {
        id: 'g6',
        src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
        alt: 'Barista at Event',
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
