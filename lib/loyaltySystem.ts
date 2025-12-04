// Loyalty Card System - Browser-based using localStorage

export interface LoyaltyCard {
    customerId: string;
    customerName: string;
    stamps: number;
    rewards: number;
    history: Transaction[];
    createdAt: string;
    lastUpdated: string;
}

export interface Transaction {
    id: string;
    type: 'stamp' | 'redeem';
    amount: number;
    date: string;
    note?: string;
}

const STORAGE_KEY = 'kafe_barako_loyalty_card';
const STAMPS_FOR_REWARD = 10;

export class LoyaltySystem {
    // Get or create loyalty card
    static getCard(): LoyaltyCard | null {
        if (typeof window === 'undefined') return null;

        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return null;
    }

    // Create new loyalty card
    static createCard(customerName: string): LoyaltyCard {
        const customerId = `KAFE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const card: LoyaltyCard = {
            customerId,
            customerName,
            stamps: 0,
            rewards: 0,
            history: [],
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
        };

        this.saveCard(card);
        return card;
    }

    // Save card to localStorage
    static saveCard(card: LoyaltyCard): void {
        if (typeof window === 'undefined') return;

        card.lastUpdated = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(card));
    }

    // Add stamps
    static addStamps(card: LoyaltyCard, count: number = 1, note?: string): LoyaltyCard {
        const newStamps = card.stamps + count;
        const newRewards = Math.floor(newStamps / STAMPS_FOR_REWARD);
        const remainingStamps = newStamps % STAMPS_FOR_REWARD;

        const transaction: Transaction = {
            id: `TXN-${Date.now()}`,
            type: 'stamp',
            amount: count,
            date: new Date().toISOString(),
            note,
        };

        const updatedCard: LoyaltyCard = {
            ...card,
            stamps: remainingStamps,
            rewards: card.rewards + newRewards,
            history: [transaction, ...card.history],
        };

        this.saveCard(updatedCard);
        return updatedCard;
    }

    // Redeem reward
    static redeemReward(card: LoyaltyCard, note?: string): LoyaltyCard | null {
        if (card.rewards < 1) return null;

        const transaction: Transaction = {
            id: `TXN-${Date.now()}`,
            type: 'redeem',
            amount: 1,
            date: new Date().toISOString(),
            note,
        };

        const updatedCard: LoyaltyCard = {
            ...card,
            rewards: card.rewards - 1,
            history: [transaction, ...card.history],
        };

        this.saveCard(updatedCard);
        return updatedCard;
    }

    // Delete card
    static deleteCard(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(STORAGE_KEY);
    }

    // Generate QR code data
    static generateQRData(card: LoyaltyCard): string {
        return JSON.stringify({
            id: card.customerId,
            name: card.customerName,
            stamps: card.stamps,
            rewards: card.rewards,
            verified: true,
        });
    }

    // Get progress percentage
    static getProgress(stamps: number): number {
        return (stamps / STAMPS_FOR_REWARD) * 100;
    }

    // Get stamps needed for next reward
    static stampsNeeded(stamps: number): number {
        return STAMPS_FOR_REWARD - stamps;
    }
}
