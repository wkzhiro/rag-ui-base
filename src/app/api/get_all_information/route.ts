import { NextResponse } from "next/server";

  // facet情報をベースに、全てのドキュメントを取得する。
  // ドキュメント数が多い場合、レスポンスが悪くなるため、方法を検討する必要がある。

export async function GET() {
  const apiUrl = process.env.AZURE_FUNCTION_API_URL || "";
  console.log("apiURL",apiUrl)
  const get_all_information = {
    query: "*",
    // "filters": {
    //   "tags": [
    //     "SNS",
    //     "広告",
    //     "UX"
    //   ],
    //   "authors": [
    //     "高橋",
    //     "鈴木花子",
    //     "伊藤"
    //   ]
    // },
    facets: ["tags", "authors", "category", "release_year"],
    top: 30,
  };

  try {
    // APIへリクエスト
    const response = await fetch(
      apiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(get_all_information),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const results = await response.json();

    // ログ出力（デバッグ用）
    // console.log("取得したデータ:", results);

    // JSONで結果を返す
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error:", error);

    // 型ガードを使用して error の型を特定
    const errorMessage =
      error instanceof Error
        ? error.message
        : "予期しないエラーが発生しました";

    // エラー時のレスポンスを返却
    return NextResponse.json(
      { message: "データの取得中にエラーが発生しました", error: errorMessage },
      { status: 500 }
    );
  }
}