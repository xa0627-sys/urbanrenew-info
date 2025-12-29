# **中力都市更新資訊平台**

這是一個專為「中力都市更新」專案設計的單頁式資訊網站 (Single Page Application)。  
本網站旨在提供公開、透明的都更資訊，包含案件進度、會議公告、都更觀念宣導及平面圖說展示，方便住戶與地主隨時掌握最新動態。

## **🚀 專案特色**

* **RWD 響應式設計**：完美支援桌機、平板與手機瀏覽，手機版具備漢堡選單。  
* **單頁式架構 (Single Page)**：瀏覽流暢，點擊選單自動捲動至對應區塊。  
* **動態進度展示**：視覺化的時間軸設計，清楚呈現目前的都更階段。  
* **本地圖片管理**：圖片集中於專案內並依主題/段落分類，便於維護與避免命名衝突。  
* **現代化 UI**：使用 Glassmorphism (毛玻璃) 與簡約配色，提升專業感。

## **🛠️ 技術架構**

本專案採用「無構建 (No-Build)」的 React 架構，直接在瀏覽器中編譯執行，修改與部署都極為簡單。

* **核心框架**：[React 18](https://react.dev/) (CDN Version)  
* **樣式庫**：[Tailwind CSS](https://tailwindcss.com/) (CDN Version)  
* **圖標庫**：[Lucide Icons](https://lucide.dev/)  
* **字體**：Google Fonts (Noto Sans TC)  
* **編譯器**：Babel (用於瀏覽器端解析 JSX)

## **📂 檔案結構**

urbanrenew-info/  
├── assets/  
│   └── images/          \# 存放所有網站圖片 (Banner, Logo, 示意圖等)  
│       └── theme-2/     \# 主題 2 圖片分類  
│           ├── paragraph-1/  
│           ├── paragraph-2/  
│           └── paragraph-3/  
├── index.html           \# 網站主程式 (包含所有 React 邏輯與樣式)  
└── README.md            \# 專案說明文件

## **⚙️ 如何修改內容**

由於是單檔架構，所有的文字內容與邏輯都在 index.html 中。

1. **修改文字/公告**：  
   * 開啟 index.html。  
   * 搜尋對應的文字 (例如：「下次會議資訊」) 直接修改即可。  
2. **更換圖片**：  
   * 將新圖片上傳至 assets/images/ (或對應主題/段落的子資料夾)。  
   * 在 index.html 中找到 IMG\_BASE\_URL 與對應主題的路徑常數，或直接修改各區塊的圖片檔名。

## **📦 如何部署到 GitHub Pages**

本專案已針對 GitHub Pages 優化，請依照以下步驟讓網站上線：

1. **上傳程式碼**：  
   * 確保 index.html 位於 Repository 的 **根目錄 (root)**。  
   * 確保圖片位於 assets/images/ 資料夾中。  
2. **設定 GitHub Pages**：  
   * 進入 GitHub Repository 的 **Settings (設定)** 頁面。  
   * 點選左側選單的 **Pages**。  
   * 在 **Build and deployment** \> **Branch** 區塊：  
     * 選擇 main (或 master) 分支。  
     * 資料夾選擇 /(root)。  
   * 點擊 **Save (儲存)**。  
3. **等待部署**：  
   * 等待約 1-3 分鐘，GitHub Actions 完成建置後，您會在該頁面頂端看到您的網站網址。

## **📝 最新更新內容**

* 新增首頁耶誕應景 Banner。  
* 更新案件進度區塊，包含 115 年 1-2 月會議預告。  
* 優化導覽列 (Navbar) 為固定置頂樣式。  
* 新增建築師規劃進度說明與提示。  
* 主題 2 段落 2 投影片改為點擊後顯示，並將圖片依主題/段落分類。
* 修正段落 2 投影片連結為燈箱瀏覽流程。
* 解決主題 2 段落 2 投影片顯示衝突並統一為燈箱版本。

© 2025 中力都市更新股份有限公司. All rights reserved.
