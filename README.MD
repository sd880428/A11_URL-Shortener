# 短網址產生器
![index](https://raw.githubusercontent.com/sd880428/A11_URL-Shortener/master/public/img/index.jpg)
![output](https://raw.githubusercontent.com/sd880428/A11_URL-Shortener/master/public/img/output.jpg)

---
## 規格
+ 程式編輯器: [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/ "Visual Studio Code") 
+ 使用框架: [express](https://www.npmjs.com/package/express)@4.16.4
+ 模板引擎: [express-handlebars](https://www.npmjs.com/package/express-handlebars)@3.0.0
+ 資料庫ODM:[mongoose](https://www.npmjs.com/package/mongoose)@5.9.7
---
## 功能:
+ 使用者可以加任何網站縮成短網址
+ 同一網址或短網址如果已存在，不會存進資料庫，則是使用同一短網址
---
## 安裝與執行:
1. clone此專案
```
git clone https://github.com/sd880428/A1_restaurant_List.git
```

2. 使用終端機到此專案目錄下
```
cd ~/.../A1_restaurant_List/
```
3. 安裝套件
```
npm i
```
4. 自行加入.env 檔設定環境變數
```
MONGODB_URL = mongodb+srv://<username>:<password>@......mongodb.net/<database>?retryWrites=true&w=majority
```
5. 執行
```
npm run dev
```
6. 終端機顯示以下字串代表成功
```
the server is start successfully!
```
7. 開啟瀏覽器進入 http://localhost:3000 即可
