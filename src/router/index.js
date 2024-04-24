// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ReportData from '@/components/ReportData.vue';
import MainScheme from '@/components/MainScheme.vue';
import MetaData from '@/components/MetaData.vue';

const routes = [
  { path: '/table', component: MainScheme, MetaData },
  { path: '/report', component: ReportData }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
