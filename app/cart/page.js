"use client";

import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  // Hard-coded project cost (edit as needed)
  const item = {
    name: "Website Redesign/Build for SoldThrough",
    price: 4000,
    currency: "CAD",
    description:
      "Complete redesign and rebuild, Contentful CMS integration, initial SEO, and one month of post-launch support.",
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-item" aria-label="Project in cart">
        <div className="cart-item-details">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-desc">{item.description}</div>
        </div>
        <div className="cart-item-price">
          <span className="cart-currency">{item.currency}</span>{" "}
          <span className="cart-amount">${item.price.toLocaleString()}</span>
        </div>
      </div>
      <div className="cart-actions">
        <button
          type="button"
          className="cart-back-btn"
          onClick={() => router.push("/agreement")}
          aria-label="Back to Agreement"
        >
          ← Back to Agreement
        </button>
        <button
          type="button"
          className="cart-checkout-btn"
          onClick={() => router.push("/checkout")}
          aria-label="Proceed to Checkout"
        >
          Proceed to Checkout
        </button>
      </div>
      <style jsx>{`
        .cart-page {
          max-width: 480px;
          margin: 40px auto;
          padding: 32px 18px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
        }
        .cart-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 28px;
          color: #1f2233;
        }
        .cart-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border: 1px solid #e7f099;
          border-radius: 10px;
          padding: 18px;
          margin-bottom: 24px;
          background: #fcfbe7;
        }
        .cart-item-details {
          margin-bottom: 8px;
        }
        .cart-item-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .cart-item-desc {
          font-size: 0.98rem;
          color: #444;
        }
        .cart-item-price {
          font-size: 1.2rem;
          font-weight: 800;
          color: #e86a24;
        }
        .cart-currency {
          font-size: 1rem;
          font-weight: 600;
        }
        .cart-actions {
          display: flex;
          gap: 12px;
          margin-top: 18px;
        }
        .cart-back-btn,
        .cart-checkout-btn {
          background: #e7f099;
          color: #111;
          font-weight: 700;
          border: 0;
          border-radius: 8px;
          padding: 10px 18px;
          font-size: 16px;
          cursor: pointer;
          min-width: 140px;
          transition: background 0.15s;
        }
        .cart-back-btn:focus,
        .cart-checkout-btn:focus {
          outline: 2px solid #1f2233;
          outline-offset: 2px;
        }
        .cart-checkout-btn {
          background: #e86a24;
          color: #fff;
        }
        @media (max-width: 600px) {
          .cart-page {
            padding: 12px 4px;
          }
          .cart-actions {
            flex-direction: column;
            gap: 8px;
          }
          .cart-back-btn,
          .cart-checkout-btn {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}
