-- Schema for Kape Barako Coffee Shop

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. user_admin
CREATE TABLE IF NOT EXISTS user_admin (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample admins
INSERT INTO user_admin (email, password_hash, full_name) VALUES
('admin@kapebarako.com', '$2a$10$X7.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1', 'Admin One'),
('manager@kapebarako.com', '$2a$10$X7.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1', 'Manager Two')
ON CONFLICT (email) DO NOTHING;

-- 2. customer
CREATE TABLE IF NOT EXISTS customer (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    loyalty_points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample customers
INSERT INTO customer (name, email, phone, loyalty_points) VALUES
('Juan Dela Cruz', 'juan@example.com', '09171234567', 150),
('Maria Clara', 'maria@example.com', '09181234567', 300),
('Jose Rizal', 'jose@example.com', '09191234567', 500),
('Andres Bonifacio', 'andres@example.com', '09201234567', 50),
('Gabriela Silang', 'gabriela@example.com', '09211234567', 1000),
('Emilio Aguinaldo', 'emilio@example.com', '09221234567', 0),
('Apolinario Mabini', 'apolinario@example.com', '09231234567', 200)
ON CONFLICT (email) DO NOTHING;

-- 3. menu
DO $$ BEGIN
    CREATE TYPE branch_enum AS ENUM ('malolos', 'talisay', 'both');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS menu (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch branch_enum NOT NULL,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    is_new BOOLEAN DEFAULT FALSE,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample menu items
INSERT INTO menu (branch, category, name, description, price, is_new, image_url) VALUES
('both', 'Coffee', 'Kapeng Barako', 'Strong and bold Batangas coffee', 80.00, false, '/assets/menu/barako.jpg'),
('both', 'Coffee', 'Spanish Latte', 'Espresso with condensed milk', 120.00, true, '/assets/menu/spanish_latte.jpg'),
('malolos', 'Food', 'Tapsilog', 'Cured beef with garlic rice and egg', 150.00, false, '/assets/menu/tapsilog.jpg'),
('talisay', 'Food', 'Lomi Batangas', 'Thick noodle soup with meat toppings', 120.00, false, '/assets/menu/lomi.jpg'),
('both', 'Desserts', 'Bibingka', 'Rice cake with salted egg and cheese', 100.00, false, '/assets/menu/bibingka.jpg'),
('both', 'Beverages', 'Calamansi Juice', 'Freshly squeezed calamansi', 60.00, false, '/assets/menu/calamansi.jpg'),
('both', 'Coffee', 'Iced Americano', 'Chilled espresso with water', 90.00, false, '/assets/menu/americano.jpg'),
('both', 'Coffee', 'Caramel Macchiato', 'Espresso with vanilla and caramel', 140.00, false, '/assets/menu/macchiato.jpg'),
('malolos', 'Desserts', 'Ensaymada', 'Sweet brioche with butter and cheese', 80.00, false, '/assets/menu/ensaymada.jpg'),
('talisay', 'Desserts', 'Suman', 'Sticky rice cake wrapped in banana leaves', 50.00, false, '/assets/menu/suman.jpg'),
('both', 'Food', 'Longsilog', 'Sweet sausage with garlic rice and egg', 140.00, false, '/assets/menu/longsilog.jpg'),
('both', 'Beverages', 'Tsokolate Batirol', 'Traditional hot chocolate', 110.00, true, '/assets/menu/tsokolate.jpg'),
('both', 'Coffee', 'Hazelnut Latte', 'Espresso with hazelnut syrup', 130.00, false, '/assets/menu/hazelnut.jpg'),
('both', 'Food', 'Pandesal with Kesong Puti', 'Local bread with white cheese', 70.00, false, '/assets/menu/pandesal.jpg'),
('both', 'Desserts', 'Leche Flan', 'Caramel custard', 90.00, false, '/assets/menu/leche_flan.jpg');

-- 4. packages
CREATE TABLE IF NOT EXISTS packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch branch_enum NOT NULL,
    type TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    inclusions TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample packages
INSERT INTO packages (branch, type, name, description, inclusions, price) VALUES
('both', 'coffee_package', 'Barako Starter Kit', 'Brew at home', '250g Barako Beans, French Press', 800.00),
('both', 'coffee_package', 'Office Coffee Bundle', 'For meetings', '10 cups of coffee, 10 pastries', 1500.00),
('both', 'coffee_package', 'Gift Set', 'Perfect for souvenirs', 'Mug, 250g Beans, Coaster', 600.00),
('malolos', 'event_package', 'Intimate Gathering', 'Small party', 'Venue use for 3 hours, consumable food and drinks for 10 pax', 5000.00),
('talisay', 'event_package', 'Garden Wedding', 'Outdoor venue', 'Venue use for 5 hours, buffet for 50 pax', 25000.00),
('both', 'event_package', 'Meeting Room', 'Private room', 'Use of room for 2 hours, coffee for 5 pax', 2000.00);

-- 5. gallery
CREATE TABLE IF NOT EXISTS gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch branch_enum NOT NULL,
    category TEXT,
    image_url TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample gallery
INSERT INTO gallery (branch, category, image_url, caption) VALUES
('malolos', 'Interior', '/assets/gallery/malolos_1.jpg', 'Cozy corner'),
('malolos', 'Exterior', '/assets/gallery/malolos_2.jpg', 'Facade'),
('talisay', 'View', '/assets/gallery/talisay_1.jpg', 'Taal View'),
('talisay', 'Interior', '/assets/gallery/talisay_2.jpg', 'Rustic tables'),
('both', 'Coffee', '/assets/gallery/coffee_1.jpg', 'Latte Art'),
('both', 'Food', '/assets/gallery/food_1.jpg', 'Breakfast spread'),
('malolos', 'Food', '/assets/gallery/malolos_food.jpg', 'Malolos Special'),
('talisay', 'Food', '/assets/gallery/talisay_food.jpg', 'Talisay Special'),
('both', 'Interior', '/assets/gallery/interior_1.jpg', 'Warm lighting'),
('both', 'Interior', '/assets/gallery/interior_2.jpg', 'Wooden furniture'),
('both', 'Coffee', '/assets/gallery/coffee_2.jpg', 'Pour over'),
('both', 'Coffee', '/assets/gallery/coffee_3.jpg', 'Beans');

-- 6. booking
CREATE TABLE IF NOT EXISTS booking (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customer(id),
    branch branch_enum NOT NULL,
    package_id UUID REFERENCES packages(id),
    booking_type TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    number_of_guests INTEGER NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample bookings
DO $$
DECLARE
    cust_id UUID;
    pkg_id UUID;
BEGIN
    SELECT id INTO cust_id FROM customer LIMIT 1;
    SELECT id INTO pkg_id FROM packages LIMIT 1;
    
    IF cust_id IS NOT NULL AND pkg_id IS NOT NULL THEN
        INSERT INTO booking (customer_id, branch, package_id, booking_type, event_date, number_of_guests, message, status) VALUES
        (cust_id, 'malolos', pkg_id, 'event', NOW() + INTERVAL '7 days', 10, 'Birthday party', 'pending');
    END IF;
END $$;

-- 7. promotions
CREATE TABLE IF NOT EXISTS promotions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch branch_enum NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO promotions (branch, title, description, is_active) VALUES
('both', 'Grand Opening Promo', '50% off on all coffees', true),
('malolos', 'Student Discount', '10% off with ID', true);

-- 8. banner (for promotional banners)
CREATE TABLE IF NOT EXISTS banner (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch branch_enum NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    image_url TEXT,
    link_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample banners
INSERT INTO banner (branch, title, subtitle, image_url, is_active) VALUES
('both', 'NEW! Seasonal Iced Coffee', 'Try our refreshing summer blend', '/assets/banners/summer.jpg', true),
('malolos', 'Malolos Special: Free Ensaymada', 'With every Barako purchase', '/assets/banners/promo.jpg', true),
('talisay', 'Taal View Special', 'Enjoy coffee with a view', '/assets/banners/view.jpg', true);
