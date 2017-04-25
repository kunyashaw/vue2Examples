<template>
<div>
    <h1>代做事项列表</h1>
    <myInput v-on:addEvent="add($event)"></myInput>
    <myList v-bind:myList="list" 
    v-on:deleteEvent="delete1($event)"></myList>
    </div>
</template>

<script>
    import ToDoInput from '@/components/ToDoInput'
    import ToDoList from '@/components/ToDoList'
    export default {
        name:'ToDoBox',
        data(){
            return {
                list:[20,30,40]
            }
        },
        components:{
            "myInput":ToDoInput,
            "myList":ToDoList
        },
        methods:{
            add(msg){
                this.list.push(msg);
            },
            delete1(index){
                this.list.splice(index,1);
            }
        }
    }
</script>

<style lang="">
    
</style>