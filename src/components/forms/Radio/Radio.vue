<template>
    <label class="vui-radio" :class="[{ 'vui-radio-button' : isButton, 'is-checked' : actualValue == actualModel, 'is-disabled': isDisabled }, actualType]">
        <span class="vui-radio__input">
            <span class="vui-radio__inner" v-if="!isButton"></span>
            <input type="radio" :value="actualValue" :name="fieldName" @change="updateValue($event.target.value)" :disabled="isDisabled">
        </span>
        <span class="vui-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>

    import Emitter from '../../../mixins/emitter';

    export default {
        mixins: [Emitter],
        name: 'VuiRadio',
        componentName: 'VuiRadioItem',
        model: {
            prop: 'model',
            event: 'input'
        },
        props: {
            model: {},
            value: String,
            type: String,
            label: {
                required: true,
                type: String
            },
            name: String,
            disabled: Boolean,
        },
        data() {
            return {}
        },
        mounted() {

        },
        computed: {
            fieldName() {
                return this.isGrouped ? this._group.name : this.name;
            },
            actualValue() {
                return this.value || this.label;
            },
            actualModel() {
                return this.isGrouped ? this._group.model : this.model;
            },
            actualType() {
                return this.isGrouped && this._group.type ? this._group.type : this.type;
            },
            isGrouped() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VuiRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        this._group = parent;
                        return true;
                    }
                }
                return false;
            },
            isButton() {
                return this.isGrouped && this._group.useButtons;
            },
            isDisabled() {
                return this.isGrouped && this._group.disabled ? this._group.disabled : this.disabled;
            }
        },
        methods: {
            updateValue(value){
                if (this.isGrouped) {
                    this.dispatch('VuiRadioGroup', 'input', [value]);
                } else {
                    this.$emit('input', value);
                }

            }
        }
    }
</script>