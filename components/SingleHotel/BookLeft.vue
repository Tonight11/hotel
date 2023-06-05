<script setup lang="ts">
const email = defineModel<string>('email')
const name = defineModel<string>('name')
const number = defineModel<string>('number')
</script>

<template>
    <div class="book-hotel__right">
        <q-input
            v-model="email"
            outlined
            label="Email"
            bg-color="transparent"
            color="yellow"
            label-color="white"
            :input-style="{ color: 'white' }"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please type email']"
        />
        <q-input
            v-model="name"
            outlined
            label="Name"
            bg-color="transparent"
            color="yellow"
            label-color="white"
            :input-style="{ color: 'white' }"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
        />
        <q-input
            v-model="number"
            outlined
            label="Number"
            bg-color="transparent"
            color="yellow"
            label-color="white"
            :input-style="{ color: 'white' }"
            lazy-rules
            :rules="[
                (val) =>
                    (val && val.length >= 11) || 'Please type correct number',
            ]"
        />
    </div>
</template>

<style lang="scss" scoped></style>
