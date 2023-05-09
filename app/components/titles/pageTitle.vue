<template>
    <div class="wrapper-page">
        <div class="page-lato" >
            <slot name="lato"></slot>
        </div>
        <div class="cursive" >
            <slot name="cursive"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .cursive {
        margin-top: -6.5rem;
    }
    @import url(@/assets/styles/titleComp.scss);
</style>