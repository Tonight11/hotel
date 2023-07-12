<script setup lang="ts">
interface PriceRange {
    min: number
    max: number
}
// will be refactored when back will be ready
const maxPriceFromBackend = 1000

const search = ref<string>('')
const price = ref<PriceRange>({
    min: 10,
    max: maxPriceFromBackend,
})

const maxPrice = computed(() => maxPriceFromBackend)
</script>

<template>
    <div class="hotel">
        <UIPageTitle>
            <template #lato>
                <p>Обьекты</p>
            </template>
            <template #cursive><p>objects</p></template>
        </UIPageTitle>
        <div class="container">
            <div class="hotel__top">
                <div class="hotel__search">
                    <div class="hotel__text">
                        Looking for something certain?
                    </div>
                    <q-input
                        v-model="search"
                        outlined
                        label="Email"
                        bg-color="transparent"
                        color="yellow"
                        label-color="white"
                        :input-style="{ color: 'white' }"
                    />
                </div>
                <div class="hotel__price">
                    <div class="hotel__text">Price</div>
                    <q-range
                        v-model="price"
                        :min="0"
                        :max="1000"
                        :left-label-value="price.min + 'руб'"
                        :right-label-value="price.max + 'руб'"
                        label-always
                        switch-label-side
                        color="orange"
                    />
                </div>

                <q-btn
                    type="submit"
                    style="background-color: #ca8647"
                    text-color="white"
                    label="GO"
                    class="book-hotel__btn"
                />
            </div>
            <HotelRow />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hotel {
    &__search {
    }

    &__text {
        font-size: 3rem;
    }

    &__price {
    }
}
</style>
