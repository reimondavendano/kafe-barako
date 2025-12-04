'use client';

import { useState, useEffect } from 'react';
import { LoyaltySystem, LoyaltyCard } from '@/lib/loyaltySystem';
import Image from 'next/image';

export default function LoyaltyCardSection() {
    const [card, setCard] = useState<LoyaltyCard | null>(null);
    const [customerName, setCustomerName] = useState('');
    const [showQR, setShowQR] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const existingCard = LoyaltySystem.getCard();
        if (existingCard) {
            setCard(existingCard);
        }
    }, []);

    const handleCreateCard = (e: React.FormEvent) => {
        e.preventDefault();
        if (customerName.trim()) {
            const newCard = LoyaltySystem.createCard(customerName.trim());
            setCard(newCard);
            setCustomerName('');
        }
    };

    const handleAddStamp = () => {
        if (card) {
            const updatedCard = LoyaltySystem.addStamps(card, 1, 'Purchase');
            setCard(updatedCard);
        }
    };

    const handleRedeemReward = () => {
        if (card && card.rewards > 0) {
            const updatedCard = LoyaltySystem.redeemReward(card, 'Free drink redeemed');
            if (updatedCard) {
                setCard(updatedCard);
            }
        }
    };

    const handleDeleteCard = () => {
        if (confirm('Are you sure you want to delete your loyalty card? This action cannot be undone.')) {
            LoyaltySystem.deleteCard();
            setCard(null);
        }
    };

    const renderStamps = () => {
        const stamps = [];
        for (let i = 0; i < 10; i++) {
            stamps.push(
                <div
                    key={i}
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${i < (card?.stamps || 0)
                            ? 'bg-primary border-primary text-white scale-110'
                            : 'bg-white border-gray-300 text-gray-400'
                        }`}
                >
                    <span className="text-2xl">☕</span>
                </div>
            );
        }
        return stamps;
    };

    if (!isClient) {
        return (
            <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-gray-600">Loading loyalty program...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="loyalty" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        Loyalty Rewards
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600 text-lg">Buy 10 drinks, get 1 FREE! ☕</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {!card ? (
                        /* Create Card Form */
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-5xl">🎁</span>
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-2">Join Our Loyalty Program</h3>
                                <p className="text-gray-600">Start earning rewards with every purchase!</p>
                            </div>

                            <form onSubmit={handleCreateCard} className="max-w-md mx-auto">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-primary transition-colors"
                                >
                                    Get My Loyalty Card
                                </button>
                            </form>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4">
                                    <div className="text-3xl mb-2">☕</div>
                                    <p className="text-sm text-gray-600">Earn stamps with every purchase</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl mb-2">🎁</div>
                                    <p className="text-sm text-gray-600">Get free drinks as rewards</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl mb-2">📱</div>
                                    <p className="text-sm text-gray-600">Track your progress digitally</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Loyalty Card Display */
                        <div className="space-y-6">
                            {/* Card Header */}
                            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl p-8 text-white">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{card.customerName}</h3>
                                        <p className="text-sm opacity-90">Member ID: {card.customerId}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-bold">{card.rewards}</div>
                                        <p className="text-sm opacity-90">Free Drinks</p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Progress to next reward</span>
                                        <span>{LoyaltySystem.stampsNeeded(card.stamps)} more stamps needed</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-3">
                                        <div
                                            className="bg-white rounded-full h-3 transition-all duration-500"
                                            style={{ width: `${LoyaltySystem.getProgress(card.stamps)}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Stamps Grid */}
                                <div className="grid grid-cols-5 gap-3 mt-6">
                                    {renderStamps()}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={handleAddStamp}
                                    className="bg-primary text-white font-bold py-4 rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="text-xl">➕</span>
                                    Add Stamp (Demo)
                                </button>
                                <button
                                    onClick={handleRedeemReward}
                                    disabled={card.rewards < 1}
                                    className={`font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${card.rewards > 0
                                            ? 'bg-accent text-white hover:bg-primary'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    <span className="text-xl">🎁</span>
                                    Redeem Free Drink
                                </button>
                            </div>

                            {/* Additional Options */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button
                                    onClick={() => setShowQR(!showQR)}
                                    className="bg-white border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                                >
                                    {showQR ? 'Hide' : 'Show'} QR Code
                                </button>
                                <button
                                    onClick={() => setShowHistory(!showHistory)}
                                    className="bg-white border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                                >
                                    {showHistory ? 'Hide' : 'Show'} History
                                </button>
                                <button
                                    onClick={handleDeleteCard}
                                    className="bg-white border-2 border-red-500 text-red-500 font-semibold py-3 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    Delete Card
                                </button>
                            </div>

                            {/* QR Code Display */}
                            {showQR && (
                                <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                                    <h4 className="text-xl font-bold text-dark mb-4">Your QR Code</h4>
                                    <div className="bg-gray-100 p-8 rounded-lg inline-block">
                                        <div className="w-48 h-48 bg-white border-4 border-primary rounded-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">📱</div>
                                                <p className="text-xs text-gray-600">QR Code</p>
                                                <p className="text-xs text-gray-400 mt-2">Show to staff</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-4">
                                        Show this to our staff to collect stamps or redeem rewards
                                    </p>
                                </div>
                            )}

                            {/* Transaction History */}
                            {showHistory && (
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h4 className="text-xl font-bold text-dark mb-4">Transaction History</h4>
                                    {card.history.length > 0 ? (
                                        <div className="space-y-3 max-h-96 overflow-y-auto">
                                            {card.history.map((transaction) => (
                                                <div
                                                    key={transaction.id}
                                                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'stamp'
                                                                    ? 'bg-primary/10 text-primary'
                                                                    : 'bg-accent/10 text-accent'
                                                                }`}
                                                        >
                                                            {transaction.type === 'stamp' ? '☕' : '🎁'}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-dark">
                                                                {transaction.type === 'stamp'
                                                                    ? `+${transaction.amount} Stamp${transaction.amount > 1 ? 's' : ''}`
                                                                    : 'Reward Redeemed'}
                                                            </p>
                                                            {transaction.note && (
                                                                <p className="text-sm text-gray-600">{transaction.note}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs text-gray-500">
                                                            {new Date(transaction.date).toLocaleDateString()}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            {new Date(transaction.date).toLocaleTimeString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-center text-gray-500 py-8">No transactions yet</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-dark mb-4 text-center">How It Works</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl mb-3">1️⃣</div>
                            <h5 className="font-bold text-dark mb-2">Create Your Card</h5>
                            <p className="text-sm text-gray-600">Sign up for free and get your digital loyalty card</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">2️⃣</div>
                            <h5 className="font-bold text-dark mb-2">Collect Stamps</h5>
                            <p className="text-sm text-gray-600">Earn 1 stamp for every drink purchase</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">3️⃣</div>
                            <h5 className="font-bold text-dark mb-2">Get Rewards</h5>
                            <p className="text-sm text-gray-600">Redeem your free drink after 10 stamps!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
