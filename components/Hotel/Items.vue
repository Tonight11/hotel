<script setup lang="ts"></script>

<template>
    <div class="hotel__column">
        <div class="hotel__item">
            <nuxt-img
                class="hotel__img"
                sizes="sm:100vw lg:70vw"
                src="/hello.jpeg"
            />
            <div class="hotel__name">SKY DIVE</div>
            <div class="hotel__adress">г. Москва, ул. Л.Толстого 100</div>
            <div class="hotel__bottom">
                <div class="hotel__price">10000/день</div>
                <div class="hotel__btn">
                    <IconArrow />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hotel {
    &__row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -2rem;
        row-gap: 2rem;
    }
    &__column {
        flex: 0 1 33.333%;
        padding: 0 2rem;
    }

    &__item {
    }

    &__img {
        width: 100%;
        height: 40rem;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    &__name {
        margin-bottom: 0.7rem;
        color: $secondary-color;
        font-size: 3.8rem;
        line-height: 1;
    }

    &__adress {
        margin-bottom: 1rem;
        color: $default-color;
        font-size: 1.8rem;
        line-height: normal;
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;
    }

    &__price {
        color: $default-color;
        font-size: 1.8rem;
        line-height: normal;
    }

    &__btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.5rem;
        height: 3.5rem;
        position: relative;
        &:hover {
            &::before {
                border-color: $default-color;
            }
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            transform: rotate(45deg);
            border: 1px solid $secondary-color;
            transition: all 0.3s linear;
        }
    }
    &__icon {
        width: 1.5rem;
    }
}
</style>
