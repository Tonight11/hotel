<template>
    <div class="wrapper-section">
        <div class="section-lato">
            <slot name="lato"></slot>
        </div>
        <div class="cursive">
            <slot name="cursive"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cursive {
    margin-top: 5rem;
    margin-left: -2rem;
}
@import url(@/assets/styles/titleComp.scss);
</style>
