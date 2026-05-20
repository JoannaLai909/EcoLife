const societyEvents = [

    {
        category: "Society",
        type: "normal",
        title: "凱咪的壓力爆表警報",
        description:
            "凱咪原本只是想買一杯手搖飲放鬆，結果她說自己最近壓力大到珍珠都嚼不動。",
        choices: [
            {
                text: "陪她去心理健康講座",
                money: 0,
                energy: -15,
                goal3: 18
            },
            {
                text: "陪她散步聊一下",
                money: 0,
                energy: -8,
                goal3: 10
            },
            {
                text: "叫她再買一杯壓壓驚",
                money: -60,
                energy: 5,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "顏萱的統計崩潰",
        description:
            "顏萱說她統計讀到快爆炸，連平均數都開始看起來很有敵意。",
        choices: [
            {
                text: "耐心教她觀念",
                money: 0,
                energy: -18,
                goal4: 18
            },
            {
                text: "傳自己的筆記給她",
                money: 0,
                energy: -5,
                goal4: 10
            },
            {
                text: "叫她自己去問老師",
                money: 0,
                energy: 5,
                goal4: -4
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "安娜的公益便當",
        description:
            "安娜發起公益便當活動，想把餐點送給需要幫助的家庭，但她現在被訂單表格困住了。",
        choices: [
            {
                text: "買一份支持活動",
                money: -80,
                energy: 0,
                goal1: 10,
                goal2: 10
            },
            {
                text: "幫她整理訂單",
                money: 0,
                energy: -12,
                goal1: 8,
                goal2: 8
            },
            {
                text: "覺得跟自己無關",
                money: 0,
                energy: 5,
                goal1: -5
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "柔苡的性別平等海報",
        description:
            "柔苡要做性別平等宣導海報，但她覺得每個標語都太像課本標題。",
        choices: [
            {
                text: "一起設計海報",
                money: 0,
                energy: -15,
                goal5: 15
            },
            {
                text: "幫她找真實案例",
                money: 0,
                energy: -8,
                goal5: 10
            },
            {
                text: "覺得這議題不重要",
                money: 0,
                energy: 5,
                goal5: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "快俠的無障礙慢行",
        description:
            "快俠慢慢走到教室門口，發現雜物擋住輪椅通道，連他都覺得這樣太慢了。",
        choices: [
            {
                text: "主動把雜物移開",
                money: 0,
                energy: -8,
                goal10: 18
            },
            {
                text: "通知助教處理",
                money: 0,
                energy: -3,
                goal10: 10
            },
            {
                text: "繞過去當沒看到",
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
            "千千發現活動剩下很多餐點，說這些便當不該直接進垃圾桶。",
        choices: [
            {
                text: "幫忙整理餐點",
                money: 0,
                energy: -12,
                goal2: 15
            },
            {
                text: "聯絡社福單位",
                money: 0,
                energy: -10,
                goal2: 15,
                goal10: 8
            },
            {
                text: "自己先打包最多份",
                money: 50,
                energy: 5,
                goal2: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "右廷的課輔挑戰",
        description:
            "右廷問你要不要一起去當課輔志工，他說小朋友問問題的速度比期中考還可怕。",
        choices: [
            {
                text: "去陪小朋友讀書",
                money: 0,
                energy: -25,
                goal4: 15,
                goal10: 5
            },
            {
                text: "捐幾本參考書",
                money: -100,
                energy: -3,
                goal4: 8
            },
            {
                text: "自己的作業都寫不完",
                money: 0,
                energy: 12,
                goal4: -4
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "逸玲看到班群霸凌",
        description:
            "逸玲看到班群有人嘲笑同學外表，整個聊天室突然安靜得很尷尬。",
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
        title: "依林的深夜健康危機",
        description:
            "依林又熬夜到凌晨，早餐只想用咖啡解決，整個人看起來像低電量模式。",
        choices: [
            {
                text: "提醒她吃均衡早餐",
                money: -70,
                energy: 12,
                goal3: 12
            },
            {
                text: "陪她調整作息",
                money: 0,
                energy: -10,
                goal3: 15
            },
            {
                text: "一起喝咖啡硬撐",
                money: -50,
                energy: 5,
                goal3: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "露露的獎學金情報",
        description:
            "露露發現一個弱勢學生獎學金資訊，雖然她說得像在宣布精品折扣。",
        choices: [
            {
                text: "整理成懶人包分享",
                money: 0,
                energy: -12,
                goal1: 8,
                goal10: 8
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
        title: "泰瑞的偏鄉閱讀營",
        description:
            "泰瑞報名偏鄉國小閱讀營，說他可以用水陸兩棲的耐心陪小朋友讀書。",
        choices: [
            {
                text: "報名帶閱讀活動",
                money: -50,
                energy: -30,
                goal4: 18,
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
        title: "安娜的公益社團招生",
        description:
            "安娜的公益社團缺人，她拜託你幫忙招生，但她的招生文案看起來像求救信。",
        choices: [
            {
                text: "幫她做招生文宣",
                money: 0,
                energy: -15,
                goal10: 12
            },
            {
                text: "推薦幾個朋友",
                money: 0,
                energy: -5,
                goal10: 8
            },
            {
                text: "已讀不回",
                money: 0,
                energy: 5,
                goal10: -4
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "昕昕的月經平權提案",
        description:
            "昕昕參與學生會討論，希望校園能提供免費生理用品。",
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
                text: "覺得不關自己的事",
                money: 0,
                energy: 5,
                goal5: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "凱倫的室友情緒雷達",
        description:
            "凱倫發現室友最近很低落，連她請喝手搖都沒反應。",
        choices: [
            {
                text: "主動關心室友",
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
                text: "覺得不要多管閒事",
                money: 0,
                energy: 5,
                goal3: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "蓋瑞的食物銀行地圖",
        description:
            "蓋瑞發現附近社區正在募集罐頭與乾糧，他默默畫出一張捐贈路線圖。",
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
                goal2: 18
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
        title: "凱咪的週末陪伴計畫",
        description:
            "凱咪邀你參加陪伴弱勢兒童的週末活動，還說結束後可以順路買飲料。",
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
                text: "週末只想睡覺",
                money: 0,
                energy: 15,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "胡尼克的社福募款話術",
        description:
            "胡尼克想幫社福機構募款，但他的文案看起來太像推銷詐騙。",
        choices: [
            {
                text: "幫他改成可信文案",
                money: 0,
                energy: -12,
                goal1: 12
            },
            {
                text: "捐一點錢支持",
                money: -100,
                energy: 0,
                goal1: 15
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
        title: "柔苡的熬夜警告",
        description:
            "柔苡發現你最近每天熬夜，嚴肅地說你看起來像被 Wi-Fi 吸乾。",
        choices: [
            {
                text: "今晚早點睡",
                money: 0,
                energy: 20,
                goal3: 10
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
        title: "千千的社區共餐",
        description:
            "千千邀你參加社區共餐，陪獨居長者吃飯聊天，她說這比滑手機有溫度。",
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
                goal3: 8,
                goal2: 8
            },
            {
                text: "社恐不想去",
                money: 0,
                energy: 10,
                goal10: -4
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "右廷的期中互助會",
        description:
            "右廷想成立期中考互助讀書會，但他的群組名稱叫『不想被當聯盟』。",
        choices: [
            {
                text: "加入並分享筆記",
                money: 0,
                energy: -18,
                goal4: 18
            },
            {
                text: "幫忙整理題目",
                money: 0,
                energy: -10,
                goal4: 10
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
            "顏萱想整理校園無障礙設施地圖，因為她發現很多坡道藏得像密室入口。",
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
                text: "覺得自己用不到",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "松義霖的 CPR 急救課",
        description:
            "松義霖報名 CPR 急救課，問你要不要一起去，他說至少以後不會只會喊救命。",
        choices: [
            {
                text: "一起去學急救",
                money: -50,
                energy: -15,
                goal3: 18
            },
            {
                text: "看線上影片學基礎",
                money: 0,
                energy: -5,
                goal3: 8
            },
            {
                text: "覺得自己應該用不到",
                money: 0,
                energy: 5,
                goal3: -4
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "昕昕的免費數學家教",
        description:
            "昕昕想幫附近國中生做免費數學家教，但她說自己也需要先複習平方根。",
        choices: [
            {
                text: "一起幫忙教",
                money: 0,
                energy: -25,
                goal4: 18
            },
            {
                text: "幫她出練習題",
                money: 0,
                energy: -10,
                goal4: 10
            },
            {
                text: "數學自己也快忘光",
                money: 0,
                energy: 8,
                goal4: -3
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "安娜的平權討論會",
        description:
            "安娜邀你參加性別平權討論會，她說這次不是辯論賽，不需要把別人講到沉默。",
        choices: [
            {
                text: "參加並認真聽",
                money: 0,
                energy: -12,
                goal5: 15
            },
            {
                text: "先查資料再參加",
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
        title: "柔苡的午餐救援",
        description:
            "柔苡發現有同學忘記帶錢吃午餐，對方尷尬到快跟牆壁融為一體。",
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
        title: "泰瑞的偏鄉物資箱",
        description:
            "泰瑞想募集書本與生活用品寄到偏鄉學校，結果紙箱大到像要搬家。",
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
            "凱咪看到社群上有人散播歧視言論，手上的飲料都快被她捏爆。",
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
        title: "露露的營養早餐宣言",
        description:
            "露露說你最近都不吃早餐，這樣氣色會輸給期末考前的影印紙。",
        choices: [
            {
                text: "買一份營養早餐",
                money: -70,
                energy: 12,
                goal3: 10
            },
            {
                text: "準備簡單水果和豆漿",
                money: -40,
                energy: 8,
                goal3: 8
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
        title: "顏萱的夜間安全巡查",
        description:
            "顏萱發現校園夜間照明不足，想回報學校改善安全死角。",
        choices: [
            {
                text: "一起整理問題地點",
                money: 0,
                energy: -15,
                goal10: 8,
                goal3: 10
            },
            {
                text: "幫忙寫回報信",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "反正自己不晚上出門",
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
            "逸玲邀你參加為弱勢兒童募款的公益路跑，她說走完全程也算一種誠意。",
        choices: [
            {
                text: "報名參加路跑",
                money: -100,
                energy: -30,
                goal3: 15,
                goal1: 15
            },
            {
                text: "只捐款不跑",
                money: -150,
                energy: 0,
                goal1: 12
            },
            {
                text: "跑去吃宵夜",
                money: -120,
                energy: 8,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "右廷的課輔家教",
        description:
            "右廷介紹學弟妹找你複習考試，對方說只是不懂『全部』而已。",
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
        title: "安娜的校慶工讀",
        description:
            "校慶活動缺臨時工讀，安娜說只要你願意來，她可以保證你今天不會無聊。",
        choices: [
            {
                text: "從早忙到晚",
                money: 500,
                energy: -45,
                goal10: 8
            },
            {
                text: "只幫忙下午",
                money: 200,
                energy: -18,
                goal10: 4
            },
            {
                text: "裝沒看到訊息",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "千千的陪讀計畫",
        description:
            "圖書館招募弱勢兒童陪讀工讀，千千說小朋友比教授還會問為什麼。",
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
    },

    {
        category: "Society",
        type: "money",
        title: "依林的圖書館櫃台",
        description:
            "圖書館臨時缺櫃台工讀生，依林說夜班太安靜，可能會更睡不著。",
        choices: [
            {
                text: "支援整個下午",
                money: 350,
                energy: -28,
                goal4: 8
            },
            {
                text: "只幫忙兩小時",
                money: 150,
                energy: -10,
                goal4: 4
            },
            {
                text: "今天想休息",
                money: 0,
                energy: 12
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "柔苡的公益攝影",
        description:
            "公益社團需要人幫活動拍照紀錄，柔苡說照片不能只拍到便當。",
        choices: [
            {
                text: "完整拍攝活動",
                money: 300,
                energy: -25,
                goal10: 8
            },
            {
                text: "只拍開場",
                money: 100,
                energy: -8,
                goal10: 3
            },
            {
                text: "相機沒電不接",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "顏萱的校園導覽",
        description:
            "學校開放日需要學生帶高中生參觀校園，顏萱希望你不要把大家帶迷路。",
        choices: [
            {
                text: "帶完整導覽",
                money: 280,
                energy: -22,
                goal4: 8
            },
            {
                text: "只介紹系館",
                money: 120,
                energy: -8,
                goal4: 4
            },
            {
                text: "怕生不想去",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "胡尼克的社福文案案",
        description:
            "社福機構需要活動宣傳文案，胡尼克說他可以寫得很吸睛，但可能太像詐騙。",
        choices: [
            {
                text: "接下完整文案",
                money: 360,
                energy: -24,
                goal1: 8
            },
            {
                text: "只幫忙潤稿",
                money: 130,
                energy: -8,
                goal1: 4
            },
            {
                text: "沒有靈感",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "凱倫的健康講座場務",
        description:
            "校園健康講座需要場務工讀生，凱倫說如果有茶點她一定準時到。",
        choices: [
            {
                text: "負責整場活動",
                money: 300,
                energy: -25,
                goal3: 8
            },
            {
                text: "只幫忙報到",
                money: 120,
                energy: -8,
                goal3: 3
            },
            {
                text: "太累不接",
                money: 0,
                energy: 12
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "泰瑞的偏鄉營隊助教",
        description:
            "偏鄉營隊臨時需要大學生助教，泰瑞說那邊的小朋友活力比滿格電池還高。",
        choices: [
            {
                text: "擔任整天助教",
                money: 450,
                energy: -35,
                goal4: 12,
                goal10: 5
            },
            {
                text: "只幫忙半天",
                money: 200,
                energy: -18,
                goal4: 6
            },
            {
                text: "路太遠不去",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "昕昕的平權問卷工讀",
        description:
            "學生會需要人協助校園平權問卷調查，昕昕說問題不能問得像審問犯人。",
        choices: [
            {
                text: "認真訪問同學",
                money: 250,
                energy: -20,
                goal5: 8
            },
            {
                text: "只發線上表單",
                money: 80,
                energy: -5,
                goal5: 3
            },
            {
                text: "覺得尷尬不做",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "蓋瑞的社區共餐幫手",
        description:
            "社區共餐需要人協助準備與收拾，蓋瑞已經默默規劃好動線。",
        choices: [
            {
                text: "從準備到收拾都幫",
                money: 320,
                energy: -28,
                goal2: 8,
                goal10: 5
            },
            {
                text: "只幫忙端餐",
                money: 120,
                energy: -10,
                goal2: 4
            },
            {
                text: "今天不想出門",
                money: 0,
                energy: 12
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "逸玲的夜間安全巡查",
        description:
            "學校晚上需要學生協助巡查照明與安全死角，逸玲說這比恐怖片有意義。",
        choices: [
            {
                text: "參加整晚巡查",
                money: 380,
                energy: -30,
                goal3: 8,
                goal10: 5
            },
            {
                text: "只巡查一小時",
                money: 150,
                energy: -12,
                goal3: 4
            },
            {
                text: "晚上太可怕了",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "露露的公益市集收銀",
        description:
            "公益市集需要人幫忙收銀與整理物資，露露說她可以負責看起來很專業。",
        choices: [
            {
                text: "幫忙整天",
                money: 400,
                energy: -35,
                goal1: 8,
                goal2: 8
            },
            {
                text: "只幫忙下午",
                money: 180,
                energy: -15,
                goal1: 4
            },
            {
                text: "人太多不想去",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "松義霖的保健室求助",
        description:
            "同學突然身體不舒服，松義霖問你能不能陪對方去保健室。",
        choices: [
            {
                text: "馬上陪她去",
                money: 0,
                energy: -12,
                goal3: 15
            },
            {
                text: "幫她叫同學陪",
                money: 0,
                energy: -3,
                goal3: 8
            },
            {
                text: "假裝沒看到訊息",
                money: 0,
                energy: 5,
                goal3: -6
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "右廷的雲端筆記共享",
        description:
            "期中考前，右廷提議大家共用雲端筆記，但檔名已經亂成迷宮。",
        choices: [
            {
                text: "上傳自己的整理",
                money: 0,
                energy: -18,
                goal4: 15
            },
            {
                text: "幫忙整理格式",
                money: 0,
                energy: -8,
                goal4: 8
            },
            {
                text: "只看別人的筆記",
                money: 0,
                energy: 5,
                goal4: -3
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "依林的宿舍公共廚房",
        description:
            "依林半夜去公共廚房，發現水槽髒到讓她更睡不著。",
        choices: [
            {
                text: "主動清理",
                money: 0,
                energy: -20,
                goal3: 8,
                goal10: 6
            },
            {
                text: "提醒大家輪流打掃",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "反正不是自己弄的",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "胡尼克的歧視玩笑",
        description:
            "胡尼克開了一個讓某些同學不舒服的玩笑，還以為自己很幽默。",
        choices: [
            {
                text: "溫和提醒他",
                money: 0,
                energy: -10,
                goal10: 15
            },
            {
                text: "私下跟他說明原因",
                money: 0,
                energy: -6,
                goal10: 10
            },
            {
                text: "跟著笑比較安全",
                money: 0,
                energy: 3,
                goal10: -8
            }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "凱咪的心理健康週",
        description:
            "學校舉辦心理健康週，凱咪說她想去，但又怕聽完更想放假。",
        choices: [
            {
                text: "參加壓力管理工作坊",
                money: -30,
                energy: -8,
                goal3: 15
            },
            {
                text: "拿資料回去慢慢看",
                money: 0,
                energy: -3,
                goal3: 6
            },
            {
                text: "覺得自己沒問題",
                money: 0,
                energy: 5,
                goal3: -3
            }
        ]
    }

];