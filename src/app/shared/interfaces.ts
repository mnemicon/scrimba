export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal: number;    //? ei jostain syystä toiminut optionaalisen symbolina --> (orderTotal?: number;)
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

// The 'I' is for Interface.