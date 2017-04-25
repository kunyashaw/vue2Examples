<template>
<div>
    <button v-on:click="deleteFromList()">delete</button>
    <span>{{"index is "+index+" "+msg}}</span>
    </div>
</template>

<script>
    export default {
        props:['msg','index'],
        name:'ToDoItem' ,
        methods:{
            deleteFromList(){
                this.$emit('deleteEvent',this.index)
            }
        }
    }
</script>

<style lang="">
    
</style>