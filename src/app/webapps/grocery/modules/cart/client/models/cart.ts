export interface ICartProduct {
    id: string;
    name: string;
    image: string;
    quantity: number;
}

export class CartProduct implements ICartProduct {
    public id: string;
    public name: string;
    public image: string;
    public quantity: number;

    constructor(id: string, name: string, image: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.quantity = quantity;
    }
}