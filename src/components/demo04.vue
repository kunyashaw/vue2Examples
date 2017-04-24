<template>
<div>
    <h1>Hello Component of Demo04</h1>
    <div>{{"msg form parent is "+message}}</div>
    <div>{{"msg form parent(bind) is "+message2}}</div>
    <button v-on:click="sendToFather()">发给父组件</button>
    </div>
</template>

<script>
    export default {
        //如果想在demo04组件中接受福组件的值，需要在这里通过props属性指定要接受的
        //变量名，然后在父组件中通过属性传递过来
        //比如<demo04 message="hello!"></demo04>
        props: ['message','message2'],
        name:'demo04',
        methods:{
            sendToFather(){
                console.log('ready to send');
                this.$emit('callParent',123)
            }
        }
    }
</script>

<style lang="">
    
</style>