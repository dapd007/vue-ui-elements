<template>
    <span class="vui-icon" :class="[type, size]">
        <i :class="iconClass">{{ iconPack === 'mdi' ? icon : '' }}</i>
    </span>
</template>
<script>

    import config from '../../utils/config';

    export default {
        name: 'VuiIcon',
        props: {
            pack: String,
            icon: {
                type: String,
                required: true
            },
            type: String,
            size: String
        },
        data() {
            return {
                iconPack: this.pack ? this.pack : config.defaultIconPack
            }
        },
        mounted() {

        },
        methods: {

        },
        computed: {
            iconClass() {
                if ( this.iconPack === 'fa' ) {
                    return 'fa fa-' + this.icon;
                } else if ( this.iconPack === 'mdi' ) {
                    return 'material-icons';
                }
            },
//            theIcon() {
//                if ( this.iconPack === 'mdi' )
//                    return this.icon;
//                else
//                    return 'fa-' . this.icon;
//            }
        }
    }
</script>