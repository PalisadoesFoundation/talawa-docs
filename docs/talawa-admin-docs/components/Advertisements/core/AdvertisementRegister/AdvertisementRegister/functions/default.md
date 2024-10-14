[**talawa-admin**](../../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../../modules.md) / [components/Advertisements/core/AdvertisementRegister/AdvertisementRegister](../README.md) / default

# Function: default()

\> **default**(`props`): `JSX.Element`

Component for registering or editing an advertisement.

## Parameters

• **props**: `InterfaceAddOnRegisterProps`

Contains form status, advertisement details, and a function to update parent state.

## Returns

`JSX.Element`

A JSX element that renders a form inside a modal for creating or editing an advertisement.

## Example

```tsx
\<AdvertisementRegister
  formStatus="register"
  setAfter=\{(value) =\> console.log(value)\}
/\>
```

## Defined in

[src/components/Advertisements/core/AdvertisementRegister/AdvertisementRegister.tsx:60](https://github.com/PalisadoesFoundation/talawa-admin/blob/84f5af8b3720f5b290ac28bcfd7071c13e1f93aa/src/components/Advertisements/core/AdvertisementRegister/AdvertisementRegister.tsx#L60)
