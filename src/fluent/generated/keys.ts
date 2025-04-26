import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '8f6a9047a7854854938c982ed92ae210'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'cdba012075834dee8db38e9a980700be'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'e8eeb97c8d0e4ec0999ca0382a5540de'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7e3279b5173c433c9f05f1c03aaececc'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '52c91303c34922108b6c9112b40131cb'
                        key: {
                            sys_security_acl: '96c91303c34922108b6c9112b40131c7'
                            sys_user_role: '4ec95fcfc30922108b6c9112b4013140'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ec91303c34922108b6c9112b40131e0'
                        key: {
                            sys_security_acl: '56c91303c34922108b6c9112b40131dd'
                            sys_user_role: '4ec95fcfc30922108b6c9112b4013140'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ac91303c34922108b6c9112b40131d9'
                        key: {
                            sys_security_acl: '92c91303c34922108b6c9112b40131d6'
                            sys_user_role: '4ec95fcfc30922108b6c9112b4013140'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6c91303c34922108b6c9112b40131d2'
                        key: {
                            sys_security_acl: 'dec91303c34922108b6c9112b40131ce'
                            sys_user_role: '4ec95fcfc30922108b6c9112b4013140'
                        }
                    },
                ]
            }
        }
    }
}
