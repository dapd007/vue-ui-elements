<template>
    <div class="vui-radio-group">
        <slot></slot>
    </div>
</template>
<script>

    import Emitter from '../../../mixins/emitter';

    export default {
        mixins: [Emitter],
        name: 'VuiRadioGroup',
        componentName: 'VuiRadioGroup',
        model: {
            prop: 'model',
            event: 'input'
        },
        props: {
            model: {},
            name: {
                required: true,
                type: String
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {},
        watch: {
            model(value) {
                this.$emit('change', value);
                this.dispatch('VuiRadio', 'vui.form.change', [this.value]);
            }
        }
    }
</script>