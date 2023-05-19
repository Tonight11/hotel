<template>
    <div class="burger-wrapper">
        <div class="burger-wrapper__navigation" :class="isActive ? 'activeNavigation' : ''">
            <div class="burger-wrapper__navigation-menu">
                <div class="burger-wrapper__navigation-links" @mouseleave="mouseLeaveHandler">
                    <NuxtLink to="/" class="linkFont" :class="isActive ? 'textActive' : 'textInactive'" @click="menuToggle"
                        @mouseover="mouseOverHandler('Home')">
                        Home</NuxtLink>
                    <NuxtLink to="/hotel" class="linkFont" :class="isActive ? 'textActive' : 'textInactive'"
                        @click="menuToggle" @mouseover="mouseOverHandler('Hotel')">Hotel
                    </NuxtLink>
                    <NuxtLink to="/hotel/123" class="linkFont" :class="isActive ? 'textActive' : 'textInactive'"
                        @click="menuToggle" @mouseover="mouseOverHandler('Shotel')">SHotel
                    </NuxtLink>
                </div>
                <div class="burger-wrapper__navigation-displayer">
                    <titles-page-title>
                        <template #cursive>
                            <p class="displayFont" :class="isActive ? 'textActive' : 'textInactive'
                                ">
                                {{ textToDisplay }}
                            </p>
                        </template>
                    </titles-page-title>
                </div>
            </div>
            <div class="burger-wrapper__navigation-footer">
                <div class="burger-wrapper__navigation-footer-item" :class="isActive ? 'textActive' : 'textInactive'">
                    <p>INSTAGRAM</p>
                    <img src="@/assets/imgs/social_media/instagram.svg" alt="" />
                </div>
                <div class="burger-wrapper__navigation-footer-item" :class="isActive ? 'textActive' : 'textInactive'">
                    <p>TELEGRAM</p>
                    <img src="@/assets/imgs/social_media/telegram.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="burger-wrapper__menu" @click="menuToggle">
            <div class="burger-wrapper__menu-dot"></div>
            <div class="burger-wrapper__menu-dot" :class="isActive ? 'activeDotClose' : ''"></div>
            <div class="burger-wrapper__menu-dot" :class="isActive ? 'activeDotLong' : ''"></div>
            <div class="burger-wrapper__menu-dot"></div>
            <div class="burger-wrapper__menu-dot"></div>
            <div class="burger-wrapper__menu-dot" :class="isActive ? 'activeDotClose' : ''"></div>
            <div class="burger-wrapper__menu-dot"></div>
            <div class="burger-wrapper__menu-dot"></div>
            <div class="burger-wrapper__menu-dot"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
let isActive = ref(false)
let router = useRoute()
let path = ref(router.path.split('/'))
let curPage = ref(path.value[path.value.length - 1])
let textToDisplay = ref(curPage.value !== '' ? curPage.value : 'Home')

let menuToggle = () => {
    if (isActive.value) {
        document.body.style.overflowY = 'visible'
        return (isActive.value = false)
    } else {
        document.body.style.overflowY = 'hidden'
        return (isActive.value = true)
    }
}

let mouseOverHandler = (toDisplay: any) => {
    textToDisplay.value = toDisplay
}

let mouseLeaveHandler = () => {
    path = ref(router.path.split('/'))
    curPage = ref(path.value[path.value.length - 1])
    textToDisplay.value = curPage.value
}
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/menuComp.scss);
</style>
