<template>
<div>
    <h1>Hello Component of Demo03</h1>
    <router-link to="demo02">跳转到demo02</router-link>
    <button v-on:click="jump()">跳转到demo02</button>
    <demo045 message="asdfasd" v-on:callParent="count($event)"></demo045>
    <input type="text" v-model='msg'/>
   
</div>
</template>

<script>
 //<demo045 v-bind:message2="msg" ></demo045>
import demo04 from '@/components/demo04'
//在模板中，要动态地绑定父组件的数据到子模板的props，与绑定到任何普通的HTML特性相类似，就是用 v-bind。
//每当父组件的数据变化时，该变化也会传导给子组件

// 路由的跳转
    export default {
        name:'demo03',
        //组件的嵌套，必须声明components属性
        components: {
        'demo045': demo04
    },
    data(){
        return{
            msg:'123'
        }
    },
        methods:{
            jump:function(){
                this.$router.push('demo02');
            },
            count(msgFromSon){
                alert('msg from son is '+msgFromSon);
            }
        }
    }
</script>

<style lang="">
    
</style>