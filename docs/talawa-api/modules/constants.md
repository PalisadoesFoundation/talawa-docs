[talawa-api](../README.md) / [Exports](../modules.md) / constants

# Module: constants

## Table of contents

### Variables

- [ACCESS\_TOKEN\_SECRET](constants.md#access_token_secret)
- [ADMIN\_REMOVING\_ADMIN](constants.md#admin_removing_admin)
- [ADMIN\_REMOVING\_CREATOR](constants.md#admin_removing_creator)
- [BASE\_URL](constants.md#base_url)
- [CHAT\_NOT\_FOUND\_ERROR](constants.md#chat_not_found_error)
- [COMMENT\_NOT\_FOUND\_ERROR](constants.md#comment_not_found_error)
- [EMAIL\_ALREADY\_EXISTS\_ERROR](constants.md#email_already_exists_error)
- [ERROR\_IN\_SENDING\_MAIL](constants.md#error_in_sending_mail)
- [EVENT\_NOT\_FOUND\_ERROR](constants.md#event_not_found_error)
- [EVENT\_PROJECT\_NOT\_FOUND\_ERROR](constants.md#event_project_not_found_error)
- [INCORRECT\_TAG\_INPUT](constants.md#incorrect_tag_input)
- [INTERNAL\_SERVER\_ERROR](constants.md#internal_server_error)
- [INVALID\_CREDENTIALS\_ERROR](constants.md#invalid_credentials_error)
- [INVALID\_FILE\_TYPE](constants.md#invalid_file_type)
- [INVALID\_OTP](constants.md#invalid_otp)
- [INVALID\_REFRESH\_TOKEN\_ERROR](constants.md#invalid_refresh_token_error)
- [INVALID\_TAG\_INPUT](constants.md#invalid_tag_input)
- [IN\_PRODUCTION](constants.md#in_production)
- [LAST\_RESORT\_SUPERADMIN\_EMAIL](constants.md#last_resort_superadmin_email)
- [LENGTH\_VALIDATION\_ERROR](constants.md#length_validation_error)
- [MAIL\_PASSWORD](constants.md#mail_password)
- [MAIL\_USERNAME](constants.md#mail_username)
- [MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS](constants.md#membership_request_already_exists)
- [MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR](constants.md#membership_request_not_found_error)
- [MEMBER\_NOT\_FOUND\_ERROR](constants.md#member_not_found_error)
- [MONGO\_DB\_URL](constants.md#mongo_db_url)
- [NO\_CHANGE\_IN\_TAG\_NAME](constants.md#no_change_in_tag_name)
- [ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR](constants.md#organization_image_not_found_error)
- [ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR](constants.md#organization_member_not_found_error)
- [ORGANIZATION\_NOT\_AUTHORIZED\_ERROR](constants.md#organization_not_authorized_error)
- [ORGANIZATION\_NOT\_FOUND\_ERROR](constants.md#organization_not_found_error)
- [POST\_NOT\_FOUND\_ERROR](constants.md#post_not_found_error)
- [RECAPTCHA\_SECRET\_KEY](constants.md#recaptcha_secret_key)
- [REFRESH\_TOKEN\_SECRET](constants.md#refresh_token_secret)
- [REGEX\_VALIDATION\_ERROR](constants.md#regex_validation_error)
- [REGISTRANT\_ALREADY\_EXIST\_ERROR](constants.md#registrant_already_exist_error)
- [SAME\_FILE\_ERROR](constants.md#same_file_error)
- [SMTP\_OPTIONS](constants.md#smtp_options)
- [STATUS\_ACTIVE](constants.md#status_active)
- [TAG\_ALREADY\_EXISTS](constants.md#tag_already_exists)
- [TAG\_NOT\_FOUND](constants.md#tag_not_found)
- [TASK\_NOT\_FOUND\_ERROR](constants.md#task_not_found_error)
- [TRANSLATION\_ALREADY\_PRESENT\_ERROR](constants.md#translation_already_present_error)
- [UNAUTHENTICATED\_ERROR](constants.md#unauthenticated_error)
- [URL](constants.md#url)
- [USER\_ALREADY\_HAS\_TAG](constants.md#user_already_has_tag)
- [USER\_ALREADY\_MEMBER\_ERROR](constants.md#user_already_member_error)
- [USER\_ALREADY\_UNREGISTERED\_ERROR](constants.md#user_already_unregistered_error)
- [USER\_BLOCKING\_SELF](constants.md#user_blocking_self)
- [USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION](constants.md#user_does_not_belong_to_tags_organization)
- [USER\_DOES\_NOT\_HAVE\_THE\_TAG](constants.md#user_does_not_have_the_tag)
- [USER\_NOT\_AUTHORIZED\_ADMIN](constants.md#user_not_authorized_admin)
- [USER\_NOT\_AUTHORIZED\_ERROR](constants.md#user_not_authorized_error)
- [USER\_NOT\_AUTHORIZED\_SUPERADMIN](constants.md#user_not_authorized_superadmin)
- [USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG](constants.md#user_not_authorized_to_create_tag)
- [USER\_NOT\_AUTHORIZED\_TO\_PIN](constants.md#user_not_authorized_to_pin)
- [USER\_NOT\_FOUND\_ERROR](constants.md#user_not_found_error)
- [USER\_NOT\_ORGANIZATION\_ADMIN](constants.md#user_not_organization_admin)
- [USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR](constants.md#user_profile_image_not_found_error)
- [USER\_REMOVING\_SELF](constants.md#user_removing_self)
- [apiKey](constants.md#apikey)
- [appId](constants.md#appid)
- [iOSapiKey](constants.md#iosapikey)
- [iOSappId](constants.md#iosappid)
- [iOSmessagingSenderId](constants.md#iosmessagingsenderid)
- [iOSprojectId](constants.md#iosprojectid)
- [iOSstorageBucket](constants.md#iosstoragebucket)
- [iosBundleId](constants.md#iosbundleid)
- [iosClientId](constants.md#iosclientid)
- [messagingSenderId](constants.md#messagingsenderid)
- [projectId](constants.md#projectid)
- [storageBucket](constants.md#storagebucket)

## Variables

### ACCESS\_TOKEN\_SECRET

• `Const` **ACCESS\_TOKEN\_SECRET**: `undefined` \| `string` = `process.env.ACCESS_TOKEN_SECRET`

#### Defined in

src/constants.ts:299

___

### ADMIN\_REMOVING\_ADMIN

• `Const` **ADMIN\_REMOVING\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:148

___

### ADMIN\_REMOVING\_CREATOR

• `Const` **ADMIN\_REMOVING\_CREATOR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:154

___

### BASE\_URL

• `Const` **BASE\_URL**: `string`

#### Defined in

src/constants.ts:297

___

### CHAT\_NOT\_FOUND\_ERROR

• `Const` **CHAT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:1

___

### COMMENT\_NOT\_FOUND\_ERROR

• `Const` **COMMENT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:7

___

### EMAIL\_ALREADY\_EXISTS\_ERROR

• `Const` **EMAIL\_ALREADY\_EXISTS\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:290

___

### ERROR\_IN\_SENDING\_MAIL

• `Const` **ERROR\_IN\_SENDING\_MAIL**: ``"Error in sending mail"``

#### Defined in

src/constants.ts:13

___

### EVENT\_NOT\_FOUND\_ERROR

• `Const` **EVENT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:14

___

### EVENT\_PROJECT\_NOT\_FOUND\_ERROR

• `Const` **EVENT\_PROJECT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:20

___

### INCORRECT\_TAG\_INPUT

• `Const` **INCORRECT\_TAG\_INPUT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:187

___

### INTERNAL\_SERVER\_ERROR

• `Const` **INTERNAL\_SERVER\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:93

___

### INVALID\_CREDENTIALS\_ERROR

• `Const` **INVALID\_CREDENTIALS\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:272

___

### INVALID\_FILE\_TYPE

• `Const` **INVALID\_FILE\_TYPE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:81

___

### INVALID\_OTP

• `Const` **INVALID\_OTP**: ``"Invalid OTP"``

#### Defined in

src/constants.ts:26

___

### INVALID\_REFRESH\_TOKEN\_ERROR

• `Const` **INVALID\_REFRESH\_TOKEN\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:278

___

### INVALID\_TAG\_INPUT

• `Const` **INVALID\_TAG\_INPUT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:180

___

### IN\_PRODUCTION

• `Const` **IN\_PRODUCTION**: `boolean`

#### Defined in

src/constants.ts:28

___

### LAST\_RESORT\_SUPERADMIN\_EMAIL

• `Const` **LAST\_RESORT\_SUPERADMIN\_EMAIL**: `undefined` \| `string` = `process.env.LAST_RESORT_SUPERADMIN_EMAIL`

#### Defined in

src/constants.ts:335

___

### LENGTH\_VALIDATION\_ERROR

• `Const` **LENGTH\_VALIDATION\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:105

___

### MAIL\_PASSWORD

• `Const` **MAIL\_PASSWORD**: `undefined` \| `string` = `process.env.MAIL_PASSWORD`

#### Defined in

src/constants.ts:309

___

### MAIL\_USERNAME

• `Const` **MAIL\_USERNAME**: `undefined` \| `string` = `process.env.MAIL_USERNAME`

#### Defined in

src/constants.ts:307

___

### MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS

• `Const` **MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS**: ``"Membership Request already exists"``

#### Defined in

src/constants.ts:41

___

### MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR

• `Const` **MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:35

___

### MEMBER\_NOT\_FOUND\_ERROR

• `Const` **MEMBER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:29

___

### MONGO\_DB\_URL

• `Const` **MONGO\_DB\_URL**: `undefined` \| `string` = `process.env.MONGO_DB_URL`

#### Defined in

src/constants.ts:303

___

### NO\_CHANGE\_IN\_TAG\_NAME

• `Const` **NO\_CHANGE\_IN\_TAG\_NAME**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:193

___

### ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:62

___

### ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:44

___

### ORGANIZATION\_NOT\_AUTHORIZED\_ERROR

• `Const` **ORGANIZATION\_NOT\_AUTHORIZED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:50

___

### ORGANIZATION\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:56

___

### POST\_NOT\_FOUND\_ERROR

• `Const` **POST\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:68

___

### RECAPTCHA\_SECRET\_KEY

• `Const` **RECAPTCHA\_SECRET\_KEY**: `undefined` \| `string` = `process.env.RECAPTCHA_SECRET_KEY`

#### Defined in

src/constants.ts:305

___

### REFRESH\_TOKEN\_SECRET

• `Const` **REFRESH\_TOKEN\_SECRET**: `undefined` \| `string` = `process.env.REFRESH_TOKEN_SECRET`

#### Defined in

src/constants.ts:301

___

### REGEX\_VALIDATION\_ERROR

• `Const` **REGEX\_VALIDATION\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:111

___

### REGISTRANT\_ALREADY\_EXIST\_ERROR

• `Const` **REGISTRANT\_ALREADY\_EXIST\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:74

___

### SAME\_FILE\_ERROR

• `Const` **SAME\_FILE\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:87

___

### SMTP\_OPTIONS

• `Const` **SMTP\_OPTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IS_SMTP` | `undefined` \| `string` |
| `SMTP_HOST` | `undefined` \| `string` |
| `SMTP_PASSWORD` | `undefined` \| `string` |
| `SMTP_PORT` | `undefined` \| `string` |
| `SMTP_SSL_TLS` | `undefined` \| `string` |
| `SMTP_USERNAME` | `undefined` \| `string` |

#### Defined in

src/constants.ts:338

___

### STATUS\_ACTIVE

• `Const` **STATUS\_ACTIVE**: ``"ACTIVE"``

#### Defined in

src/constants.ts:235

___

### TAG\_ALREADY\_EXISTS

• `Const` **TAG\_ALREADY\_EXISTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:200

___

### TAG\_NOT\_FOUND

• `Const` **TAG\_NOT\_FOUND**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:167

___

### TASK\_NOT\_FOUND\_ERROR

• `Const` **TASK\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:228

___

### TRANSLATION\_ALREADY\_PRESENT\_ERROR

• `Const` **TRANSLATION\_ALREADY\_PRESENT\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:266

___

### UNAUTHENTICATED\_ERROR

• `Const` **UNAUTHENTICATED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:99

___

### URL

• `Const` **URL**: ``"http://localhost:4000/graphql"`` \| ``"http://calico.palisadoes.org/talawa/graphql"``

#### Defined in

src/constants.ts:237

___

### USER\_ALREADY\_HAS\_TAG

• `Const` **USER\_ALREADY\_HAS\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:214

___

### USER\_ALREADY\_MEMBER\_ERROR

• `Const` **USER\_ALREADY\_MEMBER\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:242

___

### USER\_ALREADY\_UNREGISTERED\_ERROR

• `Const` **USER\_ALREADY\_UNREGISTERED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:248

___

### USER\_BLOCKING\_SELF

• `Const` **USER\_BLOCKING\_SELF**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:135

___

### USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION

• `Const` **USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:173

___

### USER\_DOES\_NOT\_HAVE\_THE\_TAG

• `Const` **USER\_DOES\_NOT\_HAVE\_THE\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:221

___

### USER\_NOT\_AUTHORIZED\_ADMIN

• `Const` **USER\_NOT\_AUTHORIZED\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:123

___

### USER\_NOT\_AUTHORIZED\_ERROR

• `Const` **USER\_NOT\_AUTHORIZED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:254

___

### USER\_NOT\_AUTHORIZED\_SUPERADMIN

• `Const` **USER\_NOT\_AUTHORIZED\_SUPERADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:117

___

### USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG

• `Const` **USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:207

___

### USER\_NOT\_AUTHORIZED\_TO\_PIN

• `Const` **USER\_NOT\_AUTHORIZED\_TO\_PIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:160

___

### USER\_NOT\_FOUND\_ERROR

• `Const` **USER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:260

___

### USER\_NOT\_ORGANIZATION\_ADMIN

• `Const` **USER\_NOT\_ORGANIZATION\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:129

___

### USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR

• `Const` **USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:284

___

### USER\_REMOVING\_SELF

• `Const` **USER\_REMOVING\_SELF**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

src/constants.ts:141

___

### apiKey

• `Const` **apiKey**: `undefined` \| `string` = `process.env.apiKey`

#### Defined in

src/constants.ts:311

___

### appId

• `Const` **appId**: `undefined` \| `string` = `process.env.appId`

#### Defined in

src/constants.ts:313

___

### iOSapiKey

• `Const` **iOSapiKey**: `undefined` \| `string` = `process.env.iOSapiKey`

#### Defined in

src/constants.ts:321

___

### iOSappId

• `Const` **iOSappId**: `undefined` \| `string` = `process.env.iOSappId`

#### Defined in

src/constants.ts:323

___

### iOSmessagingSenderId

• `Const` **iOSmessagingSenderId**: `undefined` \| `string` = `process.env.iOSmessagingSenderId`

#### Defined in

src/constants.ts:325

___

### iOSprojectId

• `Const` **iOSprojectId**: `undefined` \| `string` = `process.env.iOSprojectId`

#### Defined in

src/constants.ts:327

___

### iOSstorageBucket

• `Const` **iOSstorageBucket**: `undefined` \| `string` = `process.env.iOSstorageBucket`

#### Defined in

src/constants.ts:329

___

### iosBundleId

• `Const` **iosBundleId**: `undefined` \| `string` = `process.env.iosBundleId`

#### Defined in

src/constants.ts:333

___

### iosClientId

• `Const` **iosClientId**: `undefined` \| `string` = `process.env.iosClientId`

#### Defined in

src/constants.ts:331

___

### messagingSenderId

• `Const` **messagingSenderId**: `undefined` \| `string` = `process.env.messagingSenderId`

#### Defined in

src/constants.ts:315

___

### projectId

• `Const` **projectId**: `undefined` \| `string` = `process.env.projectId`

#### Defined in

src/constants.ts:317

___

### storageBucket

• `Const` **storageBucket**: `undefined` \| `string` = `process.env.storageBucket`

#### Defined in

src/constants.ts:319
