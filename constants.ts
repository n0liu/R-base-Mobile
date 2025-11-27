import { Author, AIPoint, Figure, SectionData } from './types';

export const PAPER_INFO = {
  journal: "Nature Metabolism [IF:20.8]",
  isOA: true,
  title: "Nature子刊：菊粉促益生菌→小肠耗果糖→拯救脂肪肝",
  subTitle: "膳食纤维诱导的肠道菌群清除膳食中的果糖，并逆转脂肪肝",
  englishTitle: "Dietary fibre-adapted gut microbiome clears dietary fructose and reverses hepatic steatosis",
  doi: "Gut Microbes.2025-9-1; doi:10.1038/s43587-025-00947-6."
};

export const AUTHORS: Author[] = [
  { name: "张发明", initial: "Z", color: "bg-blue-100 text-blue-600" },
  { name: "T. Borody", initial: "B", color: "bg-blue-100 text-blue-600" },
  { name: "A. Khoruts", initial: "K", color: "bg-blue-100 text-blue-600" },
  { name: "C. Kelly", initial: "K", color: "bg-purple-100 text-purple-600" },
  { name: "Z. Kassam", initial: "K", color: "bg-purple-100 text-purple-600" },
  { name: "J. Keller", initial: "K", color: "bg-purple-100 text-purple-600" },
];

export const AI_POINTS: AIPoint[] = [
  {
    id: 1,
    title: "研究设计与方法",
    content: "该研究通过小鼠模型，结合同位素示踪、代谢组学和微生物组移植等技术，探究膳食纤维菊粉对高果葡糖浆 (HFCS) 诱导的代谢功能障碍相关脂肪性肝病 (MASLD) 的干预效果与机制。"
  },
  {
    id: 2,
    title: "核心发现",
    content: "补充菊粉不仅能预防，还能逆转由HFCS引起的肝脏脂肪变性、纤维化和胰岛素抵抗，其关键在于重塑肠道菌群的功能，使其能主动清除膳食果糖。"
  },
  {
    id: 3,
    title: "小肠菌群清糖机制",
    content: "菊粉能特异性促进小肠菌群分解膳食果糖，从而显著减少果糖溢出至肝脏和结肠，从源头抑制肝脏从头脂肪生成 (DNL)。"
  },
  {
    id: 4,
    title: "肝脏代谢重塑机制",
    content: "菊粉还将肝脏内的果糖代谢碳流从DNL转向丝氨酸和甘氨酸的从头合成，进而增强谷胱甘肽生成，有效对抗果糖诱导的肝脏脂质过氧化损伤。"
  }
];

export const FIGURES: Figure[] = [
  { id: "1", label: "Fig.1", placeholderColor: "bg-slate-200" },
  { id: "2", label: "Fig.2", placeholderColor: "bg-slate-200" },
  { id: "3", label: "Fig.3", placeholderColor: "bg-slate-200" },
  { id: "4", label: "Fig.4", placeholderColor: "bg-slate-200" },
];

export const INTERPRETATION_TABS = [
  "原文摘要", "创新要点", "科普解读", "研究背景", "研究方法", "转化前景"
];

// New Structured Data for the "Knowledge Graph" section
export const STRUCTURED_DATA: SectionData[] = [
  {
    id: "keywords",
    title: "关键词",
    type: "tags",
    content: [
      { category: "核心", tags: ["菊粉", "益生菌", "小肠", "果糖", "脂肪肝", "膳食纤维"] },
      { category: "原文", tags: ["肠道菌群", "hepatic steatosis", "期刊 | Nature Metabolism"] },
      { category: "AI", tags: ["代谢功能障碍", "B. acidifaciens", "谷胱甘肽", "肝脏脂质过氧化"] },
      { category: "MeSH", tags: ["Fructose", "Inulin", "Fatty Liver", "Probiotics"] }
    ]
  },
  {
    id: "clinical",
    title: "临床试验",
    type: "key-value",
    content: [
      { label: "发起/责任方", value: "IIT" },
      { label: "分组", value: "交叉设计" },
      { label: "研究阶段", value: "III期临床试验" },
      { label: "人群", value: "婴幼儿" },
      { label: "参与机构", value: "单中心" },
      { label: "随机化", value: "随机" },
      { label: "盲法", value: "双盲" },
      { label: "对照组", value: "安慰剂对照" },
      { label: "研究目的", value: "治疗性" },
      { label: "统计学目标", value: "非劣效试验" },
      { label: "干预类型", value: "药物试验" },
      { label: "制剂类型", value: "胶囊" },
      { label: "应用方式", value: "口服" },
      { label: "疗程", value: "7天" },
      { label: "给药频率", value: "一日三次" },
      { label: "单次剂量", value: "2X10^8CFU" },
      { label: "主要终点", value: "日均排便次数" },
      { label: "次要终点", value: "粪便微生物多样性, 血液免疫指标" },
      { label: "注册信息", value: "ChiCTR2500109434" },
    ]
  },
  {
    id: "treatment",
    title: "治疗措施",
    type: "table",
    content: [
      { col1: "菊粉", col2: "脂肪肝", col3: "动物实验", tag: "阳性", tagType: "success" },
      { col1: "抗生素", col2: "便秘", col3: "人体临床", tag: "阴性", tagType: "danger" }
    ]
  },
  {
    id: "attributes",
    title: "文章属性",
    type: "key-value",
    content: [
      { label: "研究类型", value: "干预性研究" },
      { label: "转化阶段", value: "TO-基础研究" },
      { label: "循证等级", value: "动物研究" },
      { label: "转化方向", value: "药物开发" },
      { label: "大类学科", value: "医学" },
      { label: "小类学科", value: "传染病学, 骨科, 外科" },
      { label: "研究基金", value: "国自然NSFC88888 (中国), NIH66666 (美国)" },
    ]
  },
  {
    id: "materials",
    title: "实验材料",
    type: "key-value",
    content: [
      { label: "模型", value: "小鼠" },
      { label: "器官", value: "肝脏, 小肠" },
      { label: "细胞", value: "293T" },
      { label: "微生物", value: "产酸拟杆菌, 动物双歧杆菌Bb-12, 鼠李糖乳杆菌GG" },
    ]
  },
  {
    id: "methods",
    title: "实验方法",
    type: "tags",
    content: [
      { category: "方法列表", tags: ["16S rDNA测序", "液相色谱-质谱联用 (LC-MS)", "逆转录定量聚合酶链式反应 (qPCR)", "RNA序列分析 (RNA-seq)", "16S rRNA基因扩增子测序与分析 (16S)", "同位素示踪", "组织学分析", "苏木精-伊红染色 (H&E)", "三色染色", "免疫荧光成像", "间接热法", "回波磁共振成像 (EchoMRI)", "脂肪酸氧化分析 (FAO)", "线粒体和胞浆分离"] }
    ]
  },
  {
    id: "analysis",
    title: "分析软件",
    type: "tags",
    content: [
      { category: "软件/算法", tags: ["回归分析", "贝叶斯统计方法", "SPSS", "QIIME2"] }
    ]
  },
  {
    id: "molecules",
    title: "分子通路",
    type: "tags",
    content: [
      { category: "生化分子", tags: ["谷胱肽", "短链脂肪酸", "果糖", "抗生素"] },
      { category: "靶点/标志物", tags: ["PD-1", "CTLA-4"] },
      { category: "生物学通路", tags: ["JAK-STAT"] }
    ]
  },
  {
    id: "outcomes",
    title: "产出转化",
    type: "key-value",
    content: [
      { label: "研究资源", value: "中国健康人益生菌菌库" },
      { label: "相关产品", value: "冠益乳酸奶, 优益C乳酸菌饮料, 优益C益生菌固体饮料" },
      { label: "相关企业", value: "蒙牛乳业, 科拓生物, 华润江中" },
      { label: "相关品牌", value: "蒙牛, 优益C, 益适优, 利活" },
    ]
  },
  {
    id: "sources",
    title: "收录频道",
    type: "tags",
    content: [
      { category: "热心肠日报", tags: ["微生物(组)", "营养", "消化系统疾病", "动物", "免疫", "医药转化", "代谢", "神经", "特殊人群"] },
      { category: "HOPE数据库", tags: ["益生菌", "益生元", "膳食纤维", "合生制剂", "发酵食品", "后生元"] },
      { category: "循证库", tags: ["药食同源", "维生素", "矿物质", "植物提取物", "蛋白"] }
    ]
  },
  {
    id: "contributors",
    title: "贡献者",
    type: "list",
    content: [
      "白细胞战神_007", "PaperSlayer_张", "医学僧不是和尚", "爱吃烧烤的Dr_Li", "FMT冲锋队员", "细胞观察员-Wang", "熬夜写综述的me", "菌群研究员9527"
    ]
  }
];