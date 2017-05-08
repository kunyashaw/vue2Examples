<template>
<div>
    <h1>Hello Component of Demo03</h1>
    <router-link to="demo02/20">跳转到demo02</router-link>
    <button v-on:click="jump()">跳转到demo02</button>
    <demo045 message="asdfasd" v-on:callParent="count($event)"></demo045>
    <input type="text" v-model='msg'/>
   
</div>
</template>

<script>

/*
    如果要在一个组件中显示另外一个组件
    1、将子组件import引入进来
    2、在父组件中声明
     在父组件中指定components属性为一个对象，在对象中
     去指定组件的名称和组件
     components:{
         "demo05":Demo05
     }
    3、使用子组件
    <demo05/>
 */
/*
    打通父子之间所有数据和方法的共享：
    父模板：<child ref="子名称"></child>
    父访问子:	父组件: this.$refs.子名称.子数据/方法名()
    子访问父:	子组件: this.$parent.子数据/方法名()
 */
 /*
    路由切换的3种方式：
    <a href="#/demo02">跳转到demo02</a>
    <router-link to="demo02">跳转到demo02</router-link>
    <button v-on:click="jump()">跳转到demo02</button>
    jump(){
                this.$router.push('demo02')
            }
 */
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
                this.$router.push('demo02/30');
            },
            count(msgFromSon){
                alert('msg from son is '+msgFromSon);
            }
        }
    }
</script>

<style lang="">
    
</style>