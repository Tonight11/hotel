<script setup lang="ts">
let scrollPosition = ref(0)

let updateScrollPos = () => {
    scrollPosition.value = Math.ceil(window.scrollY)
}

onMounted(() => {
    window.addEventListener('scroll', updateScrollPos)
    updateScrollPos()
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrollPos)
})
</script>

<template>
    <div class="wrapper">
        <div class="slot">
            <div
                class="slot__header"
                :class="scrollPosition >= 91 ? 'fixed' : ''"
            >
                <div class="container">
                    <QToolbar class="text-white">
                        <QToolbarTitle class="slot__header-title">
                            BAYaDAN
                        </QToolbarTitle>
                        <div class="slot__header-media">
                            <img
                                src="@/assets/imgs/social_media/instagram.svg"
                                alt=""
                            />
                            <img
                                src="@/assets/imgs/social_media/telegram.svg"
                                alt=""
                            />
                        </div>
                    </QToolbar>
                </div>
            </div>
            <slot />
        </div>
        <div class="footer">
            <div class="container">
                <div class="footer__logo">BAYaDAN</div>
                <div class="footer__info">
                    <div class="footer__info-item">
                        <span class="footer__info-item-heading">Меню:</span>
                        <p>О компании</p>
                        <p>О компании</p>
                        <p>О компании</p>
                        <p>О компании</p>
                        <p>О компании</p>
                    </div>
                    <div class="footer__info-item">
                        <span class="footer__info-item-heading"
                            >Связаться:</span
                        >
                        <p>+ 89 18921823</p>
                        <p>+ 7 912 9128 12</p>
                        <p>+ 999 12921391</p>
                    </div>
                    <div class="footer__info-item">
                        <span class="footer__info-item-heading">График:</span>
                        <p>пн-пт: 9:00 – 18:30</p>
                        <p>сб: 10:00 – 16:00</p>
                        <p>вс: выходной</p>
                    </div>
                    <div class="footer__info-item">
                        <span class="footer__info-item-heading">Соц Сети:</span>
                    </div>
                </div>
                <div class="footer__rights">
                    <div class="footer__rights-item">
                        2023©️Все права защищены
                    </div>
                    <div class="footer__rights-item">
                        Created by
                        <a href="https://github.com/Tonight11" target="_blank"
                            >@Tonight</a
                        >,
                        <a target="_blank" href="https://github.com/Shiftnn"
                            >@Shiftnn</a
                        >,
                        <a
                            target="_blank"
                            href="https://github.com/QuestionableProject"
                            >@DEAD_UGLY</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/defLayout.scss';

.q-toolbar {
    padding: 0;
}
</style>
