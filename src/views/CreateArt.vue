<template>
  <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
    <el-form-item label="文章标题">
      <el-input v-model="form.title" @blur="te"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="form.body" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {

      }
    };
  },
  methods: {
    te(e){
      console.log(e);
      console.log(this.form.name);
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
       this.$http
        .post('/article',this.form)
        .then(response => {
          this.$message({
            type:"success",
            message:'文章创建成功'
          });
          console.log(response.data);
          this.$router.push('/');

        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>