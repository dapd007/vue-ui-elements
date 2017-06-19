<template>
    <div class="container">
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
        <div id="radio-group">
            Radio Group
            <vui-radio-group v-model="radioG" name="radio-group">
                <vui-radio label="Option 1" value="option 1" type="is-primary"></vui-radio>
                <vui-radio style="margin-left: 15px;" label="Option 2" value="Option 2" type="is-primary"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioG}}
            </div>
        </div>
        <br><br>
        <div id="radio-button">
            Radio Button (Must be grouped)
            <vui-radio-group v-model="radioB" name="radio-group" use-buttons>
                <vui-radio label="Option 1" value="Option 1"></vui-radio>
                <vui-radio label="Option 2" value="Option 2"></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioB}}
            </div>
        </div>
        <br>
        <div id="radio-button-2">
            Radio Button, with type
            <vui-radio-group v-model="radioB2" name="radio-group" use-buttons>
                <vui-radio label="Option 1" value="Option 1" type="is-success"></vui-radio>
                <vui-radio label="Option 2" value="Option 2" type="is-warning"></vui-radio>
                <vui-radio label="Option 3" value="Option 3" type="is-danger"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioB2}}
            </div>
        </div>
        <br>
        <div id="radio-button-3">
            Radio Button, with group type
            <vui-radio-group v-model="radioB3" name="radio-group" use-buttons type="is-success">
                <vui-radio label="Option 1" value="Option 1"></vui-radio>
                <vui-radio label="Option 2" value="Option 2"></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioB3}}
            </div>
        </div>
        <br>
        <div id="radio-button-4">
            Radio Button, with group type
            <vui-radio-group v-model="radioB4" name="radio-group" use-buttons type="is-danger">
                <vui-radio label="Option 1" value="Option 1"></vui-radio>
                <vui-radio label="Option 2" value="Option 2"></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioB4}}
            </div>
        </div>
        <br>
        <div id="radio-button-disabled">
            Radio Button, disabled
            <vui-radio-group v-model="radioBD" name="radio-group" use-buttons>
                <vui-radio label="Option 1" value="Option 1"></vui-radio>
                <vui-radio label="Option 2" value="Option 2" disabled></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioBD}}
            </div>
        </div>
        <br>
        <div id="radio-button-disabled-2">
            Radio Button, disabled with group type
            <vui-radio-group v-model="radioBD2" name="radio-group" use-buttons type="is-danger">
                <vui-radio label="Option 1" value="Option 1" disabled></vui-radio>
                <vui-radio label="Option 2" value="Option 2"></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioBD2}}
            </div>
        </div>
        <br>
        <div id="radio-button-disabled-3">
            Radio Button, group disabled
            <vui-radio-group v-model="radioBD3" name="radio-group" use-buttons disabled>
                <vui-radio label="Option 1" value="Option 1"></vui-radio>
                <vui-radio label="Option 2" value="Option 2"></vui-radio>
                <vui-radio label="Option 3" value="Option 3"></vui-radio>
            </vui-radio-group>
            <div>
                Selected: {{radioBD3}}
            </div>
        </div>
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
                radioG: '',
                radioB: 'Option 2',
                radioB2: 'Option 1',
                radioB3: 'Option 3',
                radioB4: '',
                radioBD: '',
                radioBD2: '',
                radioBD3: 'Option 1'
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>