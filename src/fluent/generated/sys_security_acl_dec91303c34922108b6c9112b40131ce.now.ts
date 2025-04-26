import { Acl } from '@servicenow/sdk/core'

export default Acl({
    $id: 'dec91303c34922108b6c9112b40131ce',
    script: script`
             `,
    active: true,
    admin_overrides: true,
    decision_type: 'allow',
    description: 'Default access control on x_692302_test_app_test_table',
    local_or_existing: 'Local',
    type: 'record',
    table: 'x_692302_test_app_test_table',
    operation: 'read',
    roles: ['4ec95fcfc30922108b6c9112b4013140'],
})
