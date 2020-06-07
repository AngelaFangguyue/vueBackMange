<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" router :default-active="activeIndex">
          <el-submenu index="1">
            <template>
              <i class="el-icon-menu"></i>
              目录
            </template>
            <el-menu-item-group>
              <el-menu-item route index="1-1" >文章列表</el-menu-item>
              <el-menu-item route index="1-2" >编辑文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  data(){
    return{
      flg:'1-1'
    }
  },
  computed:{
    activeIndex(){
      return this.$route.path.replace('/','')
    }
  },
  methods:{
    getPath(){

    }
  },
  created() {
    console.log(this.$router);
    console.log(this.$route.path);
    if (this.$route.path === '/1-1'){
      this.flg = '1-1';
    }else{
      this.flg = '1-2';
    }
    // ////////////////
    // this.$router.beforeEach((to, from,next) => {
    //   let toPath = to.path.slice(to.path.length - 4, to.path.length);
    //   // ...
    //   if (from.path !== '/1-1' || from.path !== '/1-2') {
    //     if(){
    //
    //     }else{
    //
    //     }
    //     //console.log(to.path.slice(to.path.length - 4, to.path.length));
    //     //next(to.path.slice(to.path.length - 4, to.path.length));
    //     //console.log(from.path, to.path);
    //   }else{
    //     next();
    //   }
    //
    // })
}
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
