import Vue from 'vue';
import Router from 'vue-router';
import RecentFormulas from '@/views/RecentFormulas.vue';
import MyFormulas from '@/views/MyFormulas.vue';
import MyProjects from '@/views/MyProjects.vue';
import TemplateCommunity from '@/views/TemplateCommunity.vue';
import RecycleBin from '@/views/RecycleBin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // 让 URL 看起来更干净，如 `/my-formulas` 而不是 `#/my-formulas`
  routes: [
    {
      path: '/',
      redirect: '/recent-Formulas' // 默认跳转
    },
    {
      path: '/recent-Formulas',
      component: RecentFormulas
    },
    {
      path: '/my-formulas',
      component: MyFormulas
    },
    {
      path: '/my-projects',
      component: MyProjects
    },
    {
      path: '/template-Community',
      component: TemplateCommunity
    },
    {
      path: '/recycle-bin',
      component: RecycleBin
    }
  ]
});
