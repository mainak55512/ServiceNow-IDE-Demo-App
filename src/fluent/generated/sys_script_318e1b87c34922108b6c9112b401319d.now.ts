import { BusinessRule } from '@servicenow/sdk/core'

export default BusinessRule({
    $id: '318e1b87c34922108b6c9112b401319d',
    action: ['insert'],
    script: script`
             (function executeRule(current, previous /*null when async*/) {
             
             	// Add your code here
             
             })(current, previous);`,
    table: 'x_692302_test_app_test_table',
    name: 'Test Businessrule',
    order: 100,
    when: 'before',
    active: true,
    add_message: false,
    abort_action: false,
})
