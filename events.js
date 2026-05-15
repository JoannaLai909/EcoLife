const developmentEvents = [

    {
        category: "Development",

        type: "normal",

        title: "千千的 AI 專題",

        description:
        "千千想找你一起做 AI 永續應用專題。",

        choices: [

            {
                text: "一起研究",
                money: 0,
                energy: -25,
                goal9: 12
            },

            {
                text: "只幫忙做簡報",
                money: 0,
                energy: -10,
                goal9: 5
            },

            {
                text: "我只想躺平",
                money: 0,
                energy: 15,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧校園提案",

        description:
        "學校舉辦智慧校園創意競賽。",

        choices: [

            {
                text: "提出節能系統",
                money: -50,
                energy: -20,
                goal9: 10,
                goal11: 5
            },

            {
                text: "跟朋友組隊混分",
                money: 0,
                energy: -8,
                goal9: 2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 8,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "凱咪的共享機車",

        description:
        "凱咪推薦你使用共享機車系統。",

        choices: [

            {
                text: "試著使用看看",
                money: -30,
                energy: 10,
                goal11: 8
            },

            {
                text: "還是自己騎車",
                money: -80,
                energy: 12,
                goal11: -4
            },

            {
                text: "搭大眾運輸",
                money: -15,
                energy: -8,
                goal11: 10
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園太陽能計畫",

        description:
        "教授想推動宿舍屋頂太陽能計畫。",

        choices: [

            {
                text: "加入規劃團隊",
                money: 0,
                energy: -30,
                goal7: 15
            },

            {
                text: "幫忙做資料整理",
                money: 0,
                energy: -10,
                goal7: 6
            },

            {
                text: "覺得太麻煩",
                money: 0,
                energy: 8,
                goal7: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "安娜的創業夢",

        description:
        "安娜想創立永續商品平台。",

        choices: [

            {
                text: "加入創業團隊",
                money: -200,
                energy: -35,
                goal8: 10,
                goal9: 10
            },

            {
                text: "幫她測試網站",
                money: 0,
                energy: -10,
                goal9: 5
            },

            {
                text: "感覺會倒閉",
                money: 0,
                energy: 5,
                goal8: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園充電站",

        description:
        "學校想新增電動車充電站。",

        choices: [

            {
                text: "支持建設",
                money: -30,
                energy: -5,
                goal7: 8,
                goal11: 5
            },

            {
                text: "擔心浪費經費",
                money: 0,
                energy: 3,
                goal11: -2
            },

            {
                text: "完全不在意",
                money: 0,
                energy: 5,
                goal11: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "數位學習平台",

        description:
        "教授推薦你使用新的 AI 學習平台。",

        choices: [

            {
                text: "認真研究功能",
                money: -50,
                energy: -20,
                goal9: 10
            },

            {
                text: "只拿來抄答案",
                money: 0,
                energy: 5,
                goal4: -5
            },

            {
                text: "完全不用",
                money: 0,
                energy: 3,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "昕昕的智慧家電",

        description:
        "昕昕想買智慧節電插座。",

        choices: [

            {
                text: "一起研究節能",
                money: -200,
                energy: -10,
                goal7: 10
            },

            {
                text: "普通插座就好",
                money: 0,
                energy: 3,
                goal7: -3
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

        title: "智慧交通測試",

        description:
        "市政府開放智慧公車系統測試。",

        choices: [

            {
                text: "下載 App 測試",
                money: 0,
                energy: -8,
                goal11: 10
            },

            {
                text: "還是亂等公車",
                money: 0,
                energy: -5,
                goal11: -2
            },

            {
                text: "直接搭 Uber",
                money: -200,
                energy: 12,
                goal11: -6
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "柔苡的黑客松",

        description:
        "柔苡找你參加 SDGs 黑客松競賽。",

        choices: [

            {
                text: "熬夜寫程式",
                money: 0,
                energy: -40,
                goal9: 15
            },

            {
                text: "負責 UI 設計",
                money: 0,
                energy: -18,
                goal9: 8
            },

            {
                text: "當吉祥物",
                money: 0,
                energy: 5,
                goal9: -2
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園免費 Wi-Fi",

        description:
        "學校想升級免費 Wi-Fi 系統。",

        choices: [

            {
                text: "支持升級",
                money: -20,
                energy: -5,
                goal9: 8
            },

            {
                text: "覺得現在就夠了",
                money: 0,
                energy: 3,
                goal9: -2
            },

            {
                text: "偷用別人的熱點",
                money: 20,
                energy: 0,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "AI 自動點名系統",

        description:
        "教授想導入 AI 點名辨識系統。",

        choices: [

            {
                text: "覺得很方便",
                money: 0,
                energy: -5,
                goal9: 8
            },

            {
                text: "擔心隱私問題",
                money: 0,
                energy: -3,
                goal16: 5
            },

            {
                text: "研究怎麼破解",
                money: 0,
                energy: -15,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "宿舍電梯維修",

        description:
        "宿舍老舊電梯常常故障。",

        choices: [

            {
                text: "支持更新設備",
                money: -50,
                energy: -5,
                goal11: 10
            },

            {
                text: "反正我住低樓層",
                money: 0,
                energy: 3,
                goal11: -3
            },

            {
                text: "每天走樓梯",
                money: 0,
                energy: -20,
                goal3: 5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園機器人展",

        description:
        "資工系正在展出 AI 與機器人技術。",

        choices: [

            {
                text: "認真參觀學習",
                money: -30,
                energy: -10,
                goal9: 10
            },

            {
                text: "只去拍照打卡",
                money: -10,
                energy: 5,
                goal9: 1
            },

            {
                text: "覺得很無聊",
                money: 0,
                energy: 8,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "低碳智慧城市",

        description:
        "你參加了一場智慧城市論壇。",

        choices: [

            {
                text: "認真做筆記",
                money: 0,
                energy: -15,
                goal11: 12
            },

            {
                text: "滑手機聽演講",
                money: 0,
                energy: 3,
                goal11: 0
            },

            {
                text: "直接翹掉",
                money: 0,
                energy: 10,
                goal11: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧停車系統",

        description:
        "學校正在測試智慧停車 App。",

        choices: [

            {
                text: "下載試用",
                money: -20,
                energy: -5,
                goal11: 8,
                goal9: 5
            },

            {
                text: "還是亂停車",
                money: 0,
                energy: 5,
                goal11: -6
            },

            {
                text: "騎腳踏車來學校",
                money: 20,
                energy: -15,
                goal11: 10
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "AI 自習室",

        description:
        "圖書館新增 AI 自習室預約系統。",

        choices: [

            {
                text: "研究新功能",
                money: 0,
                energy: -10,
                goal9: 8
            },

            {
                text: "用來搶熱門位子",
                money: 0,
                energy: 5,
                goal9: -3
            },

            {
                text: "直接去咖啡廳",
                money: -120,
                energy: 12,
                goal11: -2
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "逸玲的創新提案",

        description:
        "逸玲想做一個校園節能 App。",

        choices: [

            {
                text: "一起開發",
                money: -50,
                energy: -30,
                goal9: 15,
                goal7: 5
            },

            {
                text: "只提供想法",
                money: 0,
                energy: -8,
                goal9: 5
            },

            {
                text: "覺得沒人會用",
                money: 0,
                energy: 8,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧販賣機",

        description:
        "校園導入能分析購買習慣的智慧販賣機。",

        choices: [

            {
                text: "體驗新科技",
                money: -30,
                energy: -3,
                goal9: 6
            },

            {
                text: "擔心個資問題",
                money: 0,
                energy: -5,
                goal16: 5
            },

            {
                text: "亂按機器玩",
                money: -10,
                energy: 8,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "柔苡的太陽能板",

        description:
        "柔苡想在社團展展示小型太陽能裝置。",

        choices: [

            {
                text: "幫忙組裝",
                money: -80,
                energy: -18,
                goal7: 12
            },

            {
                text: "只負責拍照",
                money: 0,
                energy: -3,
                goal7: 3
            },

            {
                text: "感覺很無聊",
                money: 0,
                energy: 5,
                goal7: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "共享單車維修",

        description:
        "校園共享單車最近很多台壞掉。",

        choices: [

            {
                text: "回報故障車輛",
                money: 0,
                energy: -5,
                goal11: 8
            },

            {
                text: "幫忙簡單維修",
                money: -50,
                energy: -20,
                goal11: 12
            },

            {
                text: "壞掉就算了",
                money: 0,
                energy: 5,
                goal11: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園數位化",

        description:
        "學校開始推動無紙化行政流程。",

        choices: [

            {
                text: "支持全面數位化",
                money: 0,
                energy: -8,
                goal9: 8,
                goal12: 5
            },

            {
                text: "我還是喜歡紙本",
                money: -20,
                energy: 5,
                goal12: -3
            },

            {
                text: "亂印一堆文件",
                money: -50,
                energy: 3,
                goal12: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "右廷的 3D 列印",

        description:
        "右廷想用 3D 列印做環保模型。",

        choices: [

            {
                text: "幫忙建模",
                money: -30,
                energy: -20,
                goal9: 10
            },

            {
                text: "只幫忙上色",
                money: -10,
                energy: -5,
                goal9: 3
            },

            {
                text: "直接網購成品",
                money: -300,
                energy: 10,
                goal9: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧宿舍",

        description:
        "宿舍正在測試自動節能照明系統。",

        choices: [

            {
                text: "支持安裝",
                money: -20,
                energy: -3,
                goal7: 8,
                goal11: 5
            },

            {
                text: "嫌燈太常自動關掉",
                money: 0,
                energy: 5,
                goal7: -3
            },

            {
                text: "偷偷拔感測器",
                money: 20,
                energy: -8,
                goal7: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "凱咪的科技展",

        description:
        "凱咪邀你一起參加科技與永續展覽。",

        choices: [

            {
                text: "認真參觀",
                money: -50,
                energy: -12,
                goal9: 10
            },

            {
                text: "只拍照打卡",
                money: -10,
                energy: 5,
                goal9: 1
            },

            {
                text: "直接回宿舍",
                money: 0,
                energy: 10,
                goal9: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "自動垃圾分類機",

        description:
        "學生團隊做出 AI 垃圾分類裝置。",

        choices: [

            {
                text: "協助測試",
                money: 0,
                energy: -15,
                goal9: 12,
                goal12: 5
            },

            {
                text: "亂丟測試極限",
                money: 0,
                energy: 8,
                goal12: -6
            },

            {
                text: "完全沒興趣",
                money: 0,
                energy: 5,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "昕昕的程式課",

        description:
        "昕昕推薦你修一門 AI 與永續發展課程。",

        choices: [

            {
                text: "認真修課",
                money: -100,
                energy: -30,
                goal4: 8,
                goal9: 10
            },

            {
                text: "只求低空飛過",
                money: 0,
                energy: -10,
                goal4: -2
            },

            {
                text: "直接退選",
                money: 0,
                energy: 12,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧公車系統",

        description:
        "城市導入即時智慧公車資訊。",

        choices: [

            {
                text: "下載 App 使用",
                money: -5,
                energy: -3,
                goal11: 8
            },

            {
                text: "還是亂等車",
                money: 0,
                energy: -10,
                goal11: -3
            },

            {
                text: "直接搭 Uber",
                money: -250,
                energy: 15,
                goal11: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園資料中心",

        description:
        "資訊中心正在升級節能伺服器。",

        choices: [

            {
                text: "參加導覽活動",
                money: 0,
                energy: -12,
                goal9: 8,
                goal7: 5
            },

            {
                text: "只想吹冷氣",
                money: 0,
                energy: 8,
                goal7: -2
            },

            {
                text: "覺得完全看不懂",
                money: 0,
                energy: 5,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "AI 自動翻譯耳機",

        description:
        "科技展正在展示 AI 即時翻譯耳機。",

        choices: [

            {
                text: "體驗新科技",
                money: -100,
                energy: -5,
                goal9: 8,
                goal17: 3
            },

            {
                text: "覺得沒必要",
                money: 0,
                energy: 5,
                goal9: -3
            },

            {
                text: "偷偷拿去玩遊戲",
                money: 0,
                energy: 10,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "幫社團架網站",

        description:
        "社團需要一個活動網站，問你能不能接案幫忙。",

        choices: [

            {
                text: "接完整網站案",
                money: 500,
                energy: -45,
                goal9: 15
            },

            {
                text: "只做首頁",
                money: 180,
                energy: -18,
                goal9: 8
            },

            {
                text: "推薦別人接",
                money: 0,
                energy: 5,
                goal9: 2
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "修電腦打工",

        description:
        "同學電腦突然壞掉，問你能不能幫忙修。",

        choices: [

            {
                text: "完整幫他處理",
                money: 350,
                energy: -30,
                goal9: 12
            },

            {
                text: "只幫忙重灌",
                money: 120,
                energy: -10,
                goal9: 5
            },

            {
                text: "叫他送修",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "AI 海報設計",

        description:
        "教授希望有人幫忙做 AI 研討會海報。",

        choices: [

            {
                text: "接下全部設計",
                money: 400,
                energy: -35,
                goal9: 10
            },

            {
                text: "只幫忙排版",
                money: 150,
                energy: -12,
                goal9: 5
            },

            {
                text: "太麻煩不接",
                money: 0,
                energy: 15
            }

        ]
    }

];

const environmentEvents = [

    {
        category: "Environment",

        type: "normal",

        title: "顏萱的淨灘邀約",

        description:
        "顏萱揪你週末一起去淨灘。",

        choices: [

            {
                text: "跟她一起去",
                money: 0,
                energy: -20,
                goal14: 20
            },

            {
                text: "昨天熬夜太累，想休息",
                money: 0,
                energy: 8,
                goal14: -5
            },

            {
                text: "不行我要去打工",
                money: 80,
                energy: -9,
                goal8: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "Judi 的蔬食週",

        description:
        "Judi 提議這週午餐都吃素食來減碳。",

        choices: [

            {
                text: "好啊，一起救地球",
                money: -10,
                energy: -10,
                goal13: 10
            },

            {
                text: "沒肉我真的寫不動 code",
                money: 0,
                energy: 15,
                goal13: -5
            },

            {
                text: "帶他去吃高級素食",
                money: -300,
                energy: 5,
                goal13: 8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "凱咪的環保杯",

        description:
        "凱咪發現你買飲料沒帶杯子。",

        choices: [

            {
                text: "回宿舍拿",
                money: 5,
                energy: -12,
                goal12: 15
            },

            {
                text: "直接買",
                money: 0,
                energy: 2,
                goal12: -3
            },

            {
                text: "算了不喝了",
                money: 50,
                energy: -5,
                goal12: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "千千的惜食分享",

        description:
        "千千買了 i珍食 7 折麵包分你吃。",

        choices: [

            {
                text: "惜食一下",
                money: 60,
                energy: 5,
                goal12: 15
            },

            {
                text: "我要吃現做的",
                money: -80,
                energy: 8,
                goal12: -5
            },

            {
                text: "拿去餵流浪貓",
                money: 0,
                energy: -5,
                goal15: 10
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "柔苡的點餐建議",

        description:
        "柔苡發現你拿了一堆免洗筷。",

        choices: [

            {
                text: "默默放回去",
                money: 0,
                energy: -3,
                goal12: 10
            },

            {
                text: "下次再說",
                money: 0,
                energy: 2,
                goal12: -3
            },

            {
                text: "直接用手抓",
                money: 0,
                energy: -10,
                goal12: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "昕昕的自備餐盒",

        description:
        "昕昕帶了超可愛保鮮盒去買外帶。",

        choices: [

            {
                text: "被推坑買一個",
                money: -250,
                energy: -2,
                goal12: 15
            },

            {
                text: "洗餐盒太麻煩",
                money: 0,
                energy: 5,
                goal12: -5
            },

            {
                text: "跟她借",
                money: 0,
                energy: -8,
                goal12: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "松義霖的咖啡癮",

        description:
        "松義霖問你要不要用內用杯。",

        choices: [

            {
                text: "用內用杯",
                money: 0,
                energy: -5,
                goal12: 15
            },

            {
                text: "紙杯比較方便",
                money: 0,
                energy: 2,
                goal12: -4
            },

            {
                text: "叫外送星巴克",
                money: -150,
                energy: 10,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "安娜的下午茶",

        description:
        "安娜點外送，問你要不要塑膠袋。",

        choices: [

            {
                text: "不用袋子",
                money: 2,
                energy: -5,
                goal12: 10
            },

            {
                text: "加購塑膠袋",
                money: -2,
                energy: 2,
                goal12: -5
            },

            {
                text: "叫安娜幫我拿",
                money: 0,
                energy: 0,
                goal12: 2
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "團訂便當",

        description:
        "班上訂便當，要不要回收橡皮筋？",

        choices: [

            {
                text: "幫忙收集",
                money: 0,
                energy: -15,
                goal12: 12
            },

            {
                text: "懶得收",
                money: 0,
                energy: 2,
                goal12: -5
            },

            {
                text: "拿來射同學",
                money: 0,
                energy: -5,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "生鮮挑選",

        description:
        "超市有散裝水果與塑膠包裝水果。",

        choices: [

            {
                text: "買散裝水果",
                money: -10,
                energy: -8,
                goal12: 10
            },

            {
                text: "買保麗龍盒裝",
                money: 0,
                energy: 5,
                goal12: -5
            },

            {
                text: "買水果拼盤",
                money: -40,
                energy: 8,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "YouBike 競速",

        description:
        "松義霖約你騎 YouBike 去趕早八。",

        choices: [

            {
                text: "騎 YouBike",
                money: -5,
                energy: -20,
                goal13: 15
            },

            {
                text: "搭計程車",
                money: -120,
                energy: 10,
                goal13: -10
            },

            {
                text: "走路滑手機",
                money: 0,
                energy: -25,
                goal13: 8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "柔苡的冷氣監督",

        description:
        "柔苡發現你冷氣開 18 度。",

        choices: [

            {
                text: "調到 26 度",
                money: 10,
                energy: -5,
                goal13: 12
            },

            {
                text: "我真的很熱",
                money: -50,
                energy: 15,
                goal13: -8
            },

            {
                text: "去她房間吹",
                money: 50,
                energy: -10,
                goal13: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "千千的洗衣哲學",

        description:
        "千千看到你兩件衣服就洗衣服。",

        choices: [

            {
                text: "收集到滿再洗",
                money: 20,
                energy: -5,
                goal12: 15
            },

            {
                text: "現在洗比較安心",
                money: -20,
                energy: 5,
                goal12: -5
            },

            {
                text: "用手洗",
                money: 0,
                energy: -20,
                goal12: 8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "昕昕的省水妙招",

        description:
        "昕昕教你用除濕機的水沖廁所。",

        choices: [

            {
                text: "認真執行",
                money: 5,
                energy: -15,
                goal6: 15
            },

            {
                text: "太重搬不動",
                money: 0,
                energy: 5,
                goal6: -3
            },

            {
                text: "乾脆關掉除濕機",
                money: 10,
                energy: -2,
                goal13: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "安娜的舊物改造",

        description:
        "安娜想把紙箱做成收納盒。",

        choices: [

            {
                text: "陪她做",
                money: 0,
                energy: -25,
                goal12: 12
            },

            {
                text: "去 IKEA 買新的",
                money: -500,
                energy: -5,
                goal12: -8
            },

            {
                text: "直接丟掉",
                money: 0,
                energy: 5,
                goal12: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "師皇家的照明守則",

        description:
        "走廊燈忘記關了。",

        choices: [

            {
                text: "順手關燈",
                money: 0,
                energy: -2,
                goal13: 15
            },

            {
                text: "怕黑不敢關",
                money: 0,
                energy: 2,
                goal13: -3
            },

            {
                text: "把燈管拔掉",
                money: 0,
                energy: -10,
                goal13: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "顏萱的戰鬥澡",

        description:
        "顏萱挑戰五分鐘戰鬥澡。",

        choices: [

            {
                text: "一起挑戰",
                money: 10,
                energy: -10,
                goal6: 15
            },

            {
                text: "我要泡澡",
                money: -50,
                energy: 30,
                goal6: -10
            },

            {
                text: "去游泳池洗",
                money: -20,
                energy: -15,
                goal6: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "凱咪的廢電池",

        description:
        "凱咪有一堆廢電池。",

        choices: [

            {
                text: "拿去回收",
                money: 5,
                energy: -8,
                goal12: 15
            },

            {
                text: "直接丟垃圾桶",
                money: 0,
                energy: 2,
                goal12: -10
            },

            {
                text: "放房間當裝飾",
                money: 0,
                energy: -5,
                goal12: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "柔苡的植栽夢",

        description:
        "柔苡想在宿舍陽台種菜。",

        choices: [

            {
                text: "一起種",
                money: -50,
                energy: -25,
                goal15: 20
            },

            {
                text: "直接買菜",
                money: -30,
                energy: 5,
                goal15: -3
            },

            {
                text: "買塑膠假花",
                money: -100,
                energy: 2,
                goal15: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "快時尚特價",

        description:
        "昕昕看到網購特價。",

        choices: [

            {
                text: "衣服夠穿就好",
                money: 0,
                energy: 0,
                goal12: 15
            },

            {
                text: "多買三件",
                money: -500,
                energy: 5,
                goal12: -10
            },

            {
                text: "只買一件",
                money: -60,
                energy: 0,
                goal12: -3
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "宿舍垃圾分類",

        description:
        "宿舍最近開始嚴格執行垃圾分類。",

        choices: [

            {
                text: "認真分類",
                money: 0,
                energy: -10,
                goal12: 20
            },

            {
                text: "隨便亂丟",
                money: 0,
                energy: 5,
                goal12: -8
            },

            {
                text: "幫室友一起分",
                money: 0,
                energy: -20,
                goal12: 12
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "凱咪的二手衣",

        description:
        "凱咪邀你去二手市集逛逛。",

        choices: [

            {
                text: "買二手衣",
                money: -150,
                energy: -5,
                goal12: 20
            },

            {
                text: "只逛不買",
                money: 0,
                energy: 5,
                goal12: 5
            },

            {
                text: "直接買新品",
                money: -500,
                energy: 10,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "顏萱的省電計畫",

        description:
        "顏萱想統計宿舍哪些電器最耗電。",

        choices: [

            {
                text: "一起記錄",
                money: 20,
                energy: -15,
                goal13: 15
            },

            {
                text: "覺得太麻煩",
                money: 0,
                energy: 5,
                goal13: -3
            },

            {
                text: "直接拔別人插頭",
                money: 0,
                energy: -10,
                goal13: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "寶可夢千千的剩食便當",

        description:
        "便利商店正在賣即期便當。",

        choices: [

            {
                text: "買即期便當",
                money: 50,
                energy: 5,
                goal12: 10
            },

            {
                text: "買最新鮮的",
                money: -120,
                energy: 10,
                goal12: -5
            },

            {
                text: "乾脆不吃",
                money: 100,
                energy: -20,
                goal3: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "柔苡的環保吸管",

        description:
        "柔苡買了新的環保吸管組。",

        choices: [

            {
                text: "跟著買",
                money: -80,
                energy: -2,
                goal12: 15
            },

            {
                text: "直接用店家吸管",
                money: 0,
                energy: 5,
                goal12: -5
            },

            {
                text: "直接不用吸管",
                money: 0,
                energy: -3,
                goal12: 10
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "校園野餐日",

        description:
        "學生會舉辦低碳野餐活動。",

        choices: [

            {
                text: "自備餐具參加",
                money: -50,
                energy: -10,
                goal13: 20
            },

            {
                text: "買一堆免洗餐具",
                money: -30,
                energy: 8,
                goal12: -8
            },

            {
                text: "不想曬太陽",
                money: 0,
                energy: 10,
                goal13: -3
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "安娜的環保社",

        description:
        "安娜邀你加入環保社團。",

        choices: [

            {
                text: "加入社團",
                money: -100,
                energy: -25,
                goal13: 15
            },

            {
                text: "偶爾參加活動",
                money: 0,
                energy: -8,
                goal13: 5
            },

            {
                text: "直接拒絕",
                money: 0,
                energy: 8,
                goal13: -4
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "冷氣忘記關",

        description:
        "教室冷氣下課後忘了關。",

        choices: [

            {
                text: "回去關掉",
                money: 0,
                energy: -10,
                goal13: 15
            },

            {
                text: "反正不是我開的",
                money: 0,
                energy: 5,
                goal13: -5
            },

            {
                text: "順便多吹一下",
                money: 0,
                energy: 10,
                goal13: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "宿舍回收箱",

        description:
        "宿舍回收箱最近常常被亂丟垃圾。",

        choices: [

            {
                text: "重新整理分類",
                money: 0,
                energy: -20,
                goal12: 20
            },

            {
                text: "貼提醒紙條",
                money: -10,
                energy: -5,
                goal12: 10
            },

            {
                text: "當作沒看到",
                money: 0,
                energy: 5,
                goal12: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "庫洛米可云的綠色通勤",

        description:
        "庫洛米可云想挑戰一週不騎機車上課。",

        choices: [

            {
                text: "一起搭公車",
                money: -30,
                energy: -15,
                goal13: 15
            },

            {
                text: "繼續騎機車",
                money: -100,
                energy: 15,
                goal13: -8
            },

            {
                text: "走路去學校",
                money: 20,
                energy: -25,
                goal13: 20
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "校園植樹活動",

        description:
        "學校正在舉辦植樹活動。",

        choices: [

            {
                text: "一起種樹",
                money: 0,
                energy: -30,
                goal15: 20
            },

            {
                text: "拍照打卡就走",
                money: 0,
                energy: 5,
                goal15: -2
            },

            {
                text: "覺得太累不去",
                money: 0,
                energy: 12,
                goal15: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "松宜霖的省水挑戰",

        description:
        "松宜霖想挑戰一週節約用水。",

        choices: [

            {
                text: "一起挑戰",
                money: 30,
                energy: -10,
                goal6: 20
            },

            {
                text: "正常用水就好",
                money: 0,
                energy: 5,
                goal6: -2
            },

            {
                text: "洗超久熱水澡",
                money: -80,
                energy: 20,
                goal6: -10
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "昕昕的環保購物袋",

        description:
        "昕昕提醒你超市塑膠袋要收費。",

        choices: [

            {
                text: "使用購物袋",
                money: 5,
                energy: -2,
                goal12: 15
            },

            {
                text: "直接買塑膠袋",
                money: -5,
                energy: 5,
                goal12: -5
            },

            {
                text: "徒手抱回宿舍",
                money: 0,
                energy: -15,
                goal12: 10
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "環保餐廳",

        description:
        "附近新開了一家主打低碳飲食的餐廳。",

        choices: [

            {
                text: "去支持看看",
                money: -180,
                energy: 8,
                goal13: 20
            },

            {
                text: "還是吃速食",
                money: -120,
                energy: 15,
                goal13: -5
            },

            {
                text: "自己煮泡麵",
                money: -50,
                energy: -5,
                goal12: 5
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "垃圾減量挑戰",

        description:
        "班上正在比賽誰一週製造最少垃圾。",

        choices: [

            {
                text: "努力減少垃圾",
                money: 10,
                energy: -20,
                goal12: 15
            },

            {
                text: "作弊偷偷亂丟",
                money: 0,
                energy: 5,
                goal12: -10
            },

            {
                text: "覺得太麻煩放棄",
                money: 0,
                energy: 10,
                goal12: -5
            }

        ]
    },

    {
        category: "Environment",

        type: "money",

        title: "校園二手市集",

        description:
        "你整理出一些用不到的衣服和小物，決定去二手市集擺攤。",

        choices: [

            {
                text: "認真擺攤一下午",
                money: 300,
                energy: -30,
                goal12: 15
            },

            {
                text: "只賣幾樣東西",
                money: 120,
                energy: -12,
                goal12: 8
            },

            {
                text: "懶得整理",
                money: 0,
                energy: 10,
                goal12: -2
            }

        ]
    },

    {
        category: "Environment",

        type: "money",

        title: "回收換點數",

        description:
        "便利商店推出寶特瓶回收換點數活動。",

        choices: [

            {
                text: "收集一大袋去回收",
                money: 80,
                energy: -20,
                goal12: 12
            },

            {
                text: "只拿自己的去回收",
                money: 20,
                energy: -5,
                goal12: 5
            },

            {
                text: "直接丟一般垃圾",
                money: 0,
                energy: 5,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "money",

        title: "環保市集工讀",

        description:
        "學生會正在徵環保市集的一日工讀生。",

        choices: [

            {
                text: "工作一整天",
                money: 450,
                energy: -40,
                goal8: 10,
                goal12: 8
            },

            {
                text: "只上半天班",
                money: 180,
                energy: -15,
                goal8: 5
            },

            {
                text: "太累了不去",
                money: 0,
                energy: 15
            }

        ]
    }

];

const globalEvents = [

    {
        category: "Global",

        type: "normal",

        title: "國際交換生的邀請",

        description:
        "交換生 Judi 想邀你一起參加國際文化交流活動。",

        choices: [

            {
                text: "一起參加",
                money: -5,
                energy: -10,
                goal17: 10
            },

            {
                text: "太尷尬了不想去",
                money: 0,
                energy: 5,
                goal17: -3
            },

            {
                text: "線上參加就好",
                money: 0,
                energy: -3,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "網路上的仇恨留言",

        description:
        "你看到有人在留言區惡意攻擊不同國家的人。",

        choices: [

            {
                text: "理性留言制止",
                money: 0,
                energy: -8,
                goal16: 8
            },

            {
                text: "直接加入吵架",
                money: 0,
                energy: -15,
                goal16: -10
            },

            {
                text: "假裝沒看到",
                money: 0,
                energy: 3,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "公平貿易咖啡",

        description:
        "你發現公平貿易咖啡比較貴。",

        choices: [

            {
                text: "支持公平貿易",
                money: -20,
                energy: 2,
                goal17: 7
            },

            {
                text: "買便宜的就好",
                money: 10,
                energy: 0,
                goal17: -4
            },

            {
                text: "今天不喝咖啡",
                money: 30,
                energy: -5,
                goal17: 2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國合作專題",

        description:
        "教授邀請你加入跨國 SDGs 線上研究團隊。",

        choices: [

            {
                text: "加入團隊",
                money: 0,
                energy: -18,
                goal17: 12
            },

            {
                text: "太忙了拒絕",
                money: 0,
                energy: 10,
                goal17: -3
            },

            {
                text: "只參加部分會議",
                money: 0,
                energy: -8,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "假新聞轉發",

        description:
        "朋友傳來一篇來源不明的國際新聞。",

        choices: [

            {
                text: "先查證再分享",
                money: 0,
                energy: -5,
                goal16: 10
            },

            {
                text: "直接轉發",
                money: 0,
                energy: 0,
                goal16: -8
            },

            {
                text: "完全不理會",
                money: 0,
                energy: 3,
                goal16: 0
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際志工招募",

        description:
        "學校正在招募偏鄉國際教育志工。",

        choices: [

            {
                text: "報名參加",
                money: -100,
                energy: -25,
                goal17: 15
            },

            {
                text: "太累了不想參加",
                money: 0,
                energy: 15,
                goal17: -3
            },

            {
                text: "捐點物資支持",
                money: -50,
                energy: 0,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "戰爭新聞直播",

        description:
        "你看到國際衝突的即時新聞直播。",

        choices: [

            {
                text: "了解事件背景",
                money: 0,
                energy: -5,
                goal16: 8
            },

            {
                text: "只看懶人包",
                money: 0,
                energy: 3,
                goal16: -2
            },

            {
                text: "開始在留言區亂嘴",
                money: 0,
                energy: -10,
                goal16: -10
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際連署活動",

        description:
        "朋友邀你參與國際人權連署。",

        choices: [

            {
                text: "閱讀後參與",
                money: 0,
                energy: -6,
                goal16: 10
            },

            {
                text: "直接亂簽",
                money: 0,
                energy: -1,
                goal16: -3
            },

            {
                text: "不感興趣",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國線上會議",

        description:
        "你的專題需要半夜和國外學生開會。",

        choices: [

            {
                text: "熬夜參加",
                money: 0,
                energy: -25,
                goal17: 12
            },

            {
                text: "錄影看回放",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "直接缺席",
                money: 0,
                energy: 10,
                goal17: -5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "難民援助募款",

        description:
        "校園正在為國際難民進行募款。",

        choices: [

            {
                text: "捐款支持",
                money: -100,
                energy: 0,
                goal16: 10
            },

            {
                text: "分享活動資訊",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "滑過當沒看到",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際文化週",

        description:
        "學校舉辦國際文化週活動。",

        choices: [

            {
                text: "體驗不同文化",
                money: -20,
                energy: -10,
                goal17: 20
            },

            {
                text: "只去拿免費食物",
                money: 20,
                energy: -2,
                goal17: -2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際論壇直播",

        description:
        "教授推薦你看聯合國永續論壇直播。",

        choices: [

            {
                text: "認真觀看",
                money: 0,
                energy: -8,
                goal17: 15
            },

            {
                text: "掛著當背景音",
                money: 0,
                energy: 2,
                goal17: 1
            },

            {
                text: "直接睡覺",
                money: 0,
                energy: 10,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際合作比賽",

        description:
        "你和不同國家的學生一起參加黑客松。",

        choices: [

            {
                text: "積極合作",
                money: 0,
                energy: -30,
                goal17: 20
            },

            {
                text: "只做自己的部分",
                money: 0,
                energy: -10,
                goal17: 5
            },

            {
                text: "完全擺爛",
                money: 0,
                energy: 15,
                goal17: -8
            }

        ]
    },

    {
        category: "Development",

        title: "校園 AI 助教",

        description:
        "學校正在測試 AI 助教系統。",

        choices: [

            {
                text: "主動試用回饋",
                money: 0,
                energy: -15,
                goal9: 15
            },

            {
                text: "只拿來查答案",
                money: 0,
                energy: 5,
                goal4: -5
            },

            {
                text: "完全不用",
                money: 0,
                energy: 3,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        title: "智慧回收機",

        description:
        "校園新增智慧回收機，可以自動分類垃圾。",

        choices: [

            {
                text: "認真研究功能",
                money: 5,
                energy: -10,
                goal9: 12,
                goal11: 10
            },

            {
                text: "亂塞進去",
                money: 0,
                energy: 3,
                goal11: -5
            },

            {
                text: "直接丟一般垃圾",
                money: 0,
                energy: 5,
                goal11: -8
            }

        ]
    },

    {
        category: "Development",

        title: "宿舍智慧電表",

        description:
        "宿舍開始測試智慧電表系統。",

        choices: [

            {
                text: "觀察用電變化",
                money: 20,
                energy: -5,
                goal7: 15
            },

            {
                text: "覺得很麻煩",
                money: 0,
                energy: 3,
                goal7: -3
            },

            {
                text: "偷偷接延長線",
                money: 30,
                energy: -8,
                goal7: -8
            }

        ]
    },

    {
        category: "Development",

        title: "凱咪的程式競賽",

        description:
        "凱咪邀你參加智慧城市程式競賽。",

        choices: [

            {
                text: "熬夜做專案",
                money: 0,
                energy: -35,
                goal9: 15
            },

            {
                text: "只幫忙做 PPT",
                money: 0,
                energy: -10,
                goal9: 4
            },

            {
                text: "直接放棄",
                money: 0,
                energy: 12,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        title: "校園共享雨傘",

        description:
        "學校推出共享雨傘系統。",

        choices: [

            {
                text: "使用後記得歸還",
                money: -10,
                energy: -3,
                goal11: 15
            },

            {
                text: "直接帶回家",
                money: 50,
                energy: 5,
                goal11: -8
            },

            {
                text: "淋雨回宿舍",
                money: 0,
                energy: -15,
                goal3: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際環保論壇",

        description:
        "教授推薦你參加聯合國青年環保論壇直播。",

        choices: [

            {
                text: "認真參與討論",
                money: 0,
                energy: -15,
                goal17: 20
            },

            {
                text: "掛著當背景音",
                money: 0,
                energy: 3,
                goal17: 2
            },

            {
                text: "直接關掉",
                money: 0,
                energy: 8,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際災難募款",

        description:
        "某國發生重大地震，學校正在募款。",

        choices: [

            {
                text: "捐款支持",
                money: -200,
                energy: 0,
                goal17: 10
            },

            {
                text: "分享募款資訊",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "覺得離我太遠",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國線上筆友",

        description:
        "你收到一個韓國留學生祝祝的交流邀請。",

        choices: [

            {
                text: "認真交流文化",
                money: 0,
                energy: -10,
                goal17: 8
            },

            {
                text: "偶爾回訊息",
                money: 0,
                energy: -3,
                goal17: 3
            },

            {
                text: "直接已讀不回",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際和平連署",

        description:
        "朋友邀你參與反戰和平連署。",

        choices: [

            {
                text: "閱讀後參與",
                money: 0,
                energy: -8,
                goal16: 20
            },

            {
                text: "直接亂簽",
                money: 0,
                energy: -2,
                goal16: -3
            },

            {
                text: "完全不理",
                money: 0,
                energy: 5,
                goal16: -5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "假新聞危機",

        description:
        "社群開始瘋傳一則未經查證的國際新聞。",

        choices: [

            {
                text: "查證後再分享",
                money: 0,
                energy: -8,
                goal16: 20
            },

            {
                text: "直接轉發",
                money: 0,
                energy: 2,
                goal16: -10
            },

            {
                text: "當作沒看到",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "公平貿易巧克力",

        description:
        "你發現公平貿易巧克力比較貴。",

        choices: [

            {
                text: "支持公平貿易",
                money: -80,
                energy: 2,
                goal17: 15
            },

            {
                text: "買最便宜的",
                money: 30,
                energy: 0,
                goal17: -5
            },

            {
                text: "今天不吃甜食",
                money: 50,
                energy: -3,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際志工計畫",

        description:
        "學校正在招募海外教育志工。",

        choices: [

            {
                text: "報名參加",
                money: -500,
                energy: -35,
                goal17: 20
            },

            {
                text: "幫忙宣傳",
                money: 0,
                energy: -8,
                goal17: 10
            },

            {
                text: "太麻煩了",
                money: 0,
                energy: 10,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國合作黑客松",

        description:
        "你和外國學生一起參加 SDGs 黑客松。",

        choices: [

            {
                text: "積極合作",
                money: 0,
                energy: -40,
                goal17: 15
            },

            {
                text: "只做自己的部分",
                money: 0,
                energy: -12,
                goal17: 5
            },

            {
                text: "全程擺爛",
                money: 0,
                energy: 15,
                goal17: -8
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際文化節",

        description:
        "學校正在舉辦國際文化交流節。",

        choices: [

            {
                text: "體驗不同文化",
                money: -100,
                energy: -12,
                goal17: 10
            },

            {
                text: "只去吃免費食物",
                money: 50,
                energy: 3,
                goal17: -2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 8,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "網路言論衝突",

        description:
        "你看到有人在留言區攻擊不同國家的文化。",

        choices: [

            {
                text: "理性提醒對方",
                money: 0,
                energy: -10,
                goal16: 10
            },

            {
                text: "加入混戰",
                money: 0,
                energy: -20,
                goal16: -10
            },

            {
                text: "默默離開",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際活動翻譯工讀",

        description:
        "學校的國際交流活動需要臨時英文翻譯工讀生。",

        choices: [

            {
                text: "接下整場翻譯",
                money: 400,
                energy: -35,
                goal17: 12
            },

            {
                text: "只幫忙接待一小時",
                money: 120,
                energy: -10,
                goal17: 6
            },

            {
                text: "英文太緊張不接",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際文化節攤位",

        description:
        "國際文化節正在招募攤位工作人員。",

        choices: [

            {
                text: "負責整天攤位",
                money: 350,
                energy: -30,
                goal17: 10
            },

            {
                text: "只幫忙晚上",
                money: 150,
                energy: -12,
                goal17: 5
            },

            {
                text: "不想社交",
                money: 0,
                energy: 15
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "海外交換分享會",

        description:
        "國際處邀請你分享交換經驗。",

        choices: [

            {
                text: "認真準備分享",
                money: 250,
                energy: -25,
                goal17: 12
            },

            {
                text: "簡單講一下",
                money: 100,
                energy: -8,
                goal17: 5
            },

            {
                text: "拒絕邀請",
                money: 0,
                energy: 10
            }

        ]
    }

];

const societyEvents = [

    {
        category: "Society",

        type: "normal",

        title: "凱咪的健康講座",

        description:
        "凱咪拉你去聽一場關於心理健康與壓力管理的講座。",

        choices: [

            {
                text: "認真去聽",
                money: 0,
                energy: -15,
                goal3: 20
            },

            {
                text: "太累了回宿舍睡覺",
                money: 0,
                energy: 15,
                goal3: -3
            },

            {
                text: "只去拿簽到分數",
                money: 0,
                energy: -3,
                goal4: 5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的課業求救",

        description:
        "顏萱說她統計快爆炸了，問你能不能教她。",

        choices: [

            {
                text: "耐心教她",
                money: 0,
                energy: -18,
                goal4: 20
            },

            {
                text: "傳你自己的筆記給她",
                money: 0,
                energy: -5,
                goal4: 15
            },

            {
                text: "叫她自己去問老師",
                money: 0,
                energy: 5,
                goal4: -3
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "系上公益便當",

        description:
        "系學會發起公益便當活動，幫助弱勢家庭。",

        choices: [

            {
                text: "買一份支持",
                money: -80,
                energy: 0,
                goal1: 10,
                goal2: 10
            },

            {
                text: "幫忙宣傳活動",
                money: 0,
                energy: -10,
                goal1: 5,
                goal2: 5
            },

            {
                text: "覺得跟我無關",
                money: 0,
                energy: 5,
                goal1: -3
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的性別平等海報",

        description:
        "安娜要做性別平等宣導海報，問你要不要幫忙。",

        choices: [

            {
                text: "一起設計海報",
                money: 0,
                energy: -15,
                goal5: 15
            },

            {
                text: "幫她找資料",
                money: 0,
                energy: -8,
                goal5: 10
            },

            {
                text: "覺得這不重要",
                money: 0,
                energy: 5,
                goal5: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "柔苡的無障礙提醒",

        description:
        "柔苡發現教室門口堆了雜物，輪椅同學不好通過。",

        choices: [

            {
                text: "主動把雜物移開",
                money: 0,
                energy: -8,
                goal10: 20
            },

            {
                text: "通知助教處理",
                money: 0,
                energy: -3,
                goal10: 10
            },

            {
                text: "假裝沒看到",
                money: 0,
                energy: 5,
                goal10: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "千千的剩食關懷",

        description:
        "寶可夢千千想把活動剩下的餐點送給需要的人。",

        choices: [

            {
                text: "幫忙整理餐點",
                money: 0,
                energy: -12,
                goal2: 15
            },

            {
                text: "幫忙聯絡社福單位",
                money: 0,
                energy: -8,
                goal2: 15,
                goal10: 10
            },

            {
                text: "自己先打包回家",
                money: 50,
                energy: 5,
                goal2: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "松義霖的志工時數",

        description:
        "松義霖問你要不要一起去當課輔志工。",

        choices: [

            {
                text: "去陪小朋友讀書",
                money: 0,
                energy: -25,
                goal4: 15
            },

            {
                text: "捐幾本參考書",
                money: -100,
                energy: -3,
                goal4: 7
            },

            {
                text: "我自己的作業都寫不完",
                money: 0,
                energy: 12,
                goal4: -3
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "校園霸凌留言",

        description:
        "逸玲看到班群有人嘲笑同學的外表。",

        choices: [

            {
                text: "私訊關心被嘲笑的人",
                money: 0,
                energy: -8,
                goal10: 10
            },

            {
                text: "在群組提醒大家尊重",
                money: 0,
                energy: -12,
                goal10: 15
            },

            {
                text: "跟著按哈哈",
                money: 0,
                energy: 2,
                goal10: -10
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "健康午餐選擇",

        description:
        "午餐時間到了，你最近常熬夜又吃很油。",

        choices: [

            {
                text: "選均衡便當",
                money: -90,
                energy: 15,
                goal3: 10
            },

            {
                text: "繼續炸雞加珍奶",
                money: -150,
                energy: 20,
                goal3: -8
            },

            {
                text: "不吃了省錢",
                money: 80,
                energy: -15,
                goal3: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "可云的獎學金資訊",

        description:
        "庫洛米可云發現一個弱勢學生獎學金資訊，問你要不要幫忙分享。",

        choices: [

            {
                text: "整理成懶人包分享",
                money: 0,
                energy: -12,
                goal1: 8,
                goal10: 6
            },

            {
                text: "轉傳到班群",
                money: 0,
                energy: -3,
                goal1: 5
            },

            {
                text: "怕麻煩就算了",
                money: 0,
                energy: 4,
                goal1: -3
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "國小閱讀營",

        description:
        "學校要辦偏鄉國小閱讀營，需要大學生協助。",

        choices: [

            {
                text: "報名帶活動",
                money: -50,
                energy: -30,
                goal4: 20,
                goal10: 10
            },

            {
                text: "捐二手童書",
                money: -30,
                energy: -5,
                goal4: 10
            },

            {
                text: "覺得太遠不去",
                money: 0,
                energy: 10,
                goal4: -4
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的社團招生",

        description:
        "安娜的公益社團缺人，她拜託你幫忙招生。",

        choices: [

            {
                text: "幫她做招生文宣",
                money: 0,
                energy: -15,
                goal10: 15
            },

            {
                text: "推薦幾個朋友",
                money: 0,
                energy: -5,
                goal10: 10
            },

            {
                text: "已讀不回",
                money: 0,
                energy: 5,
                goal10: -3
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "月經平權提案",

        description:
        "學生會討論是否在校園提供免費生理用品。",

        choices: [

            {
                text: "支持並參與提案",
                money: 0,
                energy: -18,
                goal5: 15,
                goal10: 10
            },

            {
                text: "在社群分享資訊",
                money: 0,
                energy: -5,
                goal5: 10
            },

            {
                text: "覺得不關我的事",
                money: 0,
                energy: 5,
                goal5: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "宿舍室友情緒低落",

        description:
        "你的室友最近看起來很低落，常常不說話。",

        choices: [

            {
                text: "主動關心她",
                money: 0,
                energy: -10,
                goal3: 15
            },

            {
                text: "陪她去諮商中心",
                money: 0,
                energy: -18,
                goal3: 20
            },

            {
                text: "不要多管閒事",
                money: 0,
                energy: 5,
                goal3: -6
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "食物銀行活動",

        description:
        "附近社區正在募集罐頭與乾糧給需要的家庭。",

        choices: [

            {
                text: "買一些物資捐出",
                money: -150,
                energy: -5,
                goal1: 10,
                goal2: 15
            },

            {
                text: "幫忙搬運分類",
                money: 0,
                energy: -25,
                goal2: 20
            },

            {
                text: "自己最近也很窮",
                money: 0,
                energy: 5,
                goal1: -2
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "凱咪的校園陪伴計畫",

        description:
        "凱咪邀你一起參加陪伴弱勢兒童的週末活動。",

        choices: [
            {
                text: "一起去陪小朋友",
                money: 0,
                energy: -22,
                goal4: 15,
                goal10: 8
            },
            {
                text: "捐一些文具就好",
                money: -80,
                energy: -3,
                goal4: 7
            },
            {
                text: "週末想睡覺",
                money: 0,
                energy: 15,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的社福募款",

        description:
        "安娜正在幫社福機構募款，問你要不要支持。",

        choices: [
            {
                text: "捐一點錢支持",
                money: -100,
                energy: 0,
                goal1: 20
            },
            {
                text: "幫她分享貼文",
                money: 0,
                energy: -5,
                goal1: 10
            },
            {
                text: "滑過當沒看到",
                money: 0,
                energy: 5,
                goal1: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "柔苡的健康提醒",

        description:
        "柔苡發現你最近每天熬夜，提醒你要好好照顧身體。",

        choices: [
            {
                text: "今晚早點睡",
                money: 0,
                energy: 20,
                goal3: 8
            },
            {
                text: "繼續熬夜趕作業",
                money: 0,
                energy: -25,
                goal4: 6,
                goal3: -6
            },
            {
                text: "買能量飲硬撐",
                money: -60,
                energy: 8,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "千千的共餐活動",

        description:
        "千千邀你參加社區共餐，陪獨居長者吃飯聊天。",

        choices: [
            {
                text: "一起去幫忙",
                money: 0,
                energy: -20,
                goal3: 10,
                goal10: 15
            },
            {
                text: "買水果請她帶去",
                money: -100,
                energy: -2,
                goal3: 20
            },
            {
                text: "我社恐不去",
                money: 0,
                energy: 10,
                goal10: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "師皇家的學習小組",

        description:
        "右廷想成立期中考互助讀書會。",

        choices: [
            {
                text: "加入並分享筆記",
                money: 0,
                energy: -18,
                goal4: 18
            },
            {
                text: "只參加不發言",
                money: 0,
                energy: -8,
                goal4: 8
            },
            {
                text: "自己讀比較快",
                money: 0,
                energy: 5,
                goal4: -2
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的無障礙地圖",

        description:
        "顏萱想整理校園無障礙設施地圖。",

        choices: [
            {
                text: "陪她實地調查",
                money: 0,
                energy: -20,
                goal10: 15
            },
            {
                text: "幫忙整理表格",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "覺得用不到",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "松義霖的急救課",

        description:
        "松宜霖報名了 CPR 急救課，問你要不要一起去。",

        choices: [
            {
                text: "一起去學急救",
                money: -50,
                energy: -15,
                goal3: 20
            },
            {
                text: "看線上影片學",
                money: 0,
                energy: -5,
                goal3: 10
            },
            {
                text: "我應該用不到吧",
                money: 0,
                energy: 5,
                goal3: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "昕昕的免費家教",

        description:
        "昕昕想幫附近國中生做免費數學家教。",

        choices: [
            {
                text: "一起幫忙教",
                money: 0,
                energy: -25,
                goal4: 20
            },
            {
                text: "幫她出題目",
                money: 0,
                energy: -10,
                goal4: 10
            },
            {
                text: "數學我也不會",
                money: 0,
                energy: 8,
                goal4: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的平權討論",

        description:
        "安娜邀你參加一場性別平權議題討論會。",

        choices: [
            {
                text: "參加並認真聽",
                money: 0,
                energy: -12,
                goal5: 15
            },
            {
                text: "先查資料再決定",
                money: 0,
                energy: -5,
                goal5: 10
            },
            {
                text: "覺得太敏感不想碰",
                money: 0,
                energy: 5,
                goal5: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "柔苡的午餐分享",

        description:
        "柔苡發現有同學忘記帶錢吃午餐。",

        choices: [
            {
                text: "請他吃一餐",
                money: -80,
                energy: 0,
                goal2: 15
            },
            {
                text: "借他一點錢",
                money: -50,
                energy: -2,
                goal1: 8,
                goal2: 8
            },
            {
                text: "裝作沒聽到",
                money: 0,
                energy: 5,
                goal2: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "千千的偏鄉物資箱",

        description:
        "寶可夢千千想募集書本與生活用品寄到偏鄉學校。",

        choices: [
            {
                text: "整理物資一起寄",
                money: -80,
                energy: -20,
                goal4: 15,
                goal10: 15
            },
            {
                text: "捐幾本舊書",
                money: 0,
                energy: -5,
                goal4: 10
            },
            {
                text: "東西留著比較安心",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "凱咪的反歧視貼文",

        description:
        "凱咪看到社群上有人散播歧視言論。",

        choices: [
            {
                text: "理性留言提醒",
                money: 0,
                energy: -12,
                goal10: 10
            },
            {
                text: "私訊朋友討論",
                money: 0,
                energy: -5,
                goal10: 5
            },
            {
                text: "跟著開玩笑",
                money: 0,
                energy: 3,
                goal10: -8
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "乃辭的營養早餐",

        description:
        "乃辭說你最近都不吃早餐，會影響健康。",

        choices: [
            {
                text: "叫乃辭請我吃",
                money: 0,
                energy: 12,
                goal3: 10
            },
            {
                text: "喝咖啡撐過去",
                money: -50,
                energy: 5,
                goal3: -4
            },
            {
                text: "不吃省錢",
                money: 50,
                energy: -10,
                goal3: -6
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的校園安全巡查",

        description:
        "顏萱發現校園夜間照明不足，想回報學校。",

        choices: [
            {
                text: "一起整理問題地點",
                money: 0,
                energy: -15,
                goal10: 6,
                goal3: 20
            },
            {
                text: "幫忙寫回報信",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "反正我不晚上出門",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "逸玲的公益路跑",

        description:
        "逸玲邀你參加為弱勢兒童募款的公益路跑。",

        choices: [
            {
                text: "報名參加",
                money: -100,
                energy: -30,
                goal3: 15,
                goal1: 15
            },
            {
                text: "只捐款不跑",
                money: -150,
                energy: 0,
                goal1: 10
            },
            {
                text: "我跑去吃宵夜",
                money: -120,
                energy: 8,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",

        type: "money",

        title: "課輔家教",

        description:
        "學弟妹想找人幫忙複習考試，你可以接一小時家教。",

        choices: [

            {
                text: "認真教完整堂",
                money: 250,
                energy: -25,
                goal4: 12
            },

            {
                text: "只幫忙解幾題",
                money: 80,
                energy: -8,
                goal4: 5
            },

            {
                text: "今天太累不接",
                money: 0,
                energy: 15
            }

        ]
    },

    {
        category: "Society",

        type: "money",

        title: "社團活動工讀",

        description:
        "校慶活動缺人手，需要臨時工讀。",

        choices: [

            {
                text: "從早忙到晚",
                money: 500,
                energy: -45,
                goal8: 10
            },

            {
                text: "只幫忙下午",
                money: 200,
                energy: -18,
                goal8: 5
            },

            {
                text: "直接裝沒看到訊息",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Society",

        type: "money",

        title: "陪讀計畫",

        description:
        "圖書館正在招募弱勢兒童陪讀志工。",

        choices: [

            {
                text: "認真陪讀",
                money: 180,
                energy: -30,
                goal4: 15,
                goal10: 5
            },

            {
                text: "只做簡單協助",
                money: 80,
                energy: -10,
                goal4: 5
            },

            {
                text: "今天想休息",
                money: 0,
                energy: 12
            }

        ]
    }

];

/* ADDITIONAL ENVIRONMENT EVENTS */

environmentEvents.push(

    {
        category: "Environment",

        type: "normal",

        title: "凱倫的第三杯手搖杯",

        description:
        "凱倫今天第三杯手搖杯喝到一半，突然發現自己又忘記帶環保杯。",

        choices: [

            {
                text: "提醒她下次帶環保杯",
                money: 0,
                energy: -5,
                goal12: 12
            },

            {
                text: "陪她買新的環保杯",
                money: -120,
                energy: -8,
                goal12: 18
            },

            {
                text: "再揪她買第四杯",
                money: -60,
                energy: 10,
                goal12: -8
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "快俠的慢速淨灘任務",

        description:
        "快俠慢慢地拖著回收袋走向海邊，大家已經撿完一半垃圾了。",

        choices: [

            {
                text: "陪快俠慢慢撿完",
                money: 0,
                energy: -18,
                goal14: 20
            },

            {
                text: "幫快俠分配大家各自負責區域",
                money: 0,
                energy: -10,
                goal14: 15
            },

            {
                text: "嫌他太慢直接放棄",
                money: 0,
                energy: 8,
                goal14: -6
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "胡尼克的回收漏洞",

        description:
        "胡尼克發現有人把一般垃圾偷偷塞進回收桶，還說這樣比較省時間。",

        choices: [

            {
                text: "阻止胡尼克並重新分類",
                money: 0,
                energy: -15,
                goal12: 20
            },

            {
                text: "貼一張分類提醒紙",
                money: -10,
                energy: -5,
                goal12: 10
            },

            {
                text: "跟著假裝是回收物",
                money: 0,
                energy: 5,
                goal12: -10
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "楊咩咩的塑膠袋政策",

        description:
        "楊咩咩宣布今天買十個塑膠袋送一個，還說這是促進經濟。",

        choices: [

            {
                text: "公開反對並推廣購物袋",
                money: 0,
                energy: -20,
                goal12: 20
            },

            {
                text: "自己拒絕塑膠袋",
                money: 5,
                energy: -3,
                goal12: 10
            },

            {
                text: "趁優惠買一大疊",
                money: -30,
                energy: 5,
                goal12: -12
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "露露的冷氣抗議",

        description:
        "露露一進教室就尖聲說太熱，堅持冷氣要開到 16 度。",

        choices: [

            {
                text: "建議調到 26 度再開電扇",
                money: 10,
                energy: -8,
                goal13: 18
            },

            {
                text: "請她先冷靜喝水",
                money: 0,
                energy: -3,
                goal13: 6
            },

            {
                text: "照她意思開到 16 度",
                money: -60,
                energy: 12,
                goal13: -12
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "泰瑞的河川偵查",

        description:
        "泰瑞在水溝旁聞到怪味，懷疑有人亂倒廢水。",

        choices: [

            {
                text: "和泰瑞一起回報污染問題",
                money: 0,
                energy: -15,
                goal6: 20
            },

            {
                text: "拍照記錄後通知學校",
                money: 0,
                energy: -8,
                goal6: 15
            },

            {
                text: "覺得水溝本來就臭",
                money: 0,
                energy: 5,
                goal6: -6
            }

        ]
    },

    {
        category: "Environment",

        type: "normal",

        title: "蓋瑞的省電巡邏",

        description:
        "蓋瑞悄悄滑過走廊，發現好幾間空教室的燈都沒關。",

        choices: [

            {
                text: "跟著蓋瑞一起關燈",
                money: 5,
                energy: -5,
                goal13: 18
            },

            {
                text: "只關最近的一間",
                money: 2,
                energy: -2,
                goal13: 8
            },

            {
                text: "怕蓋瑞所以逃走",
                money: 0,
                energy: 8,
                goal13: -4
            }

        ]
    },

    {
        category: "Environment",

        type: "money",

        title: "狸寶的瓶罐尋寶圖",

        description:
        "狸寶畫了一張校園瓶罐尋寶圖，說回收點數就是今天的寶藏。",

        choices: [

            {
                text: "照地圖收集回收物",
                money: 150,
                energy: -25,
                goal12: 18
            },

            {
                text: "只撿路上看到的瓶子",
                money: 40,
                energy: -8,
                goal12: 8
            },

            {
                text: "把地圖拿去墊便當",
                money: 0,
                energy: 5,
                goal12: -5
            }

        ]
    }

);


/* ADDITIONAL SOCIETY EVENTS */

societyEvents.push(

    {
        category: "Society",

        type: "normal",

        title: "依林的深夜訊息",

        description:
        "依林凌晨三點還在線上，說她睡不著，也不知道明天上課會不會醒。",

        choices: [

            {
                text: "勸她先休息並調整作息",
                money: 0,
                energy: -8,
                goal3: 15
            },

            {
                text: "陪她聊一下再提醒求助",
                money: 0,
                energy: -18,
                goal3: 20
            },

            {
                text: "跟她一起熬夜滑手機",
                money: 0,
                energy: -25,
                goal3: -8
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "快俠的慢慢陪伴計畫",

        description:
        "快俠說陪伴弱勢兒童不需要快，只需要有耐心。",

        choices: [

            {
                text: "陪快俠一起去課輔",
                money: 0,
                energy: -22,
                goal4: 18,
                goal10: 8
            },

            {
                text: "幫忙準備教材",
                money: 0,
                energy: -10,
                goal4: 10
            },

            {
                text: "覺得太慢太累不去",
                money: 0,
                energy: 10,
                goal4: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "胡尼克的排隊插隊術",

        description:
        "胡尼克想用『我只是借過』的理由插隊領公益便當。",

        choices: [

            {
                text: "提醒他公平排隊",
                money: 0,
                energy: -8,
                goal10: 15
            },

            {
                text: "請工作人員協助維持秩序",
                money: 0,
                energy: -5,
                goal10: 10
            },

            {
                text: "幫他一起插隊",
                money: 0,
                energy: 5,
                goal10: -10
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "楊咩咩的偏心獎學金",

        description:
        "楊咩咩想把獎學金優先發給會稱讚他的人。",

        choices: [

            {
                text: "提出公平審查標準",
                money: 0,
                energy: -20,
                goal10: 18,
                goal16: 8
            },

            {
                text: "匿名回報不公平問題",
                money: 0,
                energy: -10,
                goal16: 12
            },

            {
                text: "立刻寫信稱讚楊咩咩",
                money: 100,
                energy: 5,
                goal10: -12
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "露露的公益演唱會",

        description:
        "露露想辦公益演唱會募款，但第一排同學已經默默戴上耳塞。",

        choices: [

            {
                text: "幫她規劃合理音量",
                money: 0,
                energy: -15,
                goal3: 8,
                goal10: 10
            },

            {
                text: "協助募款與宣傳",
                money: 0,
                energy: -18,
                goal1: 15
            },

            {
                text: "只賣最貴 VIP 票",
                money: 300,
                energy: -5,
                goal10: -8
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "蓋瑞的冷靜調解",

        description:
        "蓋瑞滑進小組會議時，大家正在為分工吵架。",

        choices: [

            {
                text: "和蓋瑞一起重新分工",
                money: 0,
                energy: -15,
                goal10: 15
            },

            {
                text: "請大家輪流發言",
                money: 0,
                energy: -8,
                goal16: 10
            },

            {
                text: "趁混亂把工作推掉",
                money: 0,
                energy: 8,
                goal10: -8
            }

        ]
    },

    {
        category: "Society",

        type: "money",

        title: "蓋瑞的靜音家教",

        description:
        "蓋瑞講題目很冷靜，學弟妹想請你和他一起開考前家教班。",

        choices: [

            {
                text: "一起教完整堂課",
                money: 280,
                energy: -25,
                goal4: 15
            },

            {
                text: "只整理重點講義",
                money: 100,
                energy: -10,
                goal4: 8
            },

            {
                text: "覺得蓋瑞太有壓迫感不接",
                money: 0,
                energy: 10,
                goal4: -2
            }

        ]
    }

);


/* ADDITIONAL DEVELOPMENT EVENTS */

developmentEvents.push(

    {
        category: "Development",

        type: "normal",

        title: "茸茸博士的 AI 垃圾桶",

        description:
        "茸茸博士的 AI 垃圾桶又壞了，現在會把所有東西都分類成『可能是披薩』。",

        choices: [

            {
                text: "完整修好辨識模型",
                money: 0,
                energy: -35,
                goal9: 18,
                goal12: 8
            },

            {
                text: "只修基本分類功能",
                money: 0,
                energy: -18,
                goal9: 10
            },

            {
                text: "建議大家不要餵垃圾桶",
                money: 0,
                energy: 5,
                goal9: 2
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "快俠的慢速 App 開發",

        description:
        "快俠想做一個永續生活 App，但他打字速度慢到游標看起來在冬眠。",

        choices: [

            {
                text: "幫他規劃功能並分工",
                money: -20,
                energy: -25,
                goal9: 18
            },

            {
                text: "只幫忙做首頁",
                money: 0,
                energy: -10,
                goal9: 8
            },

            {
                text: "等他打完再說",
                money: 0,
                energy: 12,
                goal9: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "胡尼克的智慧門禁漏洞",

        description:
        "胡尼克發現智慧門禁可以用奇怪角度刷卡，還想把它當祕密捷徑。",

        choices: [

            {
                text: "回報系統漏洞",
                money: 0,
                energy: -12,
                goal9: 12,
                goal16: 10
            },

            {
                text: "提醒大家不要濫用",
                money: 0,
                energy: -5,
                goal16: 8
            },

            {
                text: "跟胡尼克一起鑽漏洞",
                money: 0,
                energy: 8,
                goal16: -10
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "楊咩咩的智慧城市大計",

        description:
        "楊咩咩宣布要蓋智慧城市，但預算一半拿去做自己的巨型銅像。",

        choices: [

            {
                text: "要求公開預算與資料",
                money: 0,
                energy: -20,
                goal11: 15,
                goal16: 10
            },

            {
                text: "提出真正的低碳交通方案",
                money: -30,
                energy: -22,
                goal11: 18
            },

            {
                text: "幫楊咩咩的銅像按讚",
                money: 50,
                energy: 5,
                goal11: -12
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "露露的 AI 助理",

        description:
        "露露買了 AI 助理，結果它只會用超高音提醒大家交作業。",

        choices: [

            {
                text: "幫她調整提醒設定",
                money: 0,
                energy: -12,
                goal9: 12
            },

            {
                text: "建議加入音量控制",
                money: 0,
                energy: -15,
                goal9: 10,
                goal10: 8
            },

            {
                text: "拿來惡作劇叫醒全宿舍",
                money: 0,
                energy: 8,
                goal9: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "泰瑞的水質感測器",

        description:
        "泰瑞想用水質感測器監測校園池塘，但他一直把自己的尾巴掃到感測器。",

        choices: [

            {
                text: "幫他重新固定設備",
                money: -50,
                energy: -18,
                goal6: 12,
                goal9: 12
            },

            {
                text: "協助整理水質資料",
                money: 0,
                energy: -10,
                goal9: 8
            },

            {
                text: "把感測器當玩具丟水裡",
                money: -100,
                energy: 5,
                goal9: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "凱倫的智慧宿舍排程",

        description:
        "凱倫想設計宿舍節電排程，讓冷氣、電燈和除濕機不要同時爆衝。",

        choices: [

            {
                text: "一起設計節能排程",
                money: -30,
                energy: -22,
                goal7: 15,
                goal9: 10
            },

            {
                text: "只協助測試一週",
                money: 0,
                energy: -8,
                goal7: 8
            },

            {
                text: "全部設備一起開才爽",
                money: -120,
                energy: 10,
                goal7: -10
            }

        ]
    }

);


/* ADDITIONAL GLOBAL EVENTS */

globalEvents.push(

    {
        category: "Global",

        type: "normal",

        title: "依林的跨國半夜會議",

        description:
        "依林半夜睡不著，剛好遇到跨國小組會議開始。",

        choices: [

            {
                text: "參加會議並做紀錄",
                money: 0,
                energy: -25,
                goal17: 15
            },

            {
                text: "只聽重點再補眠",
                money: 0,
                energy: -10,
                goal17: 8
            },

            {
                text: "邊開會邊滑短影音",
                money: 0,
                energy: -15,
                goal17: -5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "快俠的慢速跨國會議",

        description:
        "快俠參加跨國線上會議，每次開口時大家都以為網路延遲。",

        choices: [

            {
                text: "幫他整理重點再發言",
                money: 0,
                energy: -12,
                goal17: 15
            },

            {
                text: "協助做會議紀錄",
                money: 0,
                energy: -10,
                goal17: 10
            },

            {
                text: "直接把他靜音",
                money: 0,
                energy: 5,
                goal17: -6
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "胡尼克的翻譯小聰明",

        description:
        "胡尼克用翻譯軟體亂翻國際合作文件，還說外國同學應該看得懂他的靈魂。",

        choices: [

            {
                text: "幫他重新確認翻譯",
                money: 0,
                energy: -15,
                goal17: 15
            },

            {
                text: "請組員一起校對",
                money: 0,
                energy: -8,
                goal17: 10
            },

            {
                text: "直接交出去賭運氣",
                money: 0,
                energy: 8,
                goal17: -8
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "楊咩咩的國際形象工程",

        description:
        "楊咩咩想參加國際永續論壇，但簡報全是自己的自拍照。",

        choices: [

            {
                text: "幫他改成真正的永續內容",
                money: 0,
                energy: -25,
                goal17: 15,
                goal16: 8
            },

            {
                text: "提醒他要公開城市數據",
                money: 0,
                energy: -12,
                goal16: 12
            },

            {
                text: "幫自拍照加濾鏡",
                money: 50,
                energy: 5,
                goal17: -10
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "露露的國際文化週",

        description:
        "露露在國際文化週介紹台灣美食，外國學生以為警報響了。",

        choices: [

            {
                text: "提醒她用正常音量介紹",
                money: 0,
                energy: -8,
                goal17: 12
            },

            {
                text: "幫她準備英文介紹卡",
                money: -20,
                energy: -12,
                goal17: 15
            },

            {
                text: "讓她繼續震撼全場",
                money: 0,
                energy: 5,
                goal17: -6
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "泰瑞的水域保育交流",

        description:
        "泰瑞被邀請參加國際水域保育交流，他興奮到一直拍尾巴。",

        choices: [

            {
                text: "陪他準備保育簡報",
                money: 0,
                energy: -18,
                goal6: 12,
                goal17: 12
            },

            {
                text: "協助整理台灣案例",
                money: 0,
                energy: -10,
                goal17: 10
            },

            {
                text: "只叫他表演拍尾巴",
                money: 0,
                energy: 5,
                goal17: -5
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "蓋瑞的國際翻譯任務",

        description:
        "蓋瑞英文很流利，國際處請你們一起接待外國來賓。",

        choices: [

            {
                text: "和蓋瑞接完整場活動",
                money: 420,
                energy: -35,
                goal17: 15
            },

            {
                text: "只幫忙接待一小時",
                money: 120,
                energy: -10,
                goal17: 6
            },

            {
                text: "怕來賓怕蓋瑞所以拒絕",
                money: 0,
                energy: 10,
                goal17: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "狸寶的泡麵外交",

        description:
        "狸寶想寄泡麵給外國筆友，說這是最真誠的文化交流。",

        choices: [

            {
                text: "幫他附上文化介紹",
                money: -50,
                energy: -8,
                goal17: 12
            },

            {
                text: "一起準備台灣零食包",
                money: -120,
                energy: -12,
                goal17: 15
            },

            {
                text: "只寄空包裝袋",
                money: 0,
                energy: 5,
                goal17: -8
            }

        ]
    }

);

/* EVENT POOLS */

const eventPools = {
    Environment: environmentEvents,
    Society: societyEvents,
    Development: developmentEvents,
    Global: globalEvents
};