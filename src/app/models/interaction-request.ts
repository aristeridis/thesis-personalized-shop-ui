export interface InteractionRequest {
    userId: number;
    productId: number;
    interactionType: string;
    ratingScore?: number;
}
