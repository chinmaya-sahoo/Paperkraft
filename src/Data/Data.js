const Data = [
    // Mukut category
    {
        id: 1,
        name: "Royal Mukut",
        category: "Mukut",
        size: "Medium",
        price: 1200,
        description: "A beautiful handcrafted mukut made with paper beads and crystals.",
        image: "mukut_1.jpg",
        inStock: true,
        genericName: "Headgear",
    },
    {
        id: 2,
        name: "Golden Mukut",
        category: "Mukut",
        size: "Large",
        price: 1400,
        description: "A golden mukut with intricate beadwork and sparkling crystals.",
        image: "mukut_2.jpg",
        inStock: true,
        genericName: "Headgear",
    },
    {
        id: 3,
        name: "Floral Mukut",
        category: "Mukut",
        size: "Small",
        price: 1100,
        description: "A mukut featuring a floral design with pastel-colored beads.",
        image: "mukut_3.jpg",
        inStock: false,
        genericName: "Headgear",
    },
    {
        id: 4,
        name: "Crystal Crown",
        category: "Mukut",
        size: "Adjustable",
        price: 1600,
        description: "A majestic crown-like mukut adorned with crystals.",
        image: "mukut_4.jpg",
        inStock: true,
        genericName: "Headgear",
    },
    {
        id: 5,
        name: "Regal Mukut",
        category: "Mukut",
        size: "Standard",
        price: 1300,
        description: "A regal mukut perfect for festive occasions.",
        image: "mukut_5.jpg",
        inStock: true,
        genericName: "Headgear",
    },

    // Neck Piece category
    {
        id: 6,
        name: "Elegant Neck Piece",
        category: "Neck Piece",
        size: "Adjustable",
        price: 1500,
        description: "An elegant neck piece adorned with vibrant paper beads and crystals.",
        image: "neckpiece_1.jpg",
        inStock: true,
        genericName: "Jewelry",
    },
    {
        id: 7,
        name: "Pearl Necklace",
        category: "Neck Piece",
        size: "Medium",
        price: 1800,
        description: "A classic pearl necklace for a timeless look.",
        image: "neckpiece_2.jpg",
        inStock: false,
        genericName: "Jewelry",
    },
    {
        id: 8,
        name: "Crystal Choker",
        category: "Neck Piece",
        size: "Small",
        price: 1200,
        description: "A delicate choker with sparkling crystals.",
        image: "neckpiece_3.jpg",
        inStock: true,
        genericName: "Jewelry",
    },
    {
        id: 9,
        name: "Gold Plated Necklace",
        category: "Neck Piece",
        size: "Large",
        price: 2000,
        description: "A gold-plated necklace with intricate designs.",
        image: "neckpiece_4.jpg",
        inStock: true,
        genericName: "Jewelry",
    },
    {
        id: 10,
        name: "Beaded Pendant",
        category: "Neck Piece",
        size: "Standard",
        price: 1300,
        description: "A pendant necklace with colorful beads.",
        image: "neckpiece_5.jpg",
        inStock: true,
        genericName: "Jewelry",
    },

    // Belt category
    {
        id: 11,
        name: "Traditional Belt",
        category: "Belt",
        size: "Large",
        price: 900,
        description: "A traditional belt crafted with intricate beadwork and crystals.",
        image: "belt_1.jpg",
        inStock: false,
        genericName: "Waist Ornament",
    },
    {
        id: 12,
        name: "Golden Waist Belt",
        category: "Belt",
        size: "Adjustable",
        price: 1300,
        description: "A golden waist belt perfect for traditional wear.",
        image: "belt_2.jpg",
        inStock: true,
        genericName: "Waist Ornament",
    },
    {
        id: 13,
        name: "Silver Chain Belt",
        category: "Belt",
        size: "Medium",
        price: 1100,
        description: "A sleek silver chain belt for modern attire.",
        image: "belt_3.jpg",
        inStock: true,
        genericName: "Waist Ornament",
    },
    {
        id: 14,
        name: "Beaded Belt",
        category: "Belt",
        size: "Small",
        price: 800,
        description: "A colorful beaded belt for a vibrant look.",
        image: "belt_4.jpg",
        inStock: false,
        genericName: "Waist Ornament",
    },
    {
        id: 15,
        name: "Crystal Studded Belt",
        category: "Belt",
        size: "Standard",
        price: 1500,
        description: "A belt studded with sparkling crystals.",
        image: "belt_5.jpg",
        inStock: true,
        genericName: "Waist Ornament",
    },

    // Baju category
    {
        id: 16,
        name: "Festive Baju",
        category: "Baju",
        size: "Free Size",
        price: 800,
        description: "A festive arm piece embellished with colorful paper beads.",
        image: "baju_1.jpg",
        inStock: true,
        genericName: "Arm Ornament",
    },
    {
        id: 17,
        name: "Crystal Baju",
        category: "Baju",
        size: "Medium",
        price: 1000,
        description: "An arm ornament adorned with crystals.",
        image: "baju_2.jpg",
        inStock: true,
        genericName: "Arm Ornament",
    },
    {
        id: 18,
        name: "Golden Baju",
        category: "Baju",
        size: "Large",
        price: 1200,
        description: "A golden arm piece with intricate detailing.",
        image: "baju_3.jpg",
        inStock: false,
        genericName: "Arm Ornament",
    },
    {
        id: 19,
        name: "Pearl Studded Baju",
        category: "Baju",
        size: "Adjustable",
        price: 1400,
        description: "An arm ornament with pearl embellishments.",
        image: "baju_4.jpg",
        inStock: true,
        genericName: "Arm Ornament",
    },
    {
        id: 20,
        name: "Beaded Arm Ornament",
        category: "Baju",
        size: "Standard",
        price: 900,
        description: "An arm ornament crafted with colorful beads.",
        image: "baju_5.jpg",
        inStock: true,
        genericName: "Arm Ornament",
    },

    // Jhalar category
    {
        id: 21,
        name: "Decorative Jhalar",
        category: "Jhalar",
        size: "Standard",
        price: 1100,
        description: "A decorative jhalar with sparkling crystals and intricate beadwork.",
        image: "jhalar_1.jpg",
        inStock: true,
        genericName: "Decoration",
    },
    {
        id: 22,
        name: "Golden Jhalar",
        category: "Jhalar",
        size: "Large",
        price: 1300,
        description: "A golden decorative jhalar for festive occasions.",
        image: "jhalar_2.jpg",
        inStock: true,
        genericName: "Decoration",
    },
    {
        id: 23,
        name: "Beaded Jhalar",
        category: "Jhalar",
        size: "Medium",
        price: 900,
        description: "A colorful jhalar with intricate bead designs.",
        image: "jhalar_3.jpg",
        inStock: false,
        genericName: "Decoration",
    },
    {
        id: 24,
        name: "Crystal Garland",
        category: "Jhalar",
        size: "Adjustable",
        price: 1500,
        description: "A garland-like jhalar with shimmering crystals.",
        image: "jhalar_4.jpg",
        inStock: true,
        genericName: "Decoration",
    },
    {
        id: 25,
        name: "Floral Jhalar",
        category: "Jhalar",
        size: "Small",
        price: 1000,
        description: "A floral-themed jhalar for a festive look.",
        image: "jhalar_5.jpg",
        inStock: true,
        genericName: "Decoration",
    },
];

export default Data;