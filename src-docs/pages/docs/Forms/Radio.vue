<template>
    <div>
        <div id="radio">
            <div>
                <vui-radio label="Dos" value="2" v-model="radioVal" name="test-radio"></vui-radio>
                <vui-radio style="margin-left: 15px;" label="Tres" value="custom stuff" v-model="radioVal" name="test-radio"><strong>custom stuff</strong></vui-radio>
                <div>
                    Selected: {{radioVal}}
                </div>
            </div>
            <br>
            <div>
                <vui-radio type="is-success" label="Apples" value="apples" v-model="fruits" name="fruits"></vui-radio>
                <vui-radio type="is-warning" style="margin-left: 15px;" label="Bananas" value="bananas" v-model="fruits" name="fruits"></vui-radio>
                <vui-radio type="is-danger" style="margin-left: 15px;" label="Cherries" value="cherries" v-model="fruits" name="fruits"></vui-radio>
                <div>
                    Selected: {{fruits}}
                </div>
            </div>
            <br>
            <div>
                <vui-radio disabled label="Disabled" value="disabled" v-model="selectedDisabled" name="disabled"></vui-radio>
                <vui-radio disabled style="margin-left: 15px;" label="Disabled selected" value="disabled selected" v-model="selectedDisabled" name="disabled"></vui-radio>
                <div>
                    Selected: {{selectedDisabled}}
                </div>
            </div>
            <br>
            <div>
                <vui-radio disabled type="is-success" label="Apples" value="apples" v-model="fruitsDisabled" name="fruits"></vui-radio>
                <vui-radio disabled type="is-warning" style="margin-left: 15px;" label="Bananas" value="bananas" v-model="fruitsDisabled" name="fruits"></vui-radio>
                <vui-radio disabled type="is-danger" style="margin-left: 15px;" label="Cherries" value="cherries" v-model="fruitsDisabled" name="fruits"></vui-radio>
                <div>
                    Selected: {{fruitsDisabled}}
                </div>
            </div>
        </div>
        <br><br>
        <!--<div id="radio-group">-->
            <!--Radio Group-->
            <!--<vui-radio-group v-model="radioG">-->
                <!--<vui-radio label="Option 1" value="option 1" name="test-radio"></vui-radio>-->
                <!--<vui-radio style="margin-left: 15px;" label="Option 2" value="Option 2" name="test-radio"></vui-radio>-->
                <!--<div>-->
                    <!--Selected: {{radioG}}-->
                <!--</div>-->
            <!--</vui-radio-group>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                radioVal: 0,
                fruits: '',
                selectedDisabled: 'disabled selected',
                fruitsDisabled: 'apples',
                radioG: ''
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>