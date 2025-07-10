"use client"

import { useState } from "react";
import SubscriptionModal from "@/components/SubscriptionModal";

/**
 * 購読申し込みCTAコンポーネント
 * モーダルの開閉を管理
 */
export default function SubscriptionCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-12 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          今すぐ始める
        </button>
        <p className="mt-4 text-sm text-gray-600">
          クレジットカード不要で7日間無料トライアル
        </p>
      </div>

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}