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
                goal14: 10
            },

            {
                text: "昨天熬夜太累，想休息",
                money: 0,
                energy: 8,
                goal14: -5
            },

            {
                text: "不行我要去打工",
                money: 13,
                energy: -9,
                goal8: 5
            }

        ]
    },

    {
        category: "Environment",

        title: "師皇家的蔬食週",

        description:
        "師皇家提議這週午餐都吃素食來減碳。",

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
                goal12: 8
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
                goal12: 10
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
                goal15: 5
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
                goal12: 8
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
                goal12: 10
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
                goal12: 8
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
                goal13: 10
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
                goal12: 10
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
                goal6: 12
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
                goal12: 10
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
                goal13: 8
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
                goal6: 10
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
                goal12: 10
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
                goal15: 12
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
                goal12: 10
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
    }

];