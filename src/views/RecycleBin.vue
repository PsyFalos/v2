<template>
  <div>
    <el-row>
      <!-- <el-col :span="2">
        <el-link :underline="false" style="margin-right: 25px;">文件</el-link>
      </el-col>
      <el-col :span="2">
        <el-link :underline="false">模板</el-link>
      </el-col> -->

    </el-row>

        <!-- <el-divider></el-divider> -->
  <!-- card 部分 -->
  <el-row style="margin-top: 20px;" >
          <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
         <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <a href="http://localhost:8081/" target="_blank">
            <img src="@/assets/chanpin.png" class="image" style="cursor: pointer;">
          </a>
          <div style="padding: 10px;">
          <span>我的算式型号</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time></div>
            <div class="dibu" style="margin-top: 10px; text-align: center;">
              <el-button-group style="margin: 0 auto; display: block;">
                <el-button
                  type="primary"
                  icon="el-icon-refresh-left"
                  style="
                    width: 60px;
                    padding: 8px 0;
                     /* <!-- 垂直方向留白 --> */
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  "
                  plain
                ></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  style="
                    width: 60px;
                    padding: 8px 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  "
                  plain
                  @click="open3"
                ></el-button>
              </el-button-group>
            </div>
            </div>
           </el-card>
          </el-col>
        </el-row>
  <!-- 页码 部分 -->
  <el-row>
    <el-col :span="12" :offset="6">
      <el-pagination  layout="prev, pager, next"
      :total="1000"
      style="margin: 20px 0px;"
      prev-text="上一页"
      next-text="下一页">
      </el-pagination>
    </el-col>
  </el-row>

  </div>
</template>

<script>
export default {
  methods: {

    open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

    },
  name: 'App',
  data() {
      const item = {

      };
      return {
        tableData: Array(20).fill(item),
        currentDate: new Date(),
        input2: ''
      }
    }
}
</script>

<style>
/* 卡片区域开始 */
.time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .dibu {
    display: flex;
    align-items: center; /* 垂直居中 */
  }


  /* 卡片区域结束 */
</style>

