<template>
<div>
    <span>{{"msg is "+msg}}</span>
    <button v-on:click="getData()">getData</button>
</div>
</template>

<script>
    export default{
        name:'demo05',
        data(){
            return {
                msg:''
            }
        },
        methods:{
            getData(){
               //发起网络请求（static目录下test.json文件）
                this.$http.get('static/test.json')
                .then(function(response){
                    console.log(response);
                    console.log(response.data);
                    this.msg = response.data[0].name;
                })
            }
        }
    }    
</script>

<style lang="">
    
</style>