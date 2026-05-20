const environmentEvents = [

    {
        category: "Environment",
        type: "normal",
        title: "顏萱的淨灘邀約",
        description:
            "顏萱揪你週末去淨灘，還說海邊的垃圾已經多到快能拼出一幅抽象畫。",
        choices: [
            {
                text: "跟她一起去淨灘",
                money: 0,
                energy: -25,
                goal14: 20
            },
            {
                text: "幫忙準備垃圾袋和手套",
                money: -30,
                energy: -10,
                goal14: 10
            },
            {
                text: "躺在宿舍假裝沒看到訊息",
                money: 0,
                energy: 10,
                goal14: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "Judi 的蔬食實驗",
        description:
            "Judi 提議這週午餐都吃蔬食，說想看看自己能不能靠豆腐活下去。",
        choices: [
            {
                text: "陪她一起吃蔬食",
                money: -20,
                energy: -8,
                goal13: 12,
                goal12: 5
            },
            {
                text: "找一家好吃的蔬食餐廳",
                money: -180,
                energy: 5,
                goal13: 10
            },
            {
                text: "說沒肉真的寫不動 code",
                money: 0,
                energy: 12,
                goal13: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "凱倫的第三杯手搖",
        description:
            "凱倫今天已經喝到第三杯手搖飲，終於開始思考杯子到底要不要回收。",
        choices: [
            {
                text: "提醒她使用環保杯",
                money: 5,
                energy: -5,
                goal12: 12
            },
            {
                text: "幫她清洗環保杯",
                money: 0,
                energy: -12,
                goal12: 15
            },
            {
                text: "陪她再買一杯壓壓驚",
                money: -60,
                energy: 8,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "千千的惜食麵包",
        description:
            "千千買到即期七折麵包，興奮地說這不是剩食，是被低估的晚餐。",
        choices: [
            {
                text: "跟她一起惜食",
                money: 50,
                energy: 5,
                goal12: 15
            },
            {
                text: "分送給還沒吃飯的同學",
                money: 0,
                energy: -8,
                goal12: 12
            },
            {
                text: "堅持只吃現做的",
                money: -100,
                energy: 8,
                goal12: -6
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "柔苡的免洗筷警報",
        description:
            "柔苡看到你拿了一大把免洗筷，眼神瞬間比期末考還嚴肅。",
        choices: [
            {
                text: "默默把多拿的放回去",
                money: 0,
                energy: -3,
                goal12: 10
            },
            {
                text: "改用自己的餐具",
                money: 0,
                energy: -5,
                goal12: 15
            },
            {
                text: "說筷子多拿比較有安全感",
                money: 0,
                energy: 3,
                goal12: -6
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "昕昕的可愛餐盒",
        description:
            "昕昕帶著超可愛保鮮盒去買外帶，整個便當看起來突然變高級。",
        choices: [
            {
                text: "被推坑買一個餐盒",
                money: -250,
                energy: -5,
                goal12: 15
            },
            {
                text: "跟她借一次餐盒",
                money: 0,
                energy: -8,
                goal12: 6
            },
            {
                text: "覺得洗餐盒太麻煩",
                money: 0,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "露露的高級環保袋",
        description:
            "露露拿出一個看起來比你的書包還貴的環保袋，尖聲說這叫『永續時尚』。",
        choices: [
            {
                text: "使用自己的購物袋",
                money: 5,
                energy: -2,
                goal12: 12
            },
            {
                text: "跟露露借高級環保袋",
                money: 0,
                energy: -5,
                goal12: 8
            },
            {
                text: "直接買塑膠袋",
                money: -5,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "快俠的慢速關燈",
        description:
            "快俠經過空教室，發現燈沒關，但他走到開關前花了整整三分鐘。",
        choices: [
            {
                text: "陪他一起把燈關掉",
                money: 0,
                energy: -3,
                goal13: 12
            },
            {
                text: "幫他快轉完成關燈任務",
                money: 0,
                energy: -2,
                goal13: 10
            },
            {
                text: "覺得反正不是自己開的",
                money: 0,
                energy: 5,
                goal13: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "胡尼克的省電歪招",
        description:
            "胡尼克說他找到省電方法：偷偷把別人的延長線關掉。",
        choices: [
            {
                text: "教他正確省電方式",
                money: 0,
                energy: -10,
                goal13: 8
            },
            {
                text: "帶他一起檢查公共空間用電",
                money: 0,
                energy: -15,
                goal13: 12
            },
            {
                text: "假裝沒聽到這個危險計畫",
                money: 0,
                energy: 5,
                goal13: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "依林的深夜冷氣",
        description:
            "依林半夜睡不著，發現交誼廳冷氣沒關，整間房間冷得像企鵝宿舍。",
        choices: [
            {
                text: "陪她去關冷氣",
                money: 10,
                energy: -8,
                goal13: 15
            },
            {
                text: "設定定時關機提醒",
                money: 0,
                energy: -12,
                goal13: 12
            },
            {
                text: "順便進去吹一下",
                money: 0,
                energy: 8,
                goal13: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "泰瑞的雨水收集桶",
        description:
            "泰瑞想在宿舍陽台放雨水收集桶，說鴨嘴獸對水資源很敏感。",
        choices: [
            {
                text: "幫他設計安全收集方式",
                money: -30,
                energy: -18,
                goal6: 15
            },
            {
                text: "拿雨水澆植物",
                money: 0,
                energy: -8,
                goal6: 8,
                goal15: 5
            },
            {
                text: "覺得陽台會變水族館",
                money: 0,
                energy: 5,
                goal6: -4
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "蓋瑞的落葉堆肥",
        description:
            "蓋瑞在校園角落發現一堆落葉，提議做成堆肥，眼神像發現寶藏。",
        choices: [
            {
                text: "參加堆肥工作坊",
                money: 0,
                energy: -18,
                goal15: 15
            },
            {
                text: "幫忙收集落葉",
                money: 0,
                energy: -12,
                goal15: 10
            },
            {
                text: "覺得很髒不想碰",
                money: 0,
                energy: 8,
                goal15: -4
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "楊咩咩的停車場計畫",
        description:
            "楊咩咩提議把校園小草地改成停車場，理由是『草又不會繳停車費』。",
        choices: [
            {
                text: "提出保留綠地方案",
                money: 0,
                energy: -20,
                goal15: 15,
                goal13: 5
            },
            {
                text: "參加討論會反對開發",
                money: 0,
                energy: -15,
                goal15: 12
            },
            {
                text: "覺得多一點停車位也不錯",
                money: 0,
                energy: 5,
                goal15: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "安娜的舊紙箱改造",
        description:
            "安娜想把快遞紙箱改造成收納盒，但膠帶已經快把她本人黏住。",
        choices: [
            {
                text: "陪她完成紙箱改造",
                money: 0,
                energy: -25,
                goal12: 12
            },
            {
                text: "幫她整理可回收紙箱",
                money: 0,
                energy: -10,
                goal12: 8
            },
            {
                text: "去買新的收納盒",
                money: -500,
                energy: -5,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "顏萱的五分鐘戰鬥澡",
        description:
            "顏萱挑戰五分鐘洗完澡，還拿手機計時，氣勢像在跑百米。",
        choices: [
            {
                text: "一起挑戰五分鐘洗澡",
                money: 10,
                energy: -10,
                goal6: 15
            },
            {
                text: "改成十分鐘內完成",
                money: 5,
                energy: -5,
                goal6: 8
            },
            {
                text: "決定慢慢泡澡放空",
                money: -50,
                energy: 25,
                goal6: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "柔苡的陽台菜園",
        description:
            "柔苡想在宿舍陽台種菜，但她連花盆要不要排隊都安排好了。",
        choices: [
            {
                text: "一起種陽台小菜園",
                money: -50,
                energy: -25,
                goal15: 18
            },
            {
                text: "幫忙照顧一盆香草",
                money: -20,
                energy: -10,
                goal15: 10
            },
            {
                text: "買塑膠假花假裝很綠",
                money: -100,
                energy: 2,
                goal15: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "昕昕的快時尚購物車",
        description:
            "昕昕看到網購特價，購物車裡的衣服多到像在準備開服裝店。",
        choices: [
            {
                text: "提醒她衣服夠穿就好",
                money: 0,
                energy: -5,
                goal12: 15
            },
            {
                text: "建議她逛二手市集",
                money: -100,
                energy: -8,
                goal12: 12
            },
            {
                text: "一起多買三件湊免運",
                money: -500,
                energy: 8,
                goal12: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "凱咪的廢電池山",
        description:
            "凱咪抽屜裡有一堆廢電池，看起來像迷你危險礦山。",
        choices: [
            {
                text: "拿去電池回收箱",
                money: 5,
                energy: -8,
                goal12: 15
            },
            {
                text: "幫她做回收提醒",
                money: 0,
                energy: -10,
                goal12: 10
            },
            {
                text: "放房間當神秘收藏",
                money: 0,
                energy: -5,
                goal12: -6
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "松義霖的 YouBike 早八",
        description:
            "松義霖約你騎 YouBike 趕早八，他說這叫低碳衝刺。",
        choices: [
            {
                text: "騎 YouBike 去上課",
                money: -5,
                energy: -20,
                goal13: 15
            },
            {
                text: "提早出門慢慢走",
                money: 0,
                energy: -25,
                goal13: 10
            },
            {
                text: "直接搭計程車救命",
                money: -120,
                energy: 10,
                goal13: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "依林的冰箱考古",
        description:
            "依林半夜找宵夜，打開宿舍冰箱後發現一堆快過期食物。",
        choices: [
            {
                text: "整理並分享快過期食物",
                money: 20,
                energy: -18,
                goal12: 15
            },
            {
                text: "只整理自己的東西",
                money: 0,
                energy: -6,
                goal12: 6
            },
            {
                text: "關上冰箱當沒看見",
                money: 0,
                energy: 5,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "快俠的慢活步行日",
        description:
            "快俠提議今天不要騎車，用慢速步行感受校園，雖然他可能會走到明天。",
        choices: [
            {
                text: "陪他走路上課",
                money: 0,
                energy: -20,
                goal13: 12
            },
            {
                text: "改騎腳踏車陪他",
                money: -10,
                energy: -15,
                goal13: 10
            },
            {
                text: "偷偷叫車先走",
                money: -150,
                energy: 10,
                goal13: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "胡尼克的垃圾分類捷徑",
        description:
            "胡尼克說垃圾分類太麻煩，所以他發明了『全部丟同一袋法』。",
        choices: [
            {
                text: "盯著他重新分類",
                money: 0,
                energy: -18,
                goal12: 18
            },
            {
                text: "貼一張分類提醒表",
                money: -10,
                energy: -6,
                goal12: 10
            },
            {
                text: "被他說服偷懶一次",
                money: 0,
                energy: 8,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "泰瑞的飲水機漏水事件",
        description:
            "泰瑞發現宿舍飲水機一直滴水，盯著水滴的表情比期末成績還沉重。",
        choices: [
            {
                text: "馬上通報修理",
                money: 0,
                energy: -6,
                goal6: 15
            },
            {
                text: "拿桶子先接水再利用",
                money: 0,
                energy: -10,
                goal6: 10
            },
            {
                text: "反正不是自己房間",
                money: 0,
                energy: 5,
                goal6: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "蓋瑞的生態觀察",
        description:
            "蓋瑞在校園草叢發現很多昆蟲，想做一份小型生態觀察紀錄。",
        choices: [
            {
                text: "陪他記錄生物種類",
                money: 0,
                energy: -18,
                goal15: 15
            },
            {
                text: "提醒同學不要踩草地",
                money: 0,
                energy: -8,
                goal15: 8
            },
            {
                text: "覺得蟲太多立刻逃跑",
                money: 0,
                energy: 8,
                goal15: -3
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "露露的低碳野餐",
        description:
            "露露想辦一場低碳野餐，但她的野餐籃看起來像精品展示櫃。",
        choices: [
            {
                text: "自備餐具參加",
                money: -50,
                energy: -10,
                goal13: 12,
                goal12: 8
            },
            {
                text: "準備可重複使用餐墊",
                money: -80,
                energy: -8,
                goal12: 10
            },
            {
                text: "買一堆免洗餐具求方便",
                money: -30,
                energy: 8,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "凱倫的外送餐具選項",
        description:
            "凱倫點飲料和晚餐外送，頁面跳出『是否需要餐具』，她猶豫了三秒。",
        choices: [
            {
                text: "選擇不要餐具",
                money: 0,
                energy: -2,
                goal12: 12
            },
            {
                text: "備註減少包裝",
                money: 0,
                energy: -4,
                goal12: 8
            },
            {
                text: "什麼都不改直接下單",
                money: 0,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "安娜的環境紀錄片",
        description:
            "安娜想拍一支校園環境紀錄短片，但目前只有三張樹的照片和一顆熱情的心。",
        choices: [
            {
                text: "一起拍攝剪輯",
                money: 0,
                energy: -25,
                goal13: 12,
                goal15: 5
            },
            {
                text: "提供校園環境照片",
                money: 0,
                energy: -5,
                goal13: 5
            },
            {
                text: "說這題材沒人會看",
                money: 0,
                energy: 8,
                goal13: -4
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "楊咩咩的河岸水泥化",
        description:
            "楊咩咩想把校園旁的小河岸全部鋪成水泥，說這樣『比較整齊』。",
        choices: [
            {
                text: "提出自然河岸方案",
                money: 0,
                energy: -22,
                goal15: 15,
                goal6: 6
            },
            {
                text: "找資料說明生態影響",
                money: 0,
                energy: -15,
                goal15: 10
            },
            {
                text: "覺得水泥看起來很乾淨",
                money: 0,
                energy: 5,
                goal15: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "顏萱的淨山活動",
        description:
            "顏萱週末要去淨山，說山上的垃圾比她想像中還會躲。",
        choices: [
            {
                text: "一起去淨山",
                money: 0,
                energy: -30,
                goal15: 20
            },
            {
                text: "幫忙準備物資",
                money: -30,
                energy: -10,
                goal15: 8
            },
            {
                text: "週末想躺平",
                money: 0,
                energy: 15,
                goal15: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "柔苡的環保吸管組",
        description:
            "柔苡買了新的環保吸管組，還幫每根吸管取了名字。",
        choices: [
            {
                text: "跟著準備環保吸管",
                money: -80,
                energy: -2,
                goal12: 15
            },
            {
                text: "直接不用吸管",
                money: 0,
                energy: -3,
                goal12: 10
            },
            {
                text: "用店家吸管比較方便",
                money: 0,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "昕昕的省水妙招",
        description:
            "昕昕教你用除濕機的水沖廁所，但那桶水重到像在練深蹲。",
        choices: [
            {
                text: "認真搬去再利用",
                money: 5,
                energy: -15,
                goal6: 15
            },
            {
                text: "只用小桶分次搬",
                money: 0,
                energy: -8,
                goal6: 8
            },
            {
                text: "太重了放棄",
                money: 0,
                energy: 5,
                goal6: -3
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "松義霖的省水挑戰",
        description:
            "松義霖想挑戰一週節約用水，還把洗手時間都列進計畫表。",
        choices: [
            {
                text: "一起挑戰節約用水",
                money: 30,
                energy: -10,
                goal6: 18
            },
            {
                text: "先從縮短洗澡開始",
                money: 10,
                energy: -5,
                goal6: 10
            },
            {
                text: "照樣洗超久熱水澡",
                money: -80,
                energy: 20,
                goal6: -10
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "千千的洗衣哲學",
        description:
            "千千看到你兩件衣服就開洗衣機，表情像看到能源在哭。",
        choices: [
            {
                text: "累積到滿再洗",
                money: 20,
                energy: -5,
                goal12: 15,
                goal6: 5
            },
            {
                text: "改用省水模式",
                money: 5,
                energy: -3,
                goal6: 8
            },
            {
                text: "現在洗比較安心",
                money: -20,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "泰瑞的海洋塑膠報告",
        description:
            "泰瑞看到海洋塑膠污染報告後，決定今天不再讓任何塑膠袋得逞。",
        choices: [
            {
                text: "一起整理海洋污染資料",
                money: 0,
                energy: -15,
                goal14: 15
            },
            {
                text: "減少使用塑膠袋",
                money: 5,
                energy: -5,
                goal14: 8,
                goal12: 5
            },
            {
                text: "覺得海很遠不用管",
                money: 0,
                energy: 5,
                goal14: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "蓋瑞的水龍頭巡邏",
        description:
            "蓋瑞經過廁所時發現水龍頭沒關緊，水滴聲讓他很焦躁。",
        choices: [
            {
                text: "順手關緊水龍頭",
                money: 0,
                energy: -2,
                goal6: 12
            },
            {
                text: "通知清潔人員檢查",
                money: 0,
                energy: -4,
                goal6: 8
            },
            {
                text: "假裝沒聽到滴水聲",
                money: 0,
                energy: 5,
                goal6: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "露露的低碳餐廳",
        description:
            "露露發現附近新開低碳餐廳，雖然價格讓人懷疑是不是連空氣都算錢。",
        choices: [
            {
                text: "去支持低碳餐廳",
                money: -180,
                energy: 8,
                goal13: 15
            },
            {
                text: "點共享套餐避免浪費",
                money: -100,
                energy: 5,
                goal12: 8,
                goal13: 5
            },
            {
                text: "還是去吃速食",
                money: -120,
                energy: 15,
                goal13: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "凱咪的二手衣市集",
        description:
            "凱咪邀你去二手衣市集，說這次她只逛不買，但眼神已經出賣她。",
        choices: [
            {
                text: "買需要的二手衣",
                money: -150,
                energy: -5,
                goal12: 18
            },
            {
                text: "拿舊衣去交換",
                money: 50,
                energy: -8,
                goal12: 15
            },
            {
                text: "直接買新品比較快",
                money: -500,
                energy: 10,
                goal12: -8
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "安娜的環保社招募",
        description:
            "安娜邀你加入環保社，並保證不會每週都叫你搬很重的回收箱。",
        choices: [
            {
                text: "加入環保社",
                money: -80,
                energy: -25,
                goal13: 12,
                goal15: 6
            },
            {
                text: "偶爾參加活動",
                money: 0,
                energy: -8,
                goal13: 5
            },
            {
                text: "直接拒絕所有社團邀請",
                money: 0,
                energy: 8,
                goal13: -4
            }
        ]
    },

    {
        category: "Environment",
        type: "normal",
        title: "依林的宿舍回收箱",
        description:
            "依林半夜倒垃圾時發現回收箱被亂丟，整個人更睡不著了。",
        choices: [
            {
                text: "重新整理分類",
                money: 0,
                energy: -20,
                goal12: 18
            },
            {
                text: "貼分類提醒紙條",
                money: -10,
                energy: -5,
                goal12: 10
            },
            {
                text: "當作沒看到趕快回房",
                money: 0,
                energy: 5,
                goal12: -5
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "千千的二手書整理",
        description:
            "千千整理出一堆用不到的課本，問你要不要一起拿去二手書店賣。",
        choices: [
            {
                text: "全部整理好拿去賣",
                money: 280,
                energy: -22,
                goal12: 10
            },
            {
                text: "只賣幾本比較新的",
                money: 120,
                energy: -8,
                goal12: 5
            },
            {
                text: "懶得整理先堆著",
                money: 0,
                energy: 8,
                goal12: -2
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "凱倫的環保餐具團購",
        description:
            "凱倫突然想幫大家團購環保餐具，可能是因為她又拿了太多飲料吸管。",
        choices: [
            {
                text: "認真統計並下單",
                money: 200,
                energy: -18,
                goal12: 12
            },
            {
                text: "只幫幾個朋友訂",
                money: 80,
                energy: -6,
                goal12: 5
            },
            {
                text: "覺得太麻煩取消",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "顏萱的回收分類工讀",
        description:
            "學校招募學生協助整理回收物，顏萱說這工作很累但很有意義。",
        choices: [
            {
                text: "工作整個下午",
                money: 350,
                energy: -30,
                goal12: 12
            },
            {
                text: "只幫忙一小時",
                money: 100,
                energy: -8,
                goal12: 5
            },
            {
                text: "今天不想碰垃圾",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "露露的低碳市集助手",
        description:
            "露露要在低碳市集擺攤，但她說搬箱子這種事不適合她的氣質。",
        choices: [
            {
                text: "負責整天攤位",
                money: 420,
                energy: -35,
                goal13: 10,
                goal12: 5
            },
            {
                text: "只幫忙下午",
                money: 180,
                energy: -15,
                goal13: 5
            },
            {
                text: "拒絕工讀邀請",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "快俠的節能宿舍競賽",
        description:
            "宿舍舉辦節能競賽，快俠雖然動作慢，但他關電器的毅力很強。",
        choices: [
            {
                text: "認真控制用電拿獎金",
                money: 300,
                energy: -18,
                goal13: 15
            },
            {
                text: "稍微注意一下用電",
                money: 100,
                energy: -6,
                goal13: 6
            },
            {
                text: "照樣冷氣開整晚",
                money: 0,
                energy: 10,
                goal13: -6
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "昕昕的二手衣整理工讀",
        description:
            "二手衣店需要人幫忙整理衣物，昕昕說這比滑購物網站健康一點。",
        choices: [
            {
                text: "整理一整批衣服",
                money: 380,
                energy: -30,
                goal12: 10
            },
            {
                text: "只幫忙分類",
                money: 150,
                energy: -12,
                goal12: 5
            },
            {
                text: "不想整理衣服",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "泰瑞的環保講座場務",
        description:
            "泰瑞找你一起當環保講座場務，主要工作是報到、搬椅子和避免水杯亂丟。",
        choices: [
            {
                text: "負責整場活動",
                money: 300,
                energy: -25,
                goal13: 8,
                goal12: 5
            },
            {
                text: "只幫忙報到",
                money: 120,
                energy: -8,
                goal13: 4
            },
            {
                text: "今天想休息",
                money: 0,
                energy: 12
            }
        ]
    },

    {
        category: "Environment",
        type: "money",
        title: "蓋瑞的校園植栽照護",
        description:
            "蓋瑞接到校園植栽照護工讀，問你要不要一起幫忙澆水和除草。",
        choices: [
            {
                text: "認真照顧整片植栽",
                money: 320,
                energy: -28,
                goal15: 12
            },
            {
                text: "只幫忙澆水",
                money: 120,
                energy: -10,
                goal15: 5
            },
            {
                text: "怕蟲所以拒絕",
                money: 0,
                energy: 8
            }
        ]
    }

];