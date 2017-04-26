<template>
<div>
<h1>Hello Component of Demo01</h1>
<p>{{"u_name is "+u_name | uppercaseTest}}</p>
<ul>
    <li v-for="item in list">{{item}}</li>
</ul>
<ul>
    <li v-for="(item,index) in list">{{"index is "+index+" content is "+item}}</li>
</ul>
<button v-on:click="loadMore()" v-if="hasMore">加载更多数据</button>
<p v-if="!hasMore">没有更多数据可以加载了</p>

<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
</div>
    
</template>

<script>
// 数据绑定以及常用指令
    export default {
        name:'demo02',
        watch: {
        message: function (newValue, oldValue) {
            console.log("newValue is "+newValue);
       }},
        data(){
            return {
                u_name:"zhangsan",
                list:[10,20,30,40],
                hasMore:true,
                message:''
            }
        },
        methods:{
            loadMore: function (){
                alert('加载更多数据！');
        }           
        },
        created(){
            console.log(this.$route.params.id);
        },
        filters:{
            uppercaseTest: function (str) {
               return str.toUpperCase();
            },
            lowercaseTest: function (str) {
                return str.toLowerCase();
            }
        }
    }
</script>

<style lang="">
    
</style>