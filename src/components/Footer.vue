<template>
    <footer>
        <p>Well damn it crashed. {{ title }}</p>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: #585858;
        text-align: center;
}
</style>
