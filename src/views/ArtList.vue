<template>
  <el-table :data="artList">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="body" label="内容" width="120"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        {{scope.$index}}\{{scope.row}}\{{scope.column}}
        <el-button size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      artList: []}
  },
  methods: {
    fetch() {
      //获取要展示的文章数据
      this.$http
        .get("article") //这里面的get put post delete都是后端服务器文件定义好的
        .then(response => {
          console.log(response.data);
          this.artList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleEdit(row) {
      //编辑的话，进入一个新的页面
      // console.log(scope.$index);
      this.$router.push(`/${row}/editArt`);
    },
    handleDelete(id) {
      //向后台发送删除数据的操作
      //删除之后还需要重新获取一遍数据，这时候页面会再次刷新
      //昨天遇到的问题是：修改之后，触发一个事件，然后
      this.$http
        .delete(`/article/${id}`) //这里面的get put post delete都是后端服务器文件定义好的
        .then(response => {
          //这里的api就是后台接口
          console.log(response.data);
          //this.artList = response.data;
          this.$message({
            type:"success",
            message:'文章删除成功'
          });
        })
        .catch(error => {
          console.log(error);
        });
      this.fetch();
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
</style>