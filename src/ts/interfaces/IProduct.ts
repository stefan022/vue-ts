export interface IProduct {
    articleId: number;
    articleName: string;
    discount: number;
    price: number;
    category: string;
    brand: string;
    model: string;
    colors: string[];
    quantity: number;
    rating: number;
    screen: {
        screenType: string;
        screenDiagonal: string;
    };
    memory: {
        ramMemory: string;
        internalMemory: string;
    },
    battery: string;
    status: string;
    images: string[];
    timestamp: number;
    camera: {
        rearCamera: string; 
        frontCamera: string;
    }
};