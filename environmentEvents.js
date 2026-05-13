const environmentEvents = [

    {
        category: "Environment",

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
    }

];