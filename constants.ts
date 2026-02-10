import { ExperienceItem, ProjectItem, SkillItem, AwardItem } from './types';

export const PROFILE = {
  name: "伍佰",
  title: "Java 高级开发工程师",
  email: "wsh1797@163.com",
  phone: "13030174427",
  age: 24,
  education: {
    school: "岭南师范学院",
    degree: "本科 - 软件工程",
    period: "2020 - 2024",
    gpa: "专业前 10%",
    courses: ["Java程序设计", "数据结构与算法", "计算机网络", "操作系统", "数据库原理", "软件工程", "分布式系统", "微服务架构"],
    certificates: [
      "计算机四级数据库工程师证书",
      "计算机三级数据库设计证书",
      "软件设计师职业证书（中级）",
      "大学英语四级"
    ]
  },
  summary: "拥有扎实的 Java 后端开发基础，擅长高并发场景下的系统设计与优化。在 AIGC 集成、微服务架构（Spring Cloud）、容器化部署（Docker）及分布式中间件（Redis, RabbitMQ）方面有实际项目落地经验。具备优秀的排查问题能力，曾通过异步化架构将系统响应速度提升 35%。"
};

export const SKILLS: SkillItem[] = [
  // Backend
  { name: "Java Core (JVM/JUC/IO)", level: 90, category: 'backend' },
  { name: "Spring Boot/Cloud", level: 88, category: 'backend' },
  { name: "MySQL (Index/Transaction)", level: 85, category: 'backend' },
  { name: "Redis (Cache Patterns)", level: 85, category: 'backend' },
  { name: "RabbitMQ/Kafka", level: 80, category: 'backend' },
  { name: "ElasticSearch", level: 75, category: 'backend' },
  
  // DevOps
  { name: "Docker/K8s Basics", level: 80, category: 'devops' },
  { name: "Linux/Shell Scripting", level: 80, category: 'devops' },
  { name: "Maven/Git", level: 85, category: 'devops' },
  
  // Frontend
  { name: "Vue.js 3", level: 70, category: 'frontend' },
  { name: "TypeScript/JS", level: 75, category: 'frontend' },
  
  // CS
  { name: "Design Patterns", level: 85, category: 'cs' },
  { name: "Data Structures", level: 80, category: 'cs' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Java 后端开发实习生",
    company: "广东铭太信息科技有限公司",
    duration: "2023.05 - 2023.12",
    description: "参与企业级审计项目“智能数据分析 BI 模块”的全栈开发。利用 AIGC 技术降低数据分析门槛，极大提升了审计业务效率。",
    techStack: ["Spring Boot", "AIGC", "RabbitMQ", "Redisson", "React"],
    achievements: [
      "架构优化：基于自定义 IO 密集型线程池 + RabbitMQ 实现 AIGC 任务的异步解耦，解决了长时间生成导致的 HTTP 超时问题。",
      "系统可靠性：利用 RabbitMQ 持久化机制防止任务丢失，通过削峰填谷保证 AI 服务在流量高峰下的稳定性。",
      "Prompt Engineering：深度调试 AI 模型，通过精细化 Prompt 设计，确保输出的图表数据 100% 符合业务 JSON 格式规范。",
      "全流程参与：负责从需求分析、数据库设计到最终上线的完整开发周期，熟悉复杂的审计业务流转。"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "智能代码评测平台 (OJ System)",
    role: "核心后端开发者",
    duration: "2022.10 - 2023.05",
    description: "基于微服务架构的在线编程评测系统，包含代码沙箱、题目管理、判题服务等核心模块。",
    techStack: ["Spring Cloud", "Docker Java", "RabbitMQ", "Redis", "MySQL", "Vue3"],
    metrics: [
      "QPS 提升 65%",
      "响应时间 4s → 2.6s",
      "安全隔离级别：容器级"
    ],
    details: [
      "沙箱架构：自主设计基于 Docker 的代码沙箱，使用 Docker Java 库动态创建/销毁容器，通过 TTY 流实现安全的输入输出交互，防止宿主机被恶意攻破。",
      "资源管控：通过 JVM -Xmx 参数及 Linux Cgroups 严格限制用户提交代码的内存与 CPU 占用，并结合字典树（Trie）实现黑白名单代码扫描。",
      "性能优化：引入 RabbitMQ 实现判题任务的异步削峰，配合策略模式 + 静态工厂灵活切换不同的判题沙箱实现（Java/Cpp/Python）。"
    ]
  },
  {
    id: "proj-2",
    title: "岭师点评 (高并发社交系统)",
    role: "后端负责人",
    duration: "2022.08 - 2023.02",
    description: "类大众点评的本地生活服务平台，涵盖商家搜索、达人探店、优惠券秒杀等高并发业务场景。",
    techStack: ["Spring Boot", "Redis (Lua/Stream/Geo)", "MyBatis-Plus", "Redisson"],
    metrics: [
      "秒杀性能提升 40%",
      "查询性能提升 90%",
      "DB 压力显著降低"
    ],
    details: [
      "高并发秒杀：利用 Redis + Lua 脚本实现库存原子扣减，结合 Redis Stream 实现订单异步创建，彻底解决超卖问题并实现“一人一单”。",
      "Feed流设计：基于 Redis Sorted Set 实现 TopN 笔记点赞排行，相比直接数据库查询，性能提升 80% 以上。",
      "缓存一致性：设计全局 Redis Key 管理策略，统一 TTL 与命名空间，有效防止缓存雪崩与键冲突；利用 GeoHash 实现“附近商家”的高效检索。"
    ]
  }
];

export const AWARDS: AwardItem[] = [
  { id: "a1", title: "第七届IT文化节选拔赛大赛 一等奖", date: "2023.06", rank: "1" },
  { id: "a2", title: "第九届中国国际“互联网+”选拔赛 一等奖", date: "2023.06", rank: "1" },
  { id: "a6", title: "2022-2023学年优秀学生 二等奖学金", date: "2023.10", rank: "2" },
  { id: "a3", title: "省第九届中国国际“互联网+”大赛 铜奖", date: "2022.06", rank: "3" },
  { id: "a4", title: "第二届“东软睿道杯”小程序大赛 三等奖", date: "2023.05", rank: "3" },
  { id: "a5", title: "省第十四届蓝桥杯算法大赛 三等奖", date: "2023.04", rank: "3" },
];
