# 完成 fengdie-landing-page 模板安裝

本倉庫已初步集成了 fengdie-landing-page 模板。

## 快速完成安裝的方法

已完成的文件：
- README.md
- package.json

## 需要添加的文件

要完成整個安裝，請在本地運行以下 PowerShell 命令：

```powershell
# 1. 克隆源模板倉庫
git clone https://github.com/ant-motion/fengdie-landing-page.git temp-fengdie

# 2. 複製所有文件到當前倉庫（除了 .git 和 .gitignore）
Copy-Item temp-fengdie/* ./ -Recurse -Force -Exclude .git

# 3. 刪除臨時文件夾
Remove-Item temp-fengdie -Recurse -Force

# 4. 提交更改
git add .
git commit -m "Integrate fengdie-landing-page template"
git push origin main
```

## 手動方法

如果偏好手動操作，請逐個從以下位置複製文件：
https://github.com/ant-motion/fengdie-landing-page

需要複製的核心文件：
- index.html
- index.js
- .gitignore
- .eslintrc
- webpack.config.js
- deploy.js
- src/ (整個文件夾及其內容)

## 安裝依賴

```
npm install
```

## 啟動開發服務

```
npm start
```

## 構建項目

```
npm run build
```
