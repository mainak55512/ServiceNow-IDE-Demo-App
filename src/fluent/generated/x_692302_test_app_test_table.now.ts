import { BooleanColumn, ChoiceColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_692302_test_app_test_table = Table({
    name: 'x_692302_test_app_test_table',
    label: 'Test Table',
    allow_web_service_access: false,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    accessible_from: 'public',
    extends: 'task',
    actions: ['read', 'update', 'create'],
    schema: {
        test_string: StringColumn({
            label: 'test string',
            mandatory: true,
            maxLength: 40,
        }),
        test_choice: ChoiceColumn({
            label: 'Test Choice',
            maxLength: 40,
            dropdown: 'dropdown_with_none',
            choices: {
                1: {
                    label: 'Choice 1',
                    inactive_on_update: false,
                },
                2: {
                    label: 'Choice 2',
                    inactive_on_update: false,
                },
            },
        }),
        test_bool: BooleanColumn({
            label: 'Test Bool',
            read_only: true,
            maxLength: 40,
        }),
        test_ref: ReferenceColumn({
            label: 'test Ref',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
    },
})
