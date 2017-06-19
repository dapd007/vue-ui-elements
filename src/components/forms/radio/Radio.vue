<template>
    <label class="vui-radio">
        <span class="vui-radio__input" :class="[{ 'is-checked' : value == model, 'is-disabled': disabled }, type]">
            <span class="vui-radio__inner"></span>
            <input type="radio" :value="value" :name="name" @change="updateValue($event.target.value)" :disabled="disabled">
        </span>
        <span class="vui-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'VuiRadio',
        model: {
            prop: 'model',
            event: 'input'
        },
        props: {
            model: {},
            value: String,
            type: String,
            label: String,
            name: String,
            disabled: Boolean
        },
        data() {
            return {}
        },
        mounted() {

        },
        computed: {},
        methods: {
            updateValue(value){
                this.$emit('input', value);
            }
        }
    }
</script>