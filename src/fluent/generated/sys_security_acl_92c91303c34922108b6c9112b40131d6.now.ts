import { Acl } from '@servicenow/sdk/core'

export default Acl({
    $id: '92c91303c34922108b6c9112b40131d6',
    script: script`
             `,
    active: true,
    admin_overrides: true,
    decision_type: 'allow',
    description: 'Default access control on x_692302_test_app_test_table',
    local_or_existing: 'Local',
    type: 'record',
    table: 'x_692302_test_app_test_table',
    operation: 'write',
    roles: ['4ec95fcfc30922108b6c9112b4013140'],
})
