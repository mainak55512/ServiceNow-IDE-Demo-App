import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'ed2f57c7c34922108b6c9112b4013163',
    table: 'sys_ui_policy',
    data: {
        active: true,
        conditions: 'test_stringISNOTEMPTY^EQ',
        global: true,
        inherit: false,
        isolate_script: true,
        on_load: true,
        order: 100,
        reverse_if_false: true,
        run_scripts: false,
        script_false: 'function onCondition() {\n\n}',
        script_true: 'function onCondition() {\n\n}',
        short_description: 'Test Ui Policy',
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Test Ui Policy',
        table: 'x_692302_test_app_test_table',
        ui_type: 0,
    },
})
