import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  //主页
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "主页", icon: "el-icon-s-home" },
      },
    ],
  },
  //属性情感分析
  {
    path: "/analysis",
    component: Layout,
    redirect: "/analysis/singleAnalysis",
    name: "Analysis",
    meta: { title: "属性级情感分析", icon: "el-icon-s-help" },
    children: [
      {
        path: "singleAnalysis",
        name: "singleAnalysis",
        component: () => import("@/views/singleAnalysis/index"),
        meta: { title: "单条文本分析", icon: "el-icon-search" },
      },
      {
        path: "batchAnalysis",
        name: "batchAnalysis",
        component: () => import("@/views/batchAnalysis/index"),
        meta: { title: "批量文本分析", icon: "el-icon-document-copy" },
      },
    ],
  },
  //可视化
  {
    path: "/view",
    component: Layout,
    redirect: "/view",
    meta: { title: "数据与情感效果可视化模块", icon: "el-icon-star-off" },
    children: [
      {
        path: "",
        name: "View",
        meta: { title: "数据和算法效果可视化", icon: "el-icon-star-off" },
        component: () => import("@/views/visualization/index"),
      },
      {
        path: "fine_grained",
        name: "Fine_grained",
        hidden: true,
        component: () =>
          import("@/views/visualization/fine_grained/Fine_grained"),
        meta: {
          title: "",
          icon: "el-icon-document-copy",
        },
        meta: {
          title: "数据与情感效果可视化模块",
          icon: "el-icon-document-copy",
        },
      },
      {
        path: "dataing",
        name: "Dataing",
        hidden: true,
        component: () => import("@/views/visualization/dataing/Dataing"),
        meta: { title: "数据分析可视化", icon: "el-icon-document-copy" },
      },
      {
        path: "clustering",
        name: "Clustering",
        hidden: true,
        component: () => import("@/views/visualization/clustering/Clustering"),
        meta: { title: "聚类效果可视化", icon: "el-icon-document-copy" },
      },
    ],
  },
  //评论
  {
    path: "/evaluate",
    component: Layout,
    redirect: "/evaluate",
    children: [
      {
        path: "evaluate",
        name: "Evaluate",
        component: () => import("@/views/evaluate/Evaluate"),
        meta: { title: "属性级精选评论标签模块", icon: "el-icon-chat-square" },
      },
    ],
  },

  //细粒度
  {
    path: "/view2",
    component: Layout,
    redirect: "/view2",
    name: "Views2",
    meta: { title: "细粒度茶叶推荐模块", icon: "el-icon-s-home" },
    children: [
      {
        path: "",
        name: "View2",
        meta: { title: "细粒度茶叶推荐模块", icon: "el-icon-bangzhu" },
        component: () => import("@/views/part4/index"),
      },
      {
        path: "buzhidao",
        name: "Buzhidao",
        hidden: true,
        component: () => import("@/views/part4/buzhidao/Buzhidao"),
        meta: { title: "--茶评--", icon: "el-icon-document-copy" },
      },
    ],
  },
  //用户反馈
  {
    path: "/view3",
    component: Layout,
    redirect: "/view3",
    name: "Views3",
    meta: { title: "用户反馈信息模块", icon: "el-icon-s-home" },
    children: [
      {
        path: "",
        name: "View3",
        meta: { title: "用户反馈信息模块", icon: "el-icon-document-copy" },
        component: () => import("@/views/part5/App"),
      },
    ],
  },
  // AI对话
  {
    path: "/AI-dialogue",
    component: Layout,
    name: "AI-dialogue",
    redirect: "/AI-dialogue",
    children: [
      {
        path: "",
        name: "AI-dialogue",
        meta: { title: "AI对话", icon: "el-icon-user-solid" },
        component: () => import("@/views/AI/AI-dialogue"),
      },
    ],
  },
  // 跳转gpt
  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://github.com/hchhtc123/AttributeLevel-EmotionAnalysis-WebSystem",
        meta: { title: "跳转Github", icon: "link" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
