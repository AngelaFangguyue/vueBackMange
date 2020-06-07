<template>
  <div>
    EditArt
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="onSubmit">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input v-model="form.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" >保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {

  data() {
    return {
      form:{

      }
    };
  },
  methods:{
    onSubmit(){
      this.$http.put(`/editArt/${this.$route.params.id}`,this.form).then(res=>{
        console.log(res);
        this.$message({
          type:"success",
          message:'文章修改成功'
        });
        this.$router.push(`/`);
      }).catch(
        (err)=>{
          console.log(err);
        }
      );
    }
  },
  created() {
    let id1 = this.$route.params.id; //获取到对应id，这时就要去后台获取数据
    console.log(id1);
    this.$http
      .get(`/article/${id1}`)
      .then(response => {
        //这里的api就是后台接口
        console.log(response.data);
        this.form = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  //////////////////
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`

    if (to.path === '/'||to.path === '/1-1'||to.path === '/1-2') {
         console.log("当满足条件的时候：",from.path, to.path);
          next();
    }else{
      console.log("当不满足条件的时候：",from.path, to.path);
      console.log(to.path.slice(to.path.length - 4, to.path.length));
      next(to.path.slice(to.path.length - 4, to.path.length));
    }

  }
};
</script>

<style lang="scss" scoped>
</style>