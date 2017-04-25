<template>
    <ul>
        <li v-for="(tmp,index1) in myList">
            <item v-on:deleteEvent="delete2($event)" v-bind:msg="tmp":index="index1"/>
        </li>
    </ul>
</template>

<script>
    import ToDoItem from '@/components/ToDoItem'
    export default {
        props:['myList'],
        name:'ToDoList',
        components:{
            "item":ToDoItem
        },
        methods:{
            delete2(index){
                this.$emit('deleteEvent',index)
            }
        }
    }
</script>

<style lang="">
    
</style>