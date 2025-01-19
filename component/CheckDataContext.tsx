"use client";

import React from "react";
import { useDataContext } from "@/app/context/DataContext";

const CheckDataContext: React.FC = () => {
  const { data, loading, error } = useDataContext();

  if (loading) {
    return <p>データを読み込んでいます...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error}</p>;
  }

  return (
    <div>
      <h1>コンテキストデータの確認</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* データを整形して表示 */}
    </div>
  );
};

export default CheckDataContext;