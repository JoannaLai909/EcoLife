const developmentEvents = [

    {
        category: "Development",
        type: "normal",
        title: "千千的 AI 永續專題",
        description:
            "千千想做一個能分析宿舍用電習慣的 AI 專題，但她的模型一直把電鍋判斷成冷氣。",
        choices: [
            {
                text: "幫她一起修正模型",
                money: 0,
                energy: -25,
                goal9: 12,
                goal7: 5
            },
            {
                text: "只幫忙整理資料",
                money: 0,
                energy: -10,
                goal9: 5
            },
            {
                text: "跟她說電鍋也很努力",
                money: 0,
                energy: 8,
                goal9: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "快俠的慢速創業",
        description:
            "快俠說他想開一家永續生活小店，但他花了三小時還沒決定店名。",
        choices: [
            {
                text: "幫他做完整創業規劃",
                money: -80,
                energy: -25,
                goal8: 12,
                goal9: 5
            },
            {
                text: "先幫他想三個店名",
                money: 0,
                energy: -8,
                goal8: 5
            },
            {
                text: "陪他一起慢慢想",
                money: 0,
                energy: 10,
                goal8: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "凱咪的共享機車",
        description:
            "凱咪推薦你使用共享機車系統，還說這樣可以省錢又減少車輛閒置。",
        choices: [
            {
                text: "試著使用共享機車",
                money: -30,
                energy: 10,
                goal11: 8
            },
            {
                text: "改搭大眾運輸",
                money: -15,
                energy: -8,
                goal11: 10
            },
            {
                text: "還是自己騎車亂鑽",
                money: -80,
                energy: 12,
                goal11: -4
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "露露的高級節能燈",
        description:
            "露露買了一整組高級智慧燈泡，說她的房間要有『永續豪宅感』。",
        choices: [
            {
                text: "幫她設定節能模式",
                money: 0,
                energy: -12,
                goal7: 10,
                goal11: 4
            },
            {
                text: "提醒她不要整晚開燈拍照",
                money: 0,
                energy: -5,
                goal7: 5
            },
            {
                text: "一起開派對測燈光",
                money: -100,
                energy: 10,
                goal7: -6
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "逸玲的校園節能 App",
        description:
            "逸玲想做一個 App，讓同學看到每棟教室的即時用電狀況。",
        choices: [
            {
                text: "一起開發 App",
                money: -50,
                energy: -30,
                goal9: 15,
                goal7: 5
            },
            {
                text: "只幫忙畫介面草圖",
                money: 0,
                energy: -8,
                goal9: 5
            },
            {
                text: "說大家只會看食堂菜單",
                money: 0,
                energy: 8,
                goal9: -4
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "泰瑞的水陸交通構想",
        description:
            "泰瑞提出一個奇怪但有趣的點子：在校園湖旁設計水陸兩用接駁車。",
        choices: [
            {
                text: "幫他做可行性分析",
                money: 0,
                energy: -20,
                goal9: 10,
                goal11: 6
            },
            {
                text: "建議先改善校園公車",
                money: 0,
                energy: -8,
                goal11: 8
            },
            {
                text: "直接問他是不是想游泳上課",
                money: 0,
                energy: 5,
                goal11: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "胡尼克的省電妙招",
        description:
            "胡尼克說他發現一個省電方法：把別人的延長線關掉就好。",
        choices: [
            {
                text: "教他正確的節能方法",
                money: 0,
                energy: -10,
                goal7: 8
            },
            {
                text: "帶他參加節能講座",
                money: 0,
                energy: -15,
                goal7: 10,
                goal9: 3
            },
            {
                text: "假裝沒聽到",
                money: 0,
                energy: 5,
                goal7: -5
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "右廷的 3D 列印模型",
        description:
            "右廷想用 3D 列印做一座低碳城市模型，但他把腳踏車道印成雲霄飛車。",
        choices: [
            {
                text: "幫他重新建模",
                money: -30,
                energy: -20,
                goal9: 10,
                goal11: 5
            },
            {
                text: "只幫忙上色",
                money: -10,
                energy: -5,
                goal9: 3
            },
            {
                text: "說雲霄飛車城市也不錯",
                money: 0,
                energy: 8,
                goal11: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",

        title: "乃辭的智慧家電",

        description:
        "乃辭想買智慧節電插座。",

        choices: [
            {
                text: "陪她整理節能建議",
                money: 0,
                energy: -22,
                goal7: 10,
                goal9: 6
            },
            {
                text: "幫忙查伺服器節能資料",
                money: 0,
                energy: -10,
                goal9: 6
            },
            {
                text: "叫她先去睡覺",
                money: 0,
                energy: 5,
                goal7: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "凱倫的手搖杯回收機",
        description:
            "凱倫一天喝三杯手搖飲，突然想設計一台杯子自動回收機來彌補罪惡感。",
        choices: [
            {
                text: "幫她設計回收流程",
                money: -40,
                energy: -20,
                goal9: 10,
                goal11: 5
            },
            {
                text: "建議她先少喝一杯",
                money: 0,
                energy: -5,
                goal11: 4
            },
            {
                text: "陪她再買一杯想靈感",
                money: -60,
                energy: 8,
                goal11: -5
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "柔苡的 SDGs 黑客松",
        description:
            "柔苡找你參加 SDGs 黑客松，主題是用科技改善城市生活。",
        choices: [
            {
                text: "熬夜寫出原型系統",
                money: 0,
                energy: -40,
                goal9: 15,
                goal11: 5
            },
            {
                text: "負責 UI 設計",
                money: 0,
                energy: -18,
                goal9: 8
            },
            {
                text: "當吉祥物負責加油",
                money: 0,
                energy: 5,
                goal9: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "楊咩咩的城市計畫",
        description:
            "楊咩咩提出一個城市更新計畫，但內容看起來像是把公園全部改成停車場。",
        choices: [
            {
                text: "提出更友善的替代方案",
                money: 0,
                energy: -25,
                goal11: 12,
                goal9: 4
            },
            {
                text: "參加公聽會表達意見",
                money: 0,
                energy: -12,
                goal11: 8
            },
            {
                text: "覺得停車場也滿方便",
                money: 0,
                energy: 5,
                goal11: -8
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "蓋瑞的地下管線地圖",
        description:
            "蓋瑞對地下管線很有興趣，想做一張校園基礎設施地圖。",
        choices: [
            {
                text: "幫他整理管線資料",
                money: 0,
                energy: -18,
                goal9: 10,
                goal11: 5
            },
            {
                text: "提醒他注意安全規範",
                money: 0,
                energy: -8,
                goal11: 5
            },
            {
                text: "跟著亂鑽地下室",
                money: 0,
                energy: -15,
                goal11: -5
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "昕昕的智慧插座",
        description:
            "昕昕想買智慧節電插座，測試宿舍到底是哪個電器最耗電。",
        choices: [
            {
                text: "一起研究節能數據",
                money: -120,
                energy: -15,
                goal7: 12,
                goal9: 5
            },
            {
                text: "幫她設定定時關機",
                money: 0,
                energy: -8,
                goal7: 6
            },
            {
                text: "直接全部不關電",
                money: -100,
                energy: 10,
                goal7: -8
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "安娜的永續商品平台",
        description:
            "安娜想創立一個永續商品平台，但她的購物車功能一直把環保袋算成十個。",
        choices: [
            {
                text: "加入創業團隊",
                money: -180,
                energy: -35,
                goal8: 12,
                goal9: 10
            },
            {
                text: "幫她測試網站",
                money: 0,
                energy: -12,
                goal9: 6
            },
            {
                text: "說這平台可能先把她錢包永續耗盡",
                money: 0,
                energy: 6,
                goal8: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "露露的智慧衣櫃",
        description:
            "露露想做一個智慧衣櫃，提醒她不要一直買重複的衣服。",
        choices: [
            {
                text: "幫她設計功能流程",
                money: 0,
                energy: -18,
                goal9: 10
            },
            {
                text: "建議加入二手交換功能",
                money: 0,
                energy: -12,
                goal8: 5,
                goal11: 5
            },
            {
                text: "稱讚她每件都不一樣",
                money: 0,
                energy: 6,
                goal8: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "泰瑞的雨天通學路線",
        description:
            "泰瑞發現下雨天大家都擠在同一條路，想改善校園通學動線。",
        choices: [
            {
                text: "幫他畫出動線分析圖",
                money: 0,
                energy: -18,
                goal11: 10,
                goal9: 4
            },
            {
                text: "提出增設遮雨步道",
                money: -30,
                energy: -10,
                goal11: 8
            },
            {
                text: "直接踩水坑前進",
                money: 0,
                energy: 5,
                goal11: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "胡尼克的假投資簡報",
        description:
            "胡尼克拿出一份『一定賺錢的綠能投資計畫』，但收益曲線看起來像他自己畫的。",
        choices: [
            {
                text: "幫大家查證資料",
                money: 0,
                energy: -15,
                goal8: 8,
                goal9: 4
            },
            {
                text: "提醒同學不要亂投資",
                money: 0,
                energy: -8,
                goal8: 6
            },
            {
                text: "跟著投一點試試看",
                money: -200,
                energy: 5,
                goal8: -8
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "依林的 24 小時自習室",
        description:
            "依林覺得圖書館應該開放 24 小時，但也擔心照明和冷氣耗電太高。",
        choices: [
            {
                text: "提出分區節能開放方案",
                money: 0,
                energy: -20,
                goal7: 8,
                goal11: 8
            },
            {
                text: "建議用預約制控制人流",
                money: 0,
                energy: -10,
                goal11: 6
            },
            {
                text: "只想整晚吹冷氣",
                money: 0,
                energy: 8,
                goal7: -5
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "凱倫的飲料店排隊系統",
        description:
            "凱倫最愛的飲料店排隊太久，她想設計一個線上預約系統。",
        choices: [
            {
                text: "幫她規劃系統架構",
                money: 0,
                energy: -18,
                goal9: 10,
                goal8: 4
            },
            {
                text: "幫忙做簡單表單",
                money: 0,
                energy: -8,
                goal9: 5
            },
            {
                text: "叫她乾脆一次買三杯",
                money: -180,
                energy: 10,
                goal8: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "快俠的共享工具箱",
        description:
            "快俠想在宿舍放一個共享工具箱，但他慢到連螺絲起子都還沒買。",
        choices: [
            {
                text: "幫他建立借用制度",
                money: -40,
                energy: -16,
                goal11: 8,
                goal8: 5
            },
            {
                text: "先捐出自己的工具",
                money: -60,
                energy: -5,
                goal11: 6
            },
            {
                text: "借了不還也沒差",
                money: 20,
                energy: 5,
                goal11: -6
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "柔苡的太陽能社團展",
        description:
            "柔苡想在社團展展示小型太陽能裝置，但電線多到像義大利麵。",
        choices: [
            {
                text: "幫忙組裝並整理線路",
                money: -80,
                energy: -18,
                goal7: 12,
                goal9: 4
            },
            {
                text: "負責解說節能原理",
                money: 0,
                energy: -12,
                goal7: 8
            },
            {
                text: "只負責站旁邊拍照",
                money: 0,
                energy: 3,
                goal7: 1
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "楊咩咩的豪華馬路",
        description:
            "楊咩咩主張把校園步道拓寬成四線道，理由是『走路太沒效率』。",
        choices: [
            {
                text: "提出行人優先設計",
                money: 0,
                energy: -20,
                goal11: 12
            },
            {
                text: "建議加入自行車道",
                money: 0,
                energy: -12,
                goal11: 8
            },
            {
                text: "支持四線道進宿舍",
                money: 0,
                energy: 8,
                goal11: -10
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "蓋瑞的地下商場夢",
        description:
            "蓋瑞提議把學校地下空間變成商場，還說這樣下雨就不用曬太陽。",
        choices: [
            {
                text: "評估安全與通風問題",
                money: 0,
                energy: -18,
                goal11: 8,
                goal9: 5
            },
            {
                text: "建議改成避暑公共空間",
                money: 0,
                energy: -12,
                goal11: 10
            },
            {
                text: "只想開一家零食店",
                money: -100,
                energy: 6,
                goal8: 2,
                goal11: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "右廷的無人機測試",
        description:
            "右廷參加無人機送貨測試，結果無人機差點把便當送到樹上。",
        choices: [
            {
                text: "幫忙記錄飛行數據",
                money: 0,
                energy: -18,
                goal9: 10,
                goal11: 5
            },
            {
                text: "建議限制飛行區域",
                money: 0,
                energy: -10,
                goal11: 6
            },
            {
                text: "站在下面等便當掉下來",
                money: 0,
                energy: 8,
                goal9: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "昕昕的程式課",
        description:
            "昕昕推薦你修一門 AI 與永續發展課程，說期末可能要做一個真正能用的作品。",
        choices: [
            {
                text: "認真修課並完成作品",
                money: -100,
                energy: -30,
                goal9: 12,
                goal8: 4
            },
            {
                text: "只求低空飛過",
                money: 0,
                energy: -10,
                goal9: -2
            },
            {
                text: "直接退選保平安",
                money: 0,
                energy: 12,
                goal9: -5
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "安娜的二手科技市集",
        description:
            "安娜想辦一個二手電子產品交換市集，讓舊手機、舊平板都能延長壽命。",
        choices: [
            {
                text: "幫忙籌辦活動",
                money: -30,
                energy: -25,
                goal8: 8,
                goal11: 8
            },
            {
                text: "拿舊手機去交換",
                money: 50,
                energy: -5,
                goal8: 4
            },
            {
                text: "直接買新的比較快",
                money: -400,
                energy: 5,
                goal8: -5
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "千千的研究資料打工",
        description:
            "千千的教授有一批 AI 研究資料需要整理，千千問你要不要一起接這份打工。",
        choices: [
            {
                text: "接下完整資料整理",
                money: 420,
                energy: -35,
                goal9: 12,
                goal8: 5
            },
            {
                text: "只幫忙做前半段",
                money: 160,
                energy: -15,
                goal9: 5
            },
            {
                text: "推薦別人去接",
                money: 0,
                energy: 5,
                goal8: 1
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "凱倫的飲料店網站",
        description:
            "凱倫常去的飲料店想做線上點餐頁面，她立刻想到你可以接案。",
        choices: [
            {
                text: "做完整點餐網站",
                money: 500,
                energy: -45,
                goal9: 15,
                goal8: 6
            },
            {
                text: "只做菜單頁面",
                money: 180,
                energy: -18,
                goal9: 8
            },
            {
                text: "用現成表單幫忙",
                money: 80,
                energy: -8,
                goal8: 3
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "右廷的電腦急救",
        description:
            "右廷的電腦在報告前一天壞掉，他抱著主機衝來找你。",
        choices: [
            {
                text: "完整幫他處理",
                money: 350,
                energy: -30,
                goal9: 12
            },
            {
                text: "只幫忙重灌系統",
                money: 120,
                energy: -10,
                goal9: 5
            },
            {
                text: "叫他先深呼吸",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "露露的高級簡報外包",
        description:
            "露露要參加創業競賽，想請你幫她把簡報做得像投資發表會。",
        choices: [
            {
                text: "接下完整簡報設計",
                money: 400,
                energy: -35,
                goal8: 10,
                goal9: 5
            },
            {
                text: "只幫忙排版",
                money: 150,
                energy: -12,
                goal8: 4
            },
            {
                text: "只給她一個模板",
                money: 50,
                energy: -5,
                goal8: 2
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "泰瑞的社區預約系統",
        description:
            "泰瑞認識的里辦公室想做一個線上預約系統，問你能不能幫忙。",
        choices: [
            {
                text: "幫忙做完整系統",
                money: 480,
                energy: -38,
                goal11: 10,
                goal9: 8
            },
            {
                text: "用現成工具設定",
                money: 180,
                energy: -12,
                goal11: 5
            },
            {
                text: "建議找專業公司",
                money: 0,
                energy: 5,
                goal8: 1
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "依林的深夜剪片委託",
        description:
            "依林半夜睡不著，接到科技社宣傳影片剪輯案，但她希望你一起分工。",
        choices: [
            {
                text: "認真剪完整影片",
                money: 300,
                energy: -28,
                goal8: 8,
                goal9: 5
            },
            {
                text: "只幫忙剪素材",
                money: 120,
                energy: -10,
                goal8: 3
            },
            {
                text: "說先睡醒再說",
                money: 0,
                energy: 8
            }
        ]
    }

];