<template>
  <el-container style="height: 95vh; border: 1px solid #eee">
    <!-- 侧边栏添加折叠动画 -->
    <!-- 修改侧边栏容器样式 -->
    <el-aside
      :width="isCollapse ? '64px' : '200px'"
      style="border-right: 1px solid #eee; transition: all 0.3s; position: relative;">

      <!-- 悬浮控制器移到侧边栏外部 -->
      <div
        class="collapse-trigger"
        :style="{ left: isCollapse ? '64px' : '200px' }"
        @click="toggleCollapse">
        <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
      </div>

      <div class="logo">
        <span class="logo-text" v-show="!isCollapse"
        style="font-size:28px; font-weight: 800; margin-right: 3px;">匠模</span>
        <img src="@/assets/jiu.jpg" alt="Logo">
      </div>

      <el-row style="margin-top: 20px; height: 40px; padding: 0 12px;">
        <el-col :span="24">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
            :style="{
              width: isCollapse ? '40px' : '100%',
              minWidth: isCollapse ? '40px' : 'auto'
            }"
            style="transition: all 0.3s; display: inline-flex; align-items: center; justify-content: center;">
            <span v-show="!isCollapse" style="margin-left: 5px; white-space: nowrap;">新建</span>

          </el-button>
        </el-col>
      </el-row>

      <!-- 添加 collapse 属性 -->
      <el-menu
        :collapse="isCollapse"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router
        style="margin-top: 20px;"
        :collapse-transition ="false">
        <el-menu-item index="/recent-formulas">
          <i class="el-icon-time"></i>
          <span slot="title">最近算式</span>
        </el-menu-item>
        <el-menu-item index="/my-formulas">
          <i class="el-icon-folder"></i>
          <span slot="title">我的算式</span>
        </el-menu-item>
        <el-menu-item index="/my-projects">
          <i class="el-icon-suitcase-1"></i>
          <span slot="title">我的项目</span>
        </el-menu-item>
        <el-menu-item index="/template-community">
          <i class="el-icon-files"></i>
          <span slot="title">模板社区</span>
        </el-menu-item>
        <el-menu-item index="/recycle-bin">
          <i class="el-icon-delete"></i>
          <span slot="title">回收站</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="display: flex; align-items: center; justify-content: space-between; font-size: 15px; line-height: 60px;">
        <!-- <div style="font-size: 20px; font-weight: bold;">匠模久云算式平台</div> -->
        <el-col :span="5" :offset="0" small >
        <el-input placeholder="输入关键字进行搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
        </el-col>
        <div style="display: flex; align-items: center;">
          <el-dropdown>
            <el-badge is-dot class="item">
              <i class="el-icon-bell" style="margin-right: 15px; font-size: 20px; vertical-align: middle; "></i>
            </el-badge>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>最近消息<el-badge class="mark" :value="12" /></el-dropdown-item>
              <el-dropdown-item>未读消息<el-badge class="mark" :value="12" /></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- shape="square" -->
          <el-dropdown
            trigger="click"
            placement="bottom-end"
            style="display: flex; align-items: center; cursor: pointer;">
            <!-- 触发区域 -->
            <div class="user-info-trigger">
              <el-avatar
                icon="el-icon-user-solid"
                :size="30"
                style="margin-right: 10px; vertical-align: middle;"></el-avatar>
              <span style="vertical-align: middle;">王小明</span>
              <i class="el-icon-arrow-down" style="margin-left: 5px;"></i>
            </div>

            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown" style="width: 120px;">
              <el-dropdown-item>
                <i class="el-icon-user"></i> 个人中心
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="el-icon-switch-button"></i> 退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main style="box-shadow: 2px 0 0px rgba(0, 0, 0, 0.1);">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {
      const item = {

      };
      return {
        isCollapse: false,
        tableData: Array(20).fill(item),
        currentDate: new Date(),
        input2: ''
      }
    },
    methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
  .logo {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 60px; /* 设置父容器高度 */
    width: 100%; /* 父容器宽度为100% */
  }

  .logo img {
    max-height: 60%; /* 让图片的高度自适应父容器 */
    max-width: 100%; /* 确保图片宽度也不会超出 */
  }

  .el-header {
    background-color: #F6F7F8;

  }

  .el-main {
    background-color: #F6F7F8;

  }

/* 新增折叠控制器样式 */
.collapse-trigger {
  position: absolute;
  top: 50%;
  left: 200px; /* 初始位置与展开宽度一致 */
  transform: translateY(-50%);
  width: 20px;
  height: 40px;
  background: #fff;
  border: 1px solid #eee;
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 2000; /* 保证在最上层 */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

/* 添加鼠标悬停动画 */
.collapse-trigger:hover {
  background: #f5f7fa;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.15);
}

/* 确保侧边栏不会出现滚动条 */
.el-aside {
  overflow: visible !important;
}

/* 调整菜单折叠时的图标间距 */
.el-menu--collapse {
  padding: 0;
}

/* 调整 logo 在折叠状态的显示 */
.logo img {
  max-height: 60%;
  max-width: 100%;
  transition: all 0.3s;
}


/* 新增按钮样式优化 */
.el-button {
  /* 重置 element-ui 的默认padding */
  padding: 9px 15px !important;
  /* 保证按钮内容对齐 */
  display: inline-flex !important;
  align-items: center;
}

/* 展开状态下的按钮宽度 */
/* .el-button:not(.collapse-btn) {
  width: 100%;
} */

.el-menu-item {
  overflow: hidden;
}

/* 图标位置微调 */
.el-menu--collapse .el-menu-item > i {
  transform: translateX(2px);

}

.el-menu-item > i {
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.el-menu-vertical-demo {
  position: relative;
  z-index: 1;
}

</style>
