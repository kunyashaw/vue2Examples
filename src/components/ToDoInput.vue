<template>
<div>
    <input type='text' v-model="content"/>
    <button v-on:click="addToList()">Add</button>
    </div>
</template>

<script>
    export default {
        name:'ToDoInput',
        data(){
            return{
                content:''
            }
        },
        methods:{
            addToList(){
                this.$emit('addEvent',this.content)
            }
        }
    }
</script>

<style lang="">
    
</style>