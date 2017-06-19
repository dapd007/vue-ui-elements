/**
 * Created by David on 15/06/2017.
 */

import config, { setOptions } from './utils/config'

//  General
import Icon from './components/Icon';

//  Forms
import Radio from './components/forms/Radio';
import RadioGroup from './components/forms/RadioGroup';

const components = {
    Icon,
    Radio,
    RadioGroup
};

components.install = (Vue, options = {}) => {
    // Options
    setOptions(Object.assign(config, options));

    for (const componentName in components) {
        const component = components[componentName];

        if (component && componentName !== 'install') {
            Vue.component(component.name, component)
        }
    }
};

export default components;
